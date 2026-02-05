# Netlify Deploy Button Setup

This guide explains how to set up the Netlify deploy button in your Sanity Studio.

## Overview

The studio includes a custom plugin that adds a "Deploy to Netlify" button in the studio toolbar. This button allows you to trigger a new Netlify deployment directly from the Sanity Studio interface.

## Step 1: Create a Netlify Build Hook

1. Go to your Netlify dashboard: https://app.netlify.com
2. Select your site
3. Navigate to **Site settings** > **Build & deploy** > **Continuous deployment** > **Build hooks**
4. Click **Add build hook**
5. Give it a name (e.g., "Sanity Studio Trigger")
6. Click **Save**
7. **Copy the build hook URL** - it will look like:
   ```
   https://api.netlify.com/build_hooks/1234567890abcdef
   ```

## Step 2: Configure the Build Hook URL

You have two options to configure the build hook URL:

### Option A: Environment Variable (Recommended)

Create a `.env` file in the `studio` directory (or add to your existing `.env` file):

```bash
SANITY_STUDIO_NETLIFY_BUILD_HOOK_URL=https://api.netlify.com/build_hooks/696faf8afd1c05c5650516c2
```

### Option B: Direct Configuration

Edit `studio/sanity.config.ts` and uncomment/modify the plugin configuration:

```typescript
netlifyDeployPlugin({
  buildHookUrl: 'https://api.netlify.com/build_hooks/YOUR_BUILD_HOOK_ID',
  siteName: 'Netlify', // Optional: customize the site name
}),
```

## Step 3: Access the Deploy Button

1. Start your studio: `npm run dev` (or `npm run start`)
2. Look for **"Deploy to Netlify"** in the studio toolbar (top menu)
3. Click it to open the deploy tool
4. Click **"Trigger Deployment"** to start a new build

## How It Works

- The button sends a POST request to your Netlify build hook URL
- Netlify receives the request and triggers a new build
- You'll see a success message in the studio
- Check your Netlify dashboard to monitor the build progress

## Troubleshooting

### Button is disabled or shows warning

- Make sure you've set the `SANITY_STUDIO_NETLIFY_BUILD_HOOK_URL` environment variable
- Verify the build hook URL is correct
- Restart your studio after adding the environment variable

### Deployment doesn't trigger

- Check that the build hook URL is correct
- Verify the build hook is active in your Netlify dashboard
- Check the browser console for any error messages
- Ensure your studio has network access to make POST requests

### Environment variable not working

- Make sure the `.env` file is in the `studio` directory (not the root)
- Restart your development server after adding/changing environment variables
- Environment variables must be prefixed with `SANITY_STUDIO_` to be available in the studio

## Security Notes

- Build hooks are public URLs - anyone with the URL can trigger a deployment
- Consider using Netlify's authentication features if you need additional security
- Don't commit your `.env` file with the build hook URL to version control
- Add `.env` to your `.gitignore` file

## Customization

You can customize the plugin by modifying `studio/src/plugins/netlifyDeploy.tsx`:

- Change the button text
- Modify the UI styling
- Add additional functionality (e.g., deployment status checking)
- Customize success/error messages

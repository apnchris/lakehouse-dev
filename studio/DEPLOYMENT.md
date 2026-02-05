# Deploying Sanity Studio to Sanity.io

Follow these steps to deploy your Sanity Studio so it appears in the Studios section of your Sanity project.

## Prerequisites

1. **Get your Sanity Project ID**
   - Go to https://www.sanity.io/manage
   - Select your project
   - Copy your Project ID (it looks like: `abc123xyz`)

2. **Set your Project ID**

   You have two options:

   **Option A: Environment Variable (Recommended)**
   
   Create a `.env` file in the `studio` directory:
   ```bash
   SANITY_STUDIO_PROJECT_ID=your-actual-project-id
   SANITY_STUDIO_DATASET=production
   ```

   **Option B: Update Config Directly**
   
   Edit `studio/sanity.config.ts` and `studio/sanity.cli.ts` to replace the placeholder with your actual project ID.

## Deployment Steps

1. **Navigate to the studio directory:**
   ```bash
   cd studio
   ```

2. **Authenticate with Sanity CLI (if not already):**
   ```bash
   npx sanity login
   ```
   This will open a browser window for you to authenticate.

3. **Deploy the studio:**
   ```bash
   npm run deploy
   ```
   Or:
   ```bash
   npx sanity deploy
   ```

4. **Follow the prompts:**
   - The CLI will ask you to confirm the project ID
   - It will ask for a hostname (you can use the default or customize it)
   - The default hostname format is: `your-project-name.sanity.studio`

5. **Access your deployed studio:**
   - After deployment, you'll get a URL like: `https://your-project-name.sanity.studio`
   - The studio will also appear in the Studios section at https://www.sanity.io/manage

## Troubleshooting

- **"Project not found"**: Make sure your Project ID is correct
- **"Not authenticated"**: Run `npx sanity login` first
- **"Permission denied"**: Make sure you're the owner or have admin access to the project

## Updating the Studio

After making changes to your studio configuration or schema, simply run `npm run deploy` again to update the deployed version.

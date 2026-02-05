import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './src/schemaTypes'
import {structure} from './structure'
import {netlifyDeployPlugin} from './src/plugins/netlifyDeploy'

// Environment variables for project configuration
const projectId = process.env.SANITY_STUDIO_PROJECT_ID || 'your-projectID'
const dataset = process.env.SANITY_STUDIO_DATASET || 'production'

export default defineConfig({
  name: 'lakehouse-ventures-studio',
  title: 'Lakehouse',
  projectId,
  dataset,
  plugins: [
    structureTool({structure}),
    visionTool(),
    netlifyDeployPlugin({
      // Optional: You can configure the build hook URL here or use environment variable
      // buildHookUrl: 'https://api.netlify.com/build_hooks/YOUR_BUILD_HOOK_ID',
      // siteName: 'Netlify',
    }),
  ],
  schema: {
    types: schemaTypes,
  },
})

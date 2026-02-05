import {definePlugin} from 'sanity'
import {RocketIcon} from '@sanity/icons'
import {useState} from 'react'

interface NetlifyDeployPluginConfig {
  buildHookUrl?: string
  siteName?: string
}

export const netlifyDeployPlugin = definePlugin<NetlifyDeployPluginConfig>((config) => {
  const buildHookUrl = config?.buildHookUrl || process.env.SANITY_STUDIO_NETLIFY_BUILD_HOOK_URL
  const siteName = config?.siteName || 'Netlify'

  if (!buildHookUrl) {
    console.warn('Netlify Deploy Plugin: No build hook URL configured')
  }

  return {
    name: 'netlify-deploy',
    tools: [
      {
        name: 'netlify-deploy',
        title: 'Deploy to Netlify',
        icon: RocketIcon,
        component: () => {
          const [isDeploying, setIsDeploying] = useState(false)
          const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')
          const [message, setMessage] = useState('')

          const triggerDeploy = async () => {
            if (!buildHookUrl) {
              setStatus('error')
              setMessage('Build hook URL not configured. Please set SANITY_STUDIO_NETLIFY_BUILD_HOOK_URL environment variable.')
              return
            }

            setIsDeploying(true)
            setStatus('idle')
            setMessage('')

            try {
              const response = await fetch(buildHookUrl, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
              })

              if (response.ok) {
                setStatus('success')
                setMessage(`Deployment triggered successfully! Check your ${siteName} dashboard for build status.`)
              } else {
                setStatus('error')
                setMessage(`Failed to trigger deployment: ${response.statusText}`)
              }
            } catch (error) {
              setStatus('error')
              setMessage(`Error: ${error instanceof Error ? error.message : 'Unknown error'}`)
            } finally {
              setIsDeploying(false)
            }
          }

          return (
            <div style={{padding: '2rem', maxWidth: '600px'}}>
              <div style={{marginBottom: '1.5rem'}}>
                <h2 style={{fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.5rem'}}>
                  Deploy to {siteName}
                </h2>
                <p style={{color: '#666', fontSize: '0.875rem', margin: 0}}>
                  Trigger a new deployment of your site on {siteName}. This will rebuild your site with the latest content.
                </p>
              </div>
              
              {status === 'success' && (
                <div style={{
                  padding: '0.75rem',
                  borderRadius: '4px',
                  backgroundColor: '#d4edda',
                  border: '1px solid #c3e6cb',
                  color: '#155724',
                  marginBottom: '1rem',
                  fontSize: '0.875rem'
                }}>
                  {message}
                </div>
              )}

              {status === 'error' && (
                <div style={{
                  padding: '0.75rem',
                  borderRadius: '4px',
                  backgroundColor: '#f8d7da',
                  border: '1px solid #f5c6cb',
                  color: '#721c24',
                  marginBottom: '1rem',
                  fontSize: '0.875rem'
                }}>
                  {message}
                </div>
              )}

              <div style={{marginBottom: '1rem'}}>
                <button
                  onClick={triggerDeploy}
                  disabled={isDeploying || !buildHookUrl}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.75rem 1.5rem',
                    fontSize: '0.875rem',
                    fontWeight: 500,
                    color: '#fff',
                    backgroundColor: isDeploying || !buildHookUrl ? '#ccc' : '#2276fc',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: isDeploying || !buildHookUrl ? 'not-allowed' : 'pointer',
                    opacity: isDeploying || !buildHookUrl ? 0.6 : 1,
                  }}
                >
                  {isDeploying ? (
                    <>
                      <span style={{display: 'inline-block', width: '14px', height: '14px', border: '2px solid #fff', borderTopColor: 'transparent', borderRadius: '50%', animation: 'spin 0.6s linear infinite'}}></span>
                      Deploying...
                    </>
                  ) : (
                    <>
                      <RocketIcon style={{width: '16px', height: '16px'}} />
                      Trigger Deployment
                    </>
                  )}
                </button>
              </div>

              {!buildHookUrl && (
                <div style={{
                  padding: '0.75rem',
                  borderRadius: '4px',
                  backgroundColor: '#fff3cd',
                  border: '1px solid #ffeaa7',
                  color: '#856404',
                  fontSize: '0.875rem'
                }}>
                  ⚠️ Build hook URL not configured. Set the{' '}
                  <code style={{backgroundColor: '#f8f9fa', padding: '0.125rem 0.25rem', borderRadius: '2px'}}>
                    SANITY_STUDIO_NETLIFY_BUILD_HOOK_URL
                  </code>{' '}
                  environment variable.
                </div>
              )}

              <style>{`
                @keyframes spin {
                  to { transform: rotate(360deg); }
                }
              `}</style>
            </div>
          )
        },
      },
    ],
  }
})

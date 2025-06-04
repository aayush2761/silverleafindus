import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Auth0Provider } from '@auth0/auth0-react';
import './globalStyles.css'
import App from './routes.jsx'

createRoot(document.getElementById('root')).render(
	<Auth0Provider
		domain="dev-rmbpkkahukzoxrnm.us.auth0.com"
		clientId="Y85bH99m4G0MWWihWRwJRwWTQxlylkOt"
		authorizationParams={{
			redirect_uri: window.location.origin
		}}
	>
		<App />
	</Auth0Provider>,
)
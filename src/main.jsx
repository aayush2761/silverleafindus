import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Auth0Provider } from '@auth0/auth0-react';
import './globalStyles.css'
import App from './routes.jsx'

createRoot(document.getElementById('root')).render(
	<Auth0Provider
		domain="trulyaman25.us.auth0.com"
		clientId="eK1KbGq5R4atuKyQxKgVkTJtZugLoXu8"
		authorizationParams={{
			redirect_uri: window.location.origin
		}}
	>
		<App />
	</Auth0Provider>,
)
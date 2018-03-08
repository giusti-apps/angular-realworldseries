import { ENV } from "../core/env.config";

interface AuthConfig {
    CLIENT_ID: string;
    CLIENT_DOMAIN: string;
    AUDIENCE: string;
    REDIRECT: string;
    SCOPE: string;
    NAMESPACE: string;
};

export const AUTH_CONFIG: AuthConfig = {
    CLIENT_ID: 'Nx0vzaMdhE3Y4ySEB3bdyWrZJxGYOz07',
    CLIENT_DOMAIN: 'juangiusti.auth0.com', // e.g., you.auth0.com
    AUDIENCE: 'http://localhost:8083/api/', // e.g., http://localhost:8083/api/
    REDIRECT: `${ENV.BASE_URI}/callback`,
    SCOPE: 'openid profile',
    NAMESPACE: 'http://myapp.com/roles' //Este NAMESPACE debe coincidir con el NAMESPACE de la RULE de AUTH0
}
module.exports = {
    AUTH0_DOMAIN: 'juangiusti.auth0.com', // e.g., kmaida.auth0.com
    AUTH0_API_AUDIENCE: 'http://localhost:8083/api/', // e.g., 'http://localhost:8083/api/'
    MONGO_URI: process.env.MONGO_URI || 'mongodb://admin:123456@ds119302.mlab.com:19302/mimean',
    NAMESPACE: 'http://myapp.com/roles' //Este NAMESPACE debe coincidir con el NAMESPACE de la RULE de AUTH0
};
const httpProxy = require('http-proxy');
const serviceMap = require('./utils/serviceMap');
const determineTargetUrl = require('./utils/determineTargetUrl');
const proxy = httpProxy.createProxyServer({});

// Base URL for backend services
const BASE_URL = 'http://localhost';

module.exports = (app) => {
 app.use((req, res) => {
    // Determine the target URL based on the request path
    const targetUrl = determineTargetUrl(req.url);

    if (!targetUrl) {
      // If no target URL is found, send a 404 response
      res.status(404).send('Not Found');
      return;
    }

    // Forward the request to the target URL
    proxy.web(req, res, { target: targetUrl });
 });
};

const httpProxy = require('http-proxy');
const morgan = require('morgan');

const proxy = httpProxy.createProxyServer({});

const URL = `http://localhost`;

module.exports = (req, res) => {
  morgan('dev')(req, res, () => {});

  const authUrl = `${URL}:3001`;
  const coursesUrl = `${URL}:3002`;

  let targetUrl;
  if (req.url.startsWith('/auth')) {
    targetUrl = authUrl;
  } else {
    targetUrl = coursesUrl;
  }

  proxy.web(req, res, { target: targetUrl });
};

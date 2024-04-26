const app = require("./app");
const configureMiddleware = require("./utils/middleware");
const configureProxy = require("./proxy");
const configureErrorHandling = require("./utils/errorHandling");

configureMiddleware(app);
configureProxy(app);
configureErrorHandling(app);

const PORT = 3000;
app.listen(PORT, () => {
 console.log(`Proxy server running on port ${PORT}`);
});

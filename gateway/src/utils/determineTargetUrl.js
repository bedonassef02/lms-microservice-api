function determineTargetUrl(path) {
 for (const [servicePath, port] of Object.entries(serviceMap)) {
    if (path.startsWith(servicePath)) {
      return `${BASE_URL}:${port}`;
    }
 }
 return null;
}

module.exports = determineTargetUrl;
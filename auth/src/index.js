process.loadEnvFile('.env')
const app = require('./app');

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log('courses servvr running on port ' + port);
});

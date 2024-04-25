require("dotenv").config();
const app = require("./app");

const port = 3003;

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});

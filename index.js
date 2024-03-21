const app = require("./app");
const { PORT } = require("./utils/config");
const { log } = require("./utils/logger");

app.listen(PORT, () => {
  log("server is running");
});

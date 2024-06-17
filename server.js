const app = require("./app");

require("dotenv").config();
const PORT = process.env.PORT || 7893;

app.listen(PORT, () => {
  console.log(`Listening PORT ${PORT}`);
});

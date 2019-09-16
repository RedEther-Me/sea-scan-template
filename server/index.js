const express = require("express");

const migrations = require("./migrations");
migrations();

const buoyController = require("./src/controllers/buoys");

const app = express();
const port = 3001;

buoyController(app);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

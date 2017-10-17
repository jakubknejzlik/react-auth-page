const fs = require("fs");

let config = {};
for (let key in process.env) {
  if (key.indexOf("REACT_APP") === 0) {
    config[key] = process.env[key];
  }
}

fs.writeFileSync("config.js", "window.APP_CONFIG=" + JSON.stringify(config));

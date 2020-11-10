const fs = require("fs");
const semver = require("semver");

module.exports = {
  lookup(name, version) {
    const lookupFolder = __dirname + `/exports/${name}`;
    console.log(lookupFolder);
    if (!fs.existsSync(lookupFolder)) {
      return null;
    }
    const files = fs.readdirSync(lookupFolder);
    const versions = files.map((f) => f.replace(".json", ""));
    console.log(files, versions, "<=" + version);
    const match = semver.maxSatisfying(versions, "<=" + version);
    if (!match) {
      return null;
    }
    const matchFilePath = __dirname + `/exports/${name}/${match}.json`;
    return JSON.parse(fs.readFileSync(matchFilePath, "utf8"));
  },
};

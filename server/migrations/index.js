const alasql = require("alasql");

const migrations = ["001-buoy"];

module.exports = () => {
  // Drop All Tables
  Object.keys(alasql.tables).map(tableName => {
    alasql.exec(`DROP TABLE ${tableName}`);
  });

  let index = 0;
  for (index = 0; index < migrations.length; index += 1) {
    const migrationFile = require(`./${migrations[index]}.js`);

    migrationFile(alasql);
  }
};

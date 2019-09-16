const inMemoryStore = [
  { buoyId: "9643405e-99f6-455a-af06-0e2fb4c9711d", name: "buoy 1" },
  { buoyId: "cf0d338c-076d-4a88-bcf9-f9c9b8102f45", name: "buoy 2" },
  { buoyId: "dd1b4b35-2c3a-4321-b81f-b83c57f908f8", name: "buoy 3" },
  { buoyId: "58191e8b-9db7-482a-8c95-189f1a3a0094", name: "buoy 4" }
];

module.exports = database => {
  const tableName = "buoy";

  database.exec(`CREATE TABLE ${tableName} (
    buoyId varchar(255),
    name varchar(255)
  )`);

  inMemoryStore.map(buoy => {
    database.exec(
      `INSERT INTO ${tableName} (buoyId, name) VALUES ('${buoy.buoyId}', '${
        buoy.name
      }')`
    );
  });
};

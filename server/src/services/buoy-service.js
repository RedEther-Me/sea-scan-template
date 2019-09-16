const uuidv4 = require("uuid/v4");
const alasql = require("alasql");

const buoyModel = require("../models/buoy");

const { tableName, fields } = buoyModel;

const findById = async id => {
  const result = await alasql.promise(
    `SELECT * FROM ${tableName} WHERE buoyId === '${id}'`
  );
  return result[0];
};

const _insert = buoy =>
  alasql.promise(
    `INSERT INTO ${tableName} (buoyId, name) VALUES ('${buoy.buoyId}', '${
      buoy.name
    }')`
  );

const add = async ({ buoyId, ...buoy }) => {
  const created = { ...buoy, buoyId: uuidv4() };

  if (buoyId !== undefined) {
    return undefined;
  }

  await _insert(created);

  return created;
};

const deleteById = id =>
  alasql.promise(`DELETE FROM ${tableName} WHERE buoyId === '${id}'`);

const update = async (buoyId, buoy) => {
  const old = findById(buoyId);

  if (!old) {
    throw new Error("Buoy Not Found");
  }

  deleteById(buoy.buoyId);

  const updated = { ...buoy, buoyId };
  await _insert(updated);

  return updated;
};

const search = async (filters, sort) => {
  const sortByFound = fields.find(({ name }) => name === sort.sortBy);

  const sortBy = sortByFound ? sortByFound.name : "buoyId";
  const sortDir = sort.sortDir || "asc";

  const result = await alasql.promise(
    `SELECT * FROM ${tableName} ORDER BY ${sortBy} ${sortDir}`
  );
  return result;
};

module.exports = {
  findById,
  add,
  deleteById,
  update,
  search
};

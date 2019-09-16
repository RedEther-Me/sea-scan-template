const buoyService = require("./buoy-service");

const migrations = require("../../migrations");

describe("buoy service", () => {
  beforeEach(() => {
    migrations();
  });

  describe("getById", () => {
    test("valid", async () => {
      const found = await buoyService.findById(
        "cf0d338c-076d-4a88-bcf9-f9c9b8102f45"
      );

      expect(found).toStrictEqual({
        buoyId: "cf0d338c-076d-4a88-bcf9-f9c9b8102f45",
        name: "buoy 2"
      });
    });

    test("invalid id", async () => {
      const found = await buoyService.findById(
        "cf0d338c-076d-4a88-bcf9-f9c9b8102f45 not a real id"
      );

      expect(found).toBe(undefined);
    });
  });

  describe("add", () => {
    test("valid", async () => {
      const newBuoy = { name: "New Buoy" };

      const created = await buoyService.add(newBuoy);
      const { buoyId, ...createdBuoy } = created;

      expect(createdBuoy).toStrictEqual(newBuoy);
    });

    test("invalid - with an id", async () => {
      const newBuoy = { name: "New Buoy" };

      const createdBuoy = await buoyService.add({
        buoyId: "cf0d338c-076d-4a88-bcf9-f9c9b8102f45",
        ...newBuoy
      });

      expect(createdBuoy).toBe(undefined);
    });
  });

  describe("update", () => {
    test("valid", async () => {
      const updateBuoy = {
        name: "Updated Buoy",
        buoyId: "cf0d338c-076d-4a88-bcf9-f9c9b8102f45"
      };

      const updated = await buoyService.update(
        "cf0d338c-076d-4a88-bcf9-f9c9b8102f45",
        updateBuoy
      );

      expect(updated).toStrictEqual(updateBuoy);

      const found = await buoyService.findById(
        "cf0d338c-076d-4a88-bcf9-f9c9b8102f45"
      );

      expect(found).toStrictEqual(updateBuoy);
    });
  });

  describe("search", () => {
    test("no filter - order by id", async () => {
      const expectedIds = [
        "58191e8b-9db7-482a-8c95-189f1a3a0094",
        "9643405e-99f6-455a-af06-0e2fb4c9711d",
        "cf0d338c-076d-4a88-bcf9-f9c9b8102f45",
        "dd1b4b35-2c3a-4321-b81f-b83c57f908f8"
      ];

      const results = await buoyService.search(
        {},
        { sortBy: "buoyId", sortDir: "asc" }
      );

      expect(results.map(({ buoyId }) => buoyId)).toStrictEqual(expectedIds);
    });

    test("no filter - order by id - desc", async () => {
      const expectedIds = [
        "dd1b4b35-2c3a-4321-b81f-b83c57f908f8",
        "cf0d338c-076d-4a88-bcf9-f9c9b8102f45",
        "9643405e-99f6-455a-af06-0e2fb4c9711d",
        "58191e8b-9db7-482a-8c95-189f1a3a0094"
      ];

      const results = await buoyService.search(
        {},
        { sortBy: "buoyId", sortDir: "desc" }
      );

      expect(results.map(({ buoyId }) => buoyId)).toStrictEqual(expectedIds);
    });

    test("no filter - order by name", async () => {
      const expectedIds = [
        "9643405e-99f6-455a-af06-0e2fb4c9711d",
        "cf0d338c-076d-4a88-bcf9-f9c9b8102f45",
        "dd1b4b35-2c3a-4321-b81f-b83c57f908f8",
        "58191e8b-9db7-482a-8c95-189f1a3a0094"
      ];

      const results = await buoyService.search(
        {},
        { sortBy: "name", sortDir: "asc" }
      );

      expect(results.map(({ buoyId }) => buoyId)).toStrictEqual(expectedIds);
    });

    test("invalid sort dir", async () => {
      const expectedIds = [
        "58191e8b-9db7-482a-8c95-189f1a3a0094",
        "9643405e-99f6-455a-af06-0e2fb4c9711d",
        "cf0d338c-076d-4a88-bcf9-f9c9b8102f45",
        "dd1b4b35-2c3a-4321-b81f-b83c57f908f8"
      ];

      const results = await buoyService.search(
        {},
        { sortBy: "buoyId asdfasdfasd", sortDir: "asc" }
      );

      expect(results.map(({ buoyId }) => buoyId)).toStrictEqual(expectedIds);
    });
  });
});

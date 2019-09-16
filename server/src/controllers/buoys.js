const buoyService = require("../services/buoy-service");

module.exports = app => {
  // search
  app.get("/buoys", async (req, res) => {
    const { sortBy, sortDir, ...filters } = req.params;
    const sort = {
      sortBy,
      sortDir
    };

    const result = await buoyService.search(filters, sort);
    res.json(result);
  });

  // by-id
  app.get("/buoys/:id", async (req, res) => {
    const result = await buoyService.findById(req.params.id);
    res.json(result);
  });

  // create
  app.post("/buoys", async (req, res) => {
    const result = await buoyService.add(req.body);
    res.json(result);
  });

  // update
  app.put("/buoys/:id", async (req, res) => {
    const result = await buoyService.update(req.params.id, req.body);
    res.json(result);
  });
};

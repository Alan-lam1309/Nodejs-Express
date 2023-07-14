const newsRouter = require("./newsRoute");
const sitesRouter = require("./sitesRoute");

function route(app) {
  app.use("/news", newsRouter);
  app.use('/', sitesRouter)
}

module.exports = route;

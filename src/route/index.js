const newsRouter = require('./newsRoute');
const sitesRouter = require('./sitesRoute');

const a = [1, 2, 3];
function route(app) {
    app.use('/news', newsRouter);
    app.use('/', sitesRouter);
}

module.exports = route;

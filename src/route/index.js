const newsRouter = require('./newsRoute');
const sitesRouter = require('./sitesRoute');
const coursesRoute = require('./coursesRoute');

const a = [1, 2, 3];
function route(app) {
    app.use('/course', coursesRoute);
    app.use('/news', newsRouter);
    app.use('/', sitesRouter);
}

module.exports = route;

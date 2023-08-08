const newsRouter = require('./newsRoute');
const sitesRouter = require('./sitesRoute');
const coursesRouter = require('./coursesRoute');
const meRouter = require('./meRoute');

const a = [1, 2, 3];
function route(app) {
    app.use('/me', meRouter);
    app.use('/course', coursesRouter);
    app.use('/news', newsRouter);
    app.use('/', sitesRouter);
}

module.exports = route;

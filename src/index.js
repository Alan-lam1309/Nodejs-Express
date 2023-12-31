const express = require('express');
const path = require('path');
const methodOverride = require('method-override')
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const app = express();
const port = 3000;

const route = require('./route');

const db = require('./config/db');
db.connect();
// const Schema = mongoose.Schema;

app.use(express.static(path.join(__dirname, 'public')));

app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

app.use(morgan('dev'));

app.use(methodOverride('_method'))

app.engine(
    'hbs',
    handlebars.engine({
        extname: '.hbs',
        helpers: {
            sum: (a, b) => a + b,
        },
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

route(app);

app.listen(port, () =>
    console.log(`App listening at http://localhost:${port}`),
);

const Course = require('../model/Course');
const { mutipleMongoToObject } = require('../../util/mongo');

class SitesController {
    async home(req, res, next) {
        try {
            let courses = mutipleMongoToObject(await Course.find({}))
            res.render('home', { courses });
        } catch (error) {
            next(error);
        }
    }

    search(req, res) {
        res.render('search');
    }
}

module.exports = new SitesController();

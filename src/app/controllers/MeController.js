const Courses = require('../model/Course');
const {mutipleMongoToObject } = require('../../util/mongo');

class MeController {
    async storedCourse(req, res, next) {
        try {
            let dataCourse = await Courses.find({});
            res.render('me/stored_course',{courses: mutipleMongoToObject(dataCourse)});
        } catch (error) {
            next();
        }
    }
}

module.exports = new MeController();

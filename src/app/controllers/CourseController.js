const Courses = require('../model/Course');
const { mongoToObject } = require('../../util/mongo');

class CourseController {
    async courseDetail(req, res, next) {
        try {
            let result = await Courses.findOne({ slug: req.params.slug });
            res.render('courses/detail', { course: mongoToObject(result) });
        } catch (error) {
            next();
        }
    }

    create(req, res) {
        res.render('courses/create');
    }

    async store(req, res) {
        let addData = req.body;
        addData.image = `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`;
        let newCourse = new Courses(req.body);
        try {
            await newCourse.save();
            res.redirect('/')
        } catch (error) {
            
        }

    }
}

module.exports = new CourseController();

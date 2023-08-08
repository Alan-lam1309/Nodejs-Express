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
            res.redirect('/');
        } catch (error) {}
    }

    async edit(req, res) {
        let course = await Courses.findById(req.params.id);
        res.render('courses/update', { course: mongoToObject(course) });
    }

    async update(req, res) {
        await Courses.updateOne({_id: req.params.id}, req.body)
        res.redirect('/me/stored/course')
    }

    async delete(req, res, next){
        try {
            await Courses.deleteOne({_id: req.params.id}, req.body)
            res.redirect('back')
        } catch (error) {
            next();
        }
    }
}

module.exports = new CourseController();

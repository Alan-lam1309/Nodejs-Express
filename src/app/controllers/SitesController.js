const Course = require('../model/Course');

class SitesController {
    async home(req, res) {
        try {
            res.json(await Course.find({}));
        } catch (error) {
            res.status(400).json({ error: 'ERROR!!!' });
        }
    }

    search(req, res) {
        res.render('search');
    }
}

module.exports = new SitesController();

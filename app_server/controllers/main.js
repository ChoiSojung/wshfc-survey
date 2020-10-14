/* GET homepage */
const index = (req, res) => res.render('index', { title: 'Welcome' });

module.exports = {
    index
};
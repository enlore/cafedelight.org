
/*
 * GET home page.
 */

exports.index = function(req, res){
    res.render('index', { page_name: 'index' });
};

exports.menu = function (req, res) {
    res.render('menu', { page_name: 'menu' })
}

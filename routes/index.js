
/*
 * GET home page.
 */

exports.index = function(req, res){
    res.render('index', { title: 'Cafe de Light - Espresso and Frappes by APSU', page_name: 'index' });
};

exports.menu = function (req, res) {
    res.render('menu', { title: 'Cafe de Light - Menu', page_name: 'menu' })
}

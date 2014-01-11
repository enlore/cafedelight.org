
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Cafe de Light' });
};

exports.menu = function (req, res) {
    res.render('menu', { title: 'Cafe de Light - Menu' })
}

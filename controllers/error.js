exports.get404Page = (req, res, next) =>{
    res.status(404).render('404', {
        docTitle: 'No Page Found',
        path: ''
    });
};
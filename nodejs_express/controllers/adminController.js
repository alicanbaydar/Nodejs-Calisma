const Kitap = require('../models/kitaplarim')

const admin_index = (req, res) => {
    Kitap.find().sort({createdAt: -1})
        .then((result) => {
            res.render('admin', { title: 'Kitap Listesi', kitaplar: result })
        })
        .catch((err) => {
            console.log(err)
        })
}


module.exports = {
    admin_index
}
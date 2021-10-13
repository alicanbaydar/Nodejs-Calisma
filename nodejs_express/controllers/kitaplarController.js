const Kitap = require('../models/kitaplarim')

const kitaplar_index = (req, res) => {
    Kitap.find().sort({createdAt: -1})
        .then((result) => {
            res.render('kitaplar', { title: 'Kitaplar', kitaplar: result })
        })
        .catch((err) => {
            console.log(err)
        })
}

const kitaplar_content = (req,res) => {
    const id = req.params.id;
    Kitap.findById(id)
        .then((result) => {
            res.render('detay' ,{title: 'KitapDetayi', kitap: result})
        })
        .catch((err) => {
            console.log(err)
        })
}

const kitaplar_delete = (req,res) => {
    const id = req.params.id;
    Kitap.findByIdAndDelete(id)
        .then((result) => {
            res.json({ redirect: '/kitaplar' })
        })
 }

module.exports = {
    kitaplar_index,
    kitaplar_content,
    kitaplar_delete
}
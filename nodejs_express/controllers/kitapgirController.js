const Kitap = require('../models/kitaplarim')

const kitapgir_index = (req,res)=>{
    res.render('kitapgir',{title:'Kitap Gir'})
}

const kitapgir_add = (req,res) => {
    const kitap = new Kitap(req.body)
    kitap.save()
        .then((result) => {
            res.redirect('kitapgir')
        })
        .catch((err) => {
            console.log(err)
        })
}

module.exports = {
    kitapgir_index,
    kitapgir_add
}


//       OTHER WAY for post
// app.post('/kitapgir', (req,res) => {
//     const kitap = new Kitap({
//         kitapAdi: req.body.kitapadi,
//         kitapYazari: req.body.kitapyazari,
//         kitapSayfaNo: req.body.kitapsayfano
//     })
//     kitap.save()
//         .then(res.render('kitapgir', { title: 'Kitap Gir' }))
//         .catch((err) => {
//             console.log(err)
//         })
// })


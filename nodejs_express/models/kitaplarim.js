const mongoose = require('mongoose')
const Schema = mongoose.Schema

const kitaplikSchema = new Schema({
    kitapAdi: {
        type: String,
        required: true,
    },
    kitapYazari: {
        type: String,
        required: true,
    },
    kitapSayfaNo: {
        type: Number,
        required: true,
    },
    detayBilgi: {
        type: String,
        required: true,
    }
}, {timestamps: true})

const Kitap = mongoose.model('Kitap',kitaplikSchema)
module.exports = Kitap
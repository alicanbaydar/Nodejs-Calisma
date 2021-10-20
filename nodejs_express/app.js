const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')
const kitaplarRoutes = require('./routes/kitaplarRoutes')
const kitapgirRoutes = require('./routes/kitapgirRoutes')
const adminRoutes = require('./routes/adminRoutes')
const authRoutes = require('./routes/authRoutes')
const {requireAuth, checkUser} = require('./middlewares/authMiddleware')

const dbURL = 'mongodb+srv://kullanici:123456a@nodejskitaplik.o2tuf.mongodb.net/node-kitaplik?retryWrites=true&w=majority'
mongoose.connect(dbURL)
    .then((result)=> console.log('Bağlantı kuruldu'))
.catch((err) => console.log(err));

app.listen(3000)

app.set('view engine','ejs')

app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())

app.get('*', checkUser)

app.get('/', (req,res)=>{
    res.render('index',{title:'Anasayfa'})
})

app.get('/about', (req,res)=>{
    res.render('about',{title:'Hakkımızda'})
})

app.get('/about-us',(req,res)=>{
    res.redirect('about')
})

app.use('/', authRoutes)
app.use('/admin', requireAuth ,adminRoutes)
app.use('/kitaplar', kitaplarRoutes)
app.use('/kitapgir', kitapgirRoutes)

app.use((req,res)=>{
    res.status(404).render('404',{title:'Sayfa Bulunamadı'})
})
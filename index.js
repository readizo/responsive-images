const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 5000;
var bodyParser = require('body-parser');
var compression = require('compression');

express()
    .use(bodyParser())
    .use(compression())
    .set('views', path.join(__dirname, 'views'))
    .set('view engine', 'ejs')
    .use(express.static(path.join(__dirname, 'assets'), { maxAge: '1d' }))
    .get('/', (req, res) => {
        res.sendFile('index.html', { root: __dirname });
    })
    .get('/img', (req, res) => {
        res.sendFile('img.html', { root: __dirname });
    })
    .get('/video', (req, res)=>{
        res.sendfile('video.html');
    })
    .get('/people.jpeg', (req, res)=>{
      res.sendfile('people.jpeg');
    })
    .get('/placeimg_640_480_any.jpg', (req, res)=>{
      res.sendfile('placeimg_640_480_any.jpg');
    })
    .get('/placeimg_700_450_nature.jpg', (req, res)=>{
      res.sendfile('placeimg_700_450_nature.jpg');
    })
    .get('/placeimg_800_450_any.jpg', (req, res)=>{
      res.sendfile('placeimg_800_450_any.jpg');
    })
    .get('/placeimg_770_443_grayscale_people.jpg', (req, res)=>{
      res.sendfile('placeimg_770_443_grayscale_people.jpg');
    })
    .get('/img.css', (req, res)=>{
      res.sendfile('img.css');
    })
    .get('/video.css', (req, res)=>{
      res.sendfile('video.css');
    })
    .get('/arch.jpeg', (req, res)=>{
      res.sendfile('arch.jpeg');
    })
    .get('/Cinemagraph.mp4', (req, res)=>{
      res.sendfile('Cinemagraph.mp4');
    })
    .get('/Cilantro.mp4', (req, res)=>{
      res.sendfile('Cilantro.mp4');
    })
    .get('/heroimg', (req, res)=>{
      res.sendfile('heroimg.html');
    })
    .get('/home-desktop.jpg', (req, res)=>{
      res.sendfile('home-desktop.jpg');
    })
  


    
    .listen(PORT, () => console.log(`Listening on ${PORT}`));
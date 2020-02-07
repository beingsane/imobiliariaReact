const { Router } = require('express')
const ImovelController = require ('./controllers/ImovelController')
const SearchController = require('./controllers/SearchController')
const multer = require('multer')
const express = require('express');
const uploadConfig = require('./config/multer');

const routes = express.Router();
const upload = multer(uploadConfig);

routes.get('/imoveis', ImovelController.index)
routes.post('/imoveis', ImovelController.store)

routes.get('/search', SearchController.index)

routes.post('/cadastro-imoveis', upload.single('imagens'), ImovelController.store);
  

module.exports = routes
  
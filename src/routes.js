const express = require('express');
const multer = require('multer');
const multerConfig = require('./config/multer');


const routes = express.Router();

const BoxController = require('./controllers/BoxController');
const FileController = require('./controllers/FileController');

//get=buscar post=criar put=editar delete=detelar
routes.post("/boxes", BoxController.store);
routes.get("/boxes/:id", BoxController.show);

routes.post("/boxes/:id/files",multer(multerConfig).single('file'), FileController.store); //front-end ira enviar um arquivo com o nome file



module.exports = routes;
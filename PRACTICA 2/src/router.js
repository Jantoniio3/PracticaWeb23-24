import express from 'express';
//import {dataLabels,data,addPlace,getPlace,delPlace,uptPlace,datalength} from './placesService.js';

 export const router = express.Router();

//LA URL QUE SE VA A EJECUTAR SIEMPRE QUE SE CARGUE LA PÁGINA
router.get('/', (req, res) => {
    res.render('index');
});

router.get('/form', (req, res) => {
    res.render('form');
});



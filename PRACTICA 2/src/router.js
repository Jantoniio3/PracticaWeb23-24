import express from 'express';
import {coches} from 'service.js'
//import {dataLabels,data,addPlace,getPlace,delPlace,uptPlace,datalength} from './placesService.js';

 export const router = express.Router();

//LA URL QUE SE VA A EJECUTAR SIEMPRE QUE SE CARGUE LA PÁGINA
router.get('/', (req, res) => {
    let elementos = coches;

    res.render('index', elementos);
});

router.get('/form', (req, res) => {
    res.render('form');
});



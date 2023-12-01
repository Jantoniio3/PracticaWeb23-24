import express from 'express';
import {coches2} from './service.js';
//import {dataLabels,data,addPlace,getPlace,delPlace,uptPlace,datalength} from './placesService.js';

 export const router = express.Router();

//LA URL QUE SE VA A EJECUTAR SIEMPRE QUE SE CARGUE LA PÁGINA
router.get('/', (req, res) => {
    const elementos =  Array.from(coches2.values());
    console.log(elementos)

    res.render('index', {message: "Hola ahi van los elementos", elementos});
});

router.get('/form', (req, res) => {
    res.render('form');
});



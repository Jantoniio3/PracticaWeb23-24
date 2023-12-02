import express from 'express';
import {coches2} from './service.js';
//import {dataLabels,data,addPlace,getPlace,delPlace,uptPlace,datalength} from './placesService.js';

 export const router = express.Router();

//LA URL QUE SE VA A EJECUTAR SIEMPRE QUE SE CARGUE LA PÁGINA


router.get('/detalles/:matricula', (req, res) => {
    const matricula = req.params.matricula;
    let coche = null;
    
    if (matricula == 'index.html') {
        return res.redirect('/');
    }

    for(let x = 0; x < coches2.size; x++){
        if (coches2.get(x).Matricula == matricula){
            console.log("coche encontrado");
            coche = coches2.get(x)
        }
    }

    let reseñas = Array.from(coche.Opinion.values())
    console.log(reseñas)

    res.render('detalles',{coche, reviews: reseñas });
});

router.get('/', (req, res) => {
    const elementos =  Array.from(coches2.values());
    

    res.render('index', {message: "Hola ahi van los elementos", elementos});
});

router.get('/form', (req, res) => {
    res.render('form');
});

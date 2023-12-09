import express from 'express';
import {coches2} from './service.js';
//import {dataLabels,data,addPlace,getPlace,delPlace,uptPlace,datalength} from './placesService.js';

 export const router = express.Router();

//LA URL QUE SE VA A EJECUTAR SIEMPRE QUE SE CARGUE LA PÁGINA
let counter = 12;
let rescounter = 1;

router.get('/detalles/:matricula', (req, res) => {
    const matricula = req.params.matricula;
    let ident = null;
    let coche = null;
    
    if (matricula == 'index.html') {
        return res.redirect('/');
    }

    for(let x = 0; x < coches2.size; x++){
        if (coches2.get(x).Matricula == matricula){
            
            coche = coches2.get(x);
            ident = x; 
            console.log(coche);
        }
    }
    if (coche.Opinion){
        let reseñas = Array.from(coche.Opinion.values())
        /*console.log(reseñas)*/

        res.render('detalles',{coche, reviews: reseñas });
    }
    else{
        let reseñas = null
        /*console.log(reseñas)*/

        res.render('detalles',{coche, reviews: reseñas });

    }
    
    router.post('/addCom', (req, res) => {
        const {Comprador, Concesionario, Opinion, Valoracion} = req.body;

        const newRes = {Comprador, Concesionario, Opinion, Valoracion};
        console.log(newRes);
        if (coche.Opinion){
            coche.Opinion.set(rescounter,newRes);
            coches2.set(ident,coche)
        }
        else{
            coche.Opinion = new Map();
            coche.Opinion.set(rescounter, newRes);
        }
        rescounter +=1 ;
        res.redirect("/");
    });


});

router.get('/', (req, res) => {
    const elementos =  Array.from(coches2.values());
    

    res.render('index', {message: "Hola ahi van los elementos", elementos});
});

router.get('/form', (req, res) => {
    res.render('form');
});

router.post('/addCar', (req, res) => {
    const {Nombre, Year,Imagen, Color, Motor, Caballos, Matricula} = req.body;
    
    const newCar = {Nombre, Year,Imagen, Color, Motor, Caballos, Matricula};
    console.log(newCar);
    coches2.set(counter,newCar);
    counter += 1;
    res.redirect("/");
});
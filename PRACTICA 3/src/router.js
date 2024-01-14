import express from 'express';
import {coches2} from './service.js';


 export const router = express.Router();

//LA URL QUE SE VA A EJECUTAR SIEMPRE QUE SE CARGUE LA PÁGINA
let counter = 12;
let rescounter = 1;
export let loadCount = 5;


router.get('/detalles/:matricula', (req, res) => {
    let matricula = req.params.matricula;
    
    let ident = null;
    let coche = null;
    
    if (matricula == 'index.html') {
        return res.redirect('/');
    }

    for(let [x, valor] of coches2){
        
        if (valor.Matricula == matricula){
            
            coche = coches2.get(x);
            ident = x; 
            console.log("coincide con", ident);
            /*console.log(coche);*/
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
    


});

router.get('/', (req, res) => {
    /*const elementos =  Array.from(coches2.values()).slice(0,5);*/
    

    res.render('index', {message: `${loadCount}`});
});

router.get('/form', (req, res) => {
    let forms = undefined
    res.render('form',{forms: forms});
});


router.get('/editCar/:matricula', (req, res) => {
    const matricula = req.params.matricula;
    let numcoche = 0;
    for (let [x, coche] of coches2){

        if(coche.Matricula == matricula){
            numcoche = x;
        }

    }
    const cocheplaceholder = coches2.get(numcoche)

    let forms = {Matricula: matricula, Nombre:cocheplaceholder.Nombre, Matt:cocheplaceholder.Matricula, Motor:cocheplaceholder.Motor, Year:cocheplaceholder.Year, Image:cocheplaceholder.Imagen}
    
    res.render('form', {forms: forms});

});


router.post('/addCar', (req, res) => {
    const {Nombre, Year,Imagen, Color, Motor, Caballos, Matricula} = req.body;
    
    const newCar = {Nombre, Year,Imagen, Color, Motor, Caballos, Matricula};
    /*console.log(newCar);*/
    coches2.set(counter,newCar);
    counter += 1;
    res.redirect(`/detalles/${Matricula}`);
});

router.post('/deleteCar/:matricula', (req, res) => {
    const matricula = req.params.matricula;
    let borrado = 0;
    

    for (let [x, coche] of coches2){

        if(coche.Matricula == matricula){
            borrado = x;
        }

    }
    coches2.delete(borrado);
    
    res.redirect("/");
});

router.post('/addCom/:matricula', (req, res) => {
    const {Comprador, Concesionario, Opinion, Valoracion} = req.body;
    const matricula = req.params.matricula;
    let id = 0;

    const newRes = {Comprador, Concesionario, Opinion, Valoracion};
    
    for (let [x, coche] of coches2){

        if(coche.Matricula == matricula){
            id = x;
        }

    }
    let coche = coches2.get(id)

    if (coche.Opinion){
        coche.Opinion.set(rescounter,newRes);
        coches2.set(id,coche)
        
    }
    else{
        coche.Opinion = new Map();
        coche.Opinion.set(rescounter, newRes);
        coches2.set(id, coche);
    }

    rescounter +=1 ;
    res.redirect("/");
});

router.post('/updateEdit/:matricula', (req, res) => {
    const matricula = req.params.matricula;
    console.log(matricula);
    let id = 0;
    let Opinion = null;
    for (let [x, coche] of coches2){

        if(coche.Matricula == matricula){
            id = x;
            Opinion = coche.Opinion;
        }

    }
    console.log(id)
    const {Nombre, Year,Imagen, Color, Motor, Caballos, Matricula} = req.body;
    
    const newCar = {Nombre, Year,Imagen, Color, Motor, Caballos, Opinion ,Matricula};
    
    coches2.set(id,newCar);
    
    res.redirect("/");
});
router.get('/cargarMas:Numero', (req, res) => {
    const inicio = req.params.Numero;
    const final = parseInt(inicio)+5;
    let elementos =  Array.from(coches2.values()).slice(inicio,final);
    
    loadCount+=5;

    

    res.json({elementos});
});
router.get('/cargarInicio:Numero', (req, res) => {
    const inicio = 0
    const final = parseInt(req.params.Numero);
    const elementos =  Array.from(coches2.values()).slice(inicio,final);
    

    res.json({elementos});
});
router.get('/cargarHastaAhora:Numero', (req, res) => {
    const inicio = 0;
    const final = parseInt(req.params.Numero);
    const elementos =  Array.from(coches2.values()).slice(inicio,final);
    
    
    res.json({elementos});
    
});

router.get('/cargarOpinion:Matricula', (req, res) => {
    const matricula = req.params.Matricula;
    let id = 0;
    for (let [x, coche] of coches2){

        if(coche.Matricula == matricula){
            id = x;
        }

    }
    let coche = coches2.get(id) 
    
    const elementos =  Array.from(coche.Opinion.values());
    
    
    res.json({elementos});
    
});

router.get('/borrarOpinion', (req, res) => {
    const comprador = req.query.comprador;
    const concesionario = req.query.concesionario;
    const matricula = req.query.matricula;
    let identificador =  0;
    let identificadorOpinion = 0;

    for (let [x, coche] of coches2){

        if(coche.Matricula == matricula){
            identificador = x;
        }

    }
    let coche = coches2.get(identificador)
    
    for (let [x, opinion] of coche.Opinion){

        if(opinion.Comprador == comprador && opinion.Concesionario == concesionario){
            identificadorOpinion = x;
        }

    }
    coches2.get(identificador).Opinion.delete(identificadorOpinion)
    


    res.send(comprador+'-'+concesionario);
    
});
router.get('/crearOpinion', (req, res) => {
    const Comprador = req.query.comprador;
    const Concesionario = req.query.concesionario;
    const Opinion = req.query.opinion;
    const Valoracion = req.query.valoracion;
    const matricula = req.params.matricula;
    let id = 0;
    console.log(Comprador)
    const newRes = {Comprador, Concesionario, Opinion, Valoracion};
    
    for (let [x, coche] of coches2){

        if(coche.Matricula == matricula){
            id = x;
        }

    }
    let coche = coches2.get(id)

    if (coche.Opinion){
        coche.Opinion.set(rescounter,newRes);
        coches2.set(id,coche)
        
    }
    else{
        coche.Opinion = new Map();
        coche.Opinion.set(rescounter, newRes);
        coches2.set(id, coche);
    }
    let elementos = coche.Opinion.get(rescounter)
    rescounter +=1 ;
    res.json({elementos});
});
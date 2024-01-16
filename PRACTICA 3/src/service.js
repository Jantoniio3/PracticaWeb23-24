export const dataLabels = ["Nombre", "Year","Color","Motor","Caballos","Opinion","Imagen", "Matricula"];

//MAPAS DE LOS OBJETOS
let resena0 = new Map();
let resena1 = new Map();
let resena2 = new Map();
let resena3 = new Map();
let resena4 = new Map();
let resena5 = new Map();
let resena6 = new Map();
let resena7 = new Map();
let resena8 = new Map();
let resena9 = new Map();
let resena10 = new Map();
let resena11 = new Map();
resena0.set(0, { Comprador: "María González", Concesionario:"URJC Motors", Opinion:" Excelente experiencia en el concesionario. El personal fue amable y conocedor. Encontré el coche perfecto a un precio justo. ¡Altamente recomendado!", Valoracion:"5"});
resena1.set(0, { Comprador: "Carlos Sánchez", Concesionario:"URJC Motors", Opinion:"La atención al cliente fue impecable. Me ayudaron a encontrar el modelo ideal para mis necesidades y presupuesto. Proceso de compra fácil y rápido.", Valoracion:"5" });
resena2.set(0, { Comprador: "Laura Martínez", Concesionario:"URJC Motors", Opinion:"El servicio al cliente fue excepcional. Explicaron cada detalle con paciencia y respondieron a todas mis preguntas. ¡Muy satisfecha con mi compra!", Valoracion:"5" });
resena3.set(0, { Comprador: "Juan Rodríguez", Concesionario:"URJC Motors", Opinion:"Experiencia sin complicaciones. El equipo de ventas fue honesto y transparente. Me ayudaron a conseguir un buen trato en mi vehículo anterior.", Valoracion:"4" });
resena4.set(0, { Comprador: "Gabriela López", Concesionario:"URJC Motors", Opinion:"Encontré el coche de mis sueños gracias a la ayuda de los profesionales en el concesionario. El proceso fue eficiente y sin sorpresas desagradables.", Valoracion:"5" });
resena5.set(0, { Comprador: "Andrés Ramírez", Concesionario:"URJC Motors", Opinion:"Buen servicio al cliente. El personal estaba bien informado sobre los diferentes modelos y opciones de financiamiento. La entrega del coche fue rápida.", Valoracion:"4" });
resena6.set(0, { Comprador: "Ana Herrera", Concesionario:"URJC Motors", Opinion:" Mi experiencia en el concesionario fue excelente. Me guiaron a través de todo el proceso y me ayudaron a tomar la mejor decisión. ¡Muy agradecida!", Valoracion:"5" });
resena7.set(0, { Comprador: "Ricardo Gómez", Concesionario:"URJC Motors", Opinion:"Proceso de compra fácil y rápido. El personal fue amable y eficiente. Encontré el coche perfecto a un precio competitivo.", Valoracion:"4" });
resena8.set(0, { Comprador: "Paola Fernández", Concesionario:"URJC Motors", Opinion:"Estoy encantada con mi nuevo coche. El concesionario ofreció una amplia selección y el personal fue muy atento. Definitivamente lo recomendaría.", Valoracion:"5" });
resena9.set(0, { Comprador: "Alejandro Torres", Concesionario:"URJC Motors", Opinion:"Buena experiencia en general. El personal hizo un esfuerzo adicional para garantizar mi satisfacción. Solo hubo un pequeño contratiempo con la entrega", Valoracion:"4"});
resena10.set(0, { Comprador: "Valeria Ruiz", Concesionario:"URJC Motors", Opinion:"El concesionario superó mis expectativas. Fueron flexibles y se adaptaron a mis necesidades. El proceso de financiamiento fue fácil y rápido.", Valoracion:"5" });
resena11.set(0, { Comprador: "Daniel Vargas", Concesionario:"URJC Motors", Opinion:"Buena atención al cliente. El personal fue paciente y me ayudó a encontrar un vehículo que se ajustara a mis necesidades y presupuesto.", Valoracion:"4" });

let coches = new Map();



coches.set(0, { Nombre: 'Seat Ibiza', Year: '2022', Color:'Rojo', Motor: '1.5 TSI', Caballos:'150', Opinion: resena0, Imagen: 'https://www.infomotor.es/asset/thumbnail,1280,720/media/infomotor/images/2021/06/09/infomotor-seat-ibiza-1.jpg', Matricula: '1234 ABC'});
coches.set(1, { Nombre: 'John Deree', Year: '2015', Color:'Verde', Motor: '8000 CC', Caballos:'180', Opinion: resena1, Imagen: 'https://www.deere.es/assets/images/region-2/products/tractors/large/7r-series/7-series-reactive-steering-r2g070425-large.jpg',Matricula:'5678 DEF' });
coches.set(2, { Nombre: 'Citroen C15', Year: '1989', Color:'Gris', Motor: '1.8 TSI', Caballos:'65', Opinion: resena2, Imagen: 'https://cdn.autobild.es/sites/navi.axelspringer.es/public/media/image/2023/01/citroen-c15-dangel-2919768.jpg?tf=3840x', Matricula:'9012 GHI' });
coches.set(3, { Nombre: 'Audi RS7', Year: '2021', Color:'Negro', Motor: '3.0 GTI', Caballos:'248', Opinion: resena3, Imagen: 'https://cdn.motor1.com/images/mgl/7MK27/s3/abt-audi-rs7-r.jpg', Matricula:'3456 JKL' });
coches.set(4, { Nombre: 'Seat 600', Year: '1975', Color:'Rojo', Motor: '1.0 Diesel', Caballos:'60', Opinion: resena4, Imagen: 'https://i0.wp.com/blog.terranea.es/wp-content/uploads/2023/07/SEAT_600L_-_przod_MSP15-e1688469320970.jpg?resize=640%2C321&ssl=1', Matricula: '7890 MNO'});
coches.set(5, { Nombre: 'Renault F6', Year: '1978', Color:'Blanco', Motor: '1.0 Diesel', Caballos:'48', Opinion: resena5, Imagen: 'https://mercadoracing.com/imagenes-anuncios/38/587182/renault-4-f6-4l.jpg', Matricula:'2345 PQR' });
coches.set(6, { Nombre: 'Lamborghini Aventador', Year: '2018', Color:'Rosa', Motor: '3.5 TDI', Caballos:'650', Opinion: resena6, Imagen: 'https://cdn.autobild.es/sites/navi.axelspringer.es/public/media/image/2017/08/lamborghini-aventador-sv-liberty-walk.jpeg', Matricula: '6789 STU'});
coches.set(7, { Nombre: 'Mario Kart', Year: '2023', Color:'Azul', Motor: '4.0 Biturbo', Caballos:'80000', Opinion: resena7, Imagen: 'https://cdn.autobild.es/sites/navi.axelspringer.es/public/media/image/2020/12/mario-kart-rc-2183549.jpg', Matricula: '0123 VWX'});
coches.set(8, { Nombre: 'Nissan Patrol', Year: '1995', Color:'Gris', Motor: '2.8 Turbo', Caballos:'115', Opinion: resena8, Imagen: 'https://www.fuerapiche.com/fotos/patrol%2040.JPG',Matricula: '4567 YZA'});
coches.set(9, { Nombre: 'Citroen C5', Year: '2020', Color:'Gris', Motor: '2.0 TDI', Caballos:'90', Opinion: resena9, Imagen: 'https://cdn.motor1.com/images/mgl/Q1On0/s3/2021-citroen-c5-x.jpg', Matricula: '8901 BCD'});
coches.set(10, { Nombre: 'Cupra', Year: '2021', Color:'Gris', Motor: '3.0 GTI', Caballos:'300', Opinion: resena10, Imagen: 'https://hips.hearstapps.com/hmg-prod/images/cupra-urbanrebel-concept-001-hq-1630507652.jpg', Matricula:'2345 EFG' });
coches.set(11, { Nombre: 'Toyota CHR', Year: '2022', Color:'Blanco', Motor: '1.9 TDI', Caballos:'105', Opinion: resena11, Imagen: 'https://cdn.autobild.es/sites/navi.axelspringer.es/public/media/image/2023/06/toyota-c-hr-gr-sport-3049412.jpg?tf=3840x', Matricula: '6789 HIJ'});

export let coches2 = coches;











export const dataLabels = ["Nombre", "Year","Color","Motor","Caballos","Opinion"];

//MAPAS DE LOS OBJETOS
resena0.set(0, { Comprador: "María González", Concesionario:"URJC Motors", opinion:" Excelente experiencia en el concesionario. El personal fue amable y conocedor. Encontré el coche perfecto a un precio justo. ¡Altamente recomendado!", valoracion:"5"});
resena1.set(1, { Comprador: "Carlos Sánchez", Concesionario:"URJC Motors", opinion:"La atención al cliente fue impecable. Me ayudaron a encontrar el modelo ideal para mis necesidades y presupuesto. Proceso de compra fácil y rápido.", valoracion:"5" });
resena2.set(2, { Comprador: "Laura Martínez", Concesionario:"URJC Motors", opinion:"El servicio al cliente fue excepcional. Explicaron cada detalle con paciencia y respondieron a todas mis preguntas. ¡Muy satisfecha con mi compra!", valoracion:"5" });
resena3.set(3, { Comprador: "Juan Rodríguez", Concesionario:"URJC Motors", opinion:"Experiencia sin complicaciones. El equipo de ventas fue honesto y transparente. Me ayudaron a conseguir un buen trato en mi vehículo anterior.", valoracion:"4" });
resena4.set(4, { Comprador: "Gabriela López", Concesionario:"URJC Motors", opinion:"Encontré el coche de mis sueños gracias a la ayuda de los profesionales en el concesionario. El proceso fue eficiente y sin sorpresas desagradables.", valoracion:"5" });
resena5.set(5, { Comprador: "Andrés Ramírez", Conceionario:"URJC Motors", opinion:"Buen servicio al cliente. El personal estaba bien informado sobre los diferentes modelos y opciones de financiamiento. La entrega del coche fue rápida.", valoracion:"4" });
resena6.set(6, { Comprador: "Ana Herrera", Conceionario:"URJC Motors", opinion:" Mi experiencia en el concesionario fue excelente. Me guiaron a través de todo el proceso y me ayudaron a tomar la mejor decisión. ¡Muy agradecida!", valoracion:"5" });
resena7.set(7, { Comprador: "Ricardo Gómez", Conceionario:"URJC Motors", opinion:"Proceso de compra fácil y rápido. El personal fue amable y eficiente. Encontré el coche perfecto a un precio competitivo.", valoracion:"4" });
resena8.set(8, { Comprador: "Paola Fernández", Conceionario:"URJC Motors", opinion:"Estoy encantada con mi nuevo coche. El concesionario ofreció una amplia selección y el personal fue muy atento. Definitivamente lo recomendaría.", valoracion:"5" });
resena9.set(9, { Comprador: "Alejandro Torres", Conceionario:"URJC Motors", opinion:"Buena experiencia en general. El personal hizo un esfuerzo adicional para garantizar mi satisfacción. Solo hubo un pequeño contratiempo con la entrega", valoracion:"4"});
resena10.set(10, { Comprador: "Valeria Ruiz", Conceionario:"URJC Motors", opinion:"El concesionario superó mis expectativas. Fueron flexibles y se adaptaron a mis necesidades. El proceso de financiamiento fue fácil y rápido.", valoracion:"5" });
resena11.set(11, { Comprador: "Daniel Vargas", Conceionario:"URJC Motors", opinion:"Buena atención al cliente. El personal fue paciente y me ayudó a encontrar un vehículo que se ajustara a mis necesidades y presupuesto.", valoracion:"4" });

export let coches = new Map();
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


coches.set(0, { Nombre: 'Seat Ibiza', Year: '2022', Color:'Rojo', Motor: '1.5 TSI', caballos:'150', opinion: resena0});
coches.set(1, { Nombre: 'John Deree', Year: '2015', Color:'Verde', Motor: '8000 CC', caballos:'180', opinion: resena1 });
coches.set(2, { Nombre: 'Citroen C15', Year: '1989', Color:'Gris', Motor: '1.8 TSI', caballos:'65', opinion: resena2 });
coches.set(3, { Nombre: 'Audi RS7', Year: '2021', Color:'Negro', Motor: '3.0 GTI', caballos:'248', opinion: resena3 });
coches.set(4, { Nombre: 'Seat 600', Year: '1975', Color:'Rojo', Motor: '1.0 Diesel', caballos:'60', opinion: resena4 });
coches.set(5, { Nombre: 'Renault F6', Year: '1978', Color:'Blanco', Motor: '1.0 Diesel', caballos:'48', opinion: resena5 });
coches.set(6, { Nombre: 'Lamborghini Aventador', Year: '2018', Color:'Rosa', Motor: '3.5 TDI', caballos:'650', opinion: resena6 });
coches.set(7, { Nombre: 'Mario Kart', Year: '2023', Color:'Azul', Motor: '4.0 Biturbo', caballos:'80000', opinion: resena7 });
coches.set(8, { Nombre: 'Nissan Patrol', Year: '1995', Color:'Gris', Motor: '2.8 Turbo', caballos:'115', opinion: resena8 });
coches.set(9, { Nombre: 'Citroen C5', Year: '2020', Color:'Gris', Motor: '2.0 TDI', caballos:'90', opinion: resena9 });
coches.set(10, { Nombre: 'Cupra', Year: '2021', Color:'Gris', Motor: '3.0 GTI', caballos:'300', opinion: resena10 });
coches.set(11, { Nombre: 'Toyota CHR', Year: '2022', Color:'Blanco', Motor: '1.9 TDI', caballos:'105', opinion: resena11 });


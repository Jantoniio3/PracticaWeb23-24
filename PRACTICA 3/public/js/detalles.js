

matricula = document.getElementById("matricula-coche").innerText

cargarOpinion(matricula);




async function eliminarOpinion(comprador,concesionario,matricula){
    const response = await fetch(`/borrarOpinion?comprador=${comprador}&concesionario=${concesionario}&matricula=${matricula}`);
    const part = await response.text();
    const contenedor = document.getElementById(part);

    contenedor.remove();





}


async function cargarOpinion(matricula){
    const response = await fetch(`/cargarOpinion${matricula}`);
    const part = await response.json();
    const elementosContainer = document.getElementById("contenedor-comentarios");
    part.elementos.forEach(elemento => {
        const nuevoElementoHTML = `
        <div class="card m-5 mx-auto" id="${elemento.Comprador}-${elemento.Concesionario}" style="width: 40rem; border-radius: 25px; background-color: maroon; margin:auto">
            <div class="card-body">
            <h4><strong>${elemento.Comprador}</strong> | ${elemento.Valoracion} &#8902;</h4>
            <p>${elemento.Opinion}</p>
            <p style="font-size: small;">comprado en Concesionario ${elemento.Concesionario}</p>
            <button class="btn btn-primary" onclick="eliminarOpinion('${elemento.Comprador}','${elemento.Concesionario}','${matricula}')">Borrar</button>
            </div>
        </div>
        `;
    
        // Agrega el nuevo elemento al contenedor
        elementosContainer.insertAdjacentHTML('beforeend', nuevoElementoHTML);
    });







}










let loadCounter = 5

function updateLoad(){
    loadCounter+=5;
}

async function cargarAhora(){
    
    const response = await fetch(`/cargarHastaAhora${loadCounter}`);
    const part = await response.json();
    const elementosContainer = document.getElementById("contenedor-principal");
    part.elementos.forEach(elemento => {
        const nuevoElementoHTML = `
            <div class="col">
                <a href="/detalles/${elemento.Matricula}">
                    <div id="item-${elemento.Nombre}" style="background-color: maroon; width: 14rem; border-radius: 25px; margin: auto;" class="card">
                        <img style="border-radius: 25px;" class="card-img-top" src="${elemento.Imagen}">
                        <div class="card-body">
                            <p class="text-light fs-2 fw-bold ms-2">${elemento.Nombre}</p>
                        </div>
                    </div>
                </a>
            </div>
        `;
    
        // Agrega el nuevo elemento al contenedor
        elementosContainer.insertAdjacentHTML('beforeend', nuevoElementoHTML);
    });



}


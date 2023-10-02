/* ---------------------------------------------------------- */
/*                     Variables Globales                     */
/* ---------------------------------------------------------- */

/* ---------------------------------------------------------- */
/*                     funciones Globales                     */
/* ---------------------------------------------------------- */

function representarCardsProductos() {
    
    var cards = ''

    if(productos.length) {
        for(var i=0; i<productos.length; i++) {
            cards += 
                '<section>' +
                    '<img src="' + productos[i].foto + '" alt="">' +
                    '<h4>'+ productos[i].nombre  +'</h4>' +
                    /* '<p><b>Stock:</b> '+ productos[i].stock +'</p>' + */
                    '<p><b>Marca:</b> '+ productos[i].marca +'</p>' +
                    '<p><b>Categoría:</b> '+ productos[i].categoria +'</p>' +
                    '<p><b>Detalles:</b> '+ productos[i].detalles +'</p>' +
                    '<br>' +
                    '<p><b class="precio">Precio: $'+ productos[i].precio +'</b></p>' +
                    '<p><b style="color:brown;">Envío gratis:</b> '+ (productos[i].envio? 'Si':'No') +'</p>' +
                    '<button>Agregar 🛒</button>'+
                '</section>'
        }
    }
    else cards += '<h2>No se encontraron productos para mostrar</h2>'

    document.querySelector('.cards-container').innerHTML = cards
}
/* 
function representarCardsProductos2() {
    for(var i=0; i<productos.length; i++) {
        document.querySelector('.cards-container').innerHTML += 
            '<section>' +
                '<h4>'+ productos[i].nombre  +'</h4>' +
                '<img src="' + productos[i].foto + '" alt="">' +
                '<p><b>Precio:</b> $'+ productos[i].precio +'</p>' +
                '<p><b>Stock:</b> '+ productos[i].stock +'</p>' +
                '<p><b>Marca:</b> '+ productos[i].marca +'</p>' +
                '<p><b>Categoría:</b> '+ productos[i].categoria +'</p>' +
                '<p><b>Detalles:</b> '+ productos[i].detalles +'</p>' +
                '<br>' +
                '<p><b>Envío:</b> '+ (productos[i].envio? 'Si':'No') +'</p>' +
            '</section>'
    }
}
 */

function start() {
    console.warn( document.querySelector('title').innerText )

    representarCardsProductos()
}


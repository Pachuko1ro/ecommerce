/* ---------------------------------------------------------- */
/*                     variables Globales                     */
/* ---------------------------------------------------------- */

/* ---------------------------------------------------------- */
/*                     funciones Globales                     */
/* ---------------------------------------------------------- */
function agregar(e) {
    e.preventDefault()

    //console.log('agregar()')

    var refNombre = document.getElementById('nombre')
    var refPrecio = document.getElementById('precio')
    var refStock = document.getElementById('stock')
    var refMarca = document.getElementById('marca')
    var refCategoria = document.getElementById('categoria')
    var refDetalles = document.getElementById('detalles')
    var refDescripcion = document.getElementById('descripcion')
    var refFoto = document.getElementById('foto')
    var refEdadMin = document.getElementById('min')
    var refEdadMax = document.getElementById('max')
    var refEnvio = document.getElementById('envio')

    var nombre = refNombre.value
    var precio = refPrecio.value
    var stock = refStock.value
    var marca = refMarca.value
    var categoria = refCategoria.value
    var detalles = refDetalles.value
    var descripcion =refDescripcion.value
    var foto = refFoto.value
    var edadMin = refEdadMin.value
    var edadMax = refEdadMax.value
    var envio = refEnvio.checked
    




    //console.log(nombre, precio, stock, envio)
    productos.push({
        nombre : nombre,
        precio : precio,
        stock : stock,
        marca : marca,
        categoria : categoria,
        detalles : detalles,
        descripcion : descripcion,
        foto : foto,
        edadMin : edadMin,
        edadMax :edadMax,
        envio : envio
    })

    //console.log(productos)

    representarTablaProductos()

    refNombre.value = ''
    refPrecio.value = ''
    refStock.value = ''
    refMarca.value = ''
    refCategoria.value = ''
    refDetalles.value = ''
    refDescripcion.value = ''
    refFoto.value = ''
    refEdadMin.value = ''
    refEdadMax.value = ''
    refEnvio.checked = false
}

function representarTablaProductos() {
    
    var filasTabla = '<tr>' +
                        '<th>foto</th>' +
                        '<th>nombre</th>' +
                        '<th>precio</th>' +
                        '<th>stock</th>' +
                        '<th>marca</th>' +
                        '<th>categoría</th>' +
                        '<th>detalles</th>' +
                        '<th>descripcion</th>' +
                        '<th>edad min</th>' +
                        '<th>edad max</th>' +
                        '<th>envío sin cargo</th>' +
                    '</tr>'

    if(productos.length) {
        for(var i=0; i<productos.length; i++) {
            filasTabla += 
                '<tr>' +
                    '<td><img width="50" src="' + productos[i].foto + '" alt="foto de '+productos[i].nombre+'"></td>' +
                    '<td>'+ productos[i].nombre  +'</td>' +
                    '<td> $'+ productos[i].precio +'</td>' +
                    '<td> '+ productos[i].stock +'</td>' +
                    '<td> '+ productos[i].marca +'</td>' +
                    '<td> '+ productos[i].categoria +'</td>' +
                    '<td> '+ productos[i].detalles +'</td>' +
                    '<td> '+ productos[i].descripcion +'</td>' +
                    '<td> '+ productos[i].edadMin +'</td>' +
                    '<td> '+ productos[i].edadMax +'</td>' +
                    '<td>'+ (productos[i].envio? 'Si':'No') +'</td>' +
                '</tr>'
        }
    }
    else filasTabla = '<h2>No se encontraron productos para mostrar</h2>'

    document.querySelector('table').innerHTML = filasTabla
}

function start() {
    console.warn( document.querySelector('title').innerText )

    representarTablaProductos()
}

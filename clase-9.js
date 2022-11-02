// nuevo array con listado de planes
const planesMensuales = [{
        tipo: "Básico",
        costo: 300,
        descripcion: "Podes escuchar música sin límites todo el mes."
    },
    {
        tipo: "Dúo",
        costo: 450,
        descripcion: "Música ilimitada para vos y alguien más."
    },
    {
        tipo: "Familiar",
        costo: 600,
        descripcion: "El mejor plan, hasta un total de 5 miembros."
    },
];


// Escuchamos el evento de 'carga' de la ventana 👇
window.addEventListener('load', function () {
    
    const footer = this.document.querySelector('footer');

    //👇 Creamos variables para usarlas dentro del bucle que genera el setInterval
    let total = planesMensuales.length;
    let contador = 0;

    // 👇 creamos un intervalo y lo almacenamos en una variable
    const intervalo = setInterval(function(){
        // usamos el operador 'resto de' para calcular la posicion
        const posicion = contador % total;

        console.log(contador);
        console.log("posicion: ",posicion );

        // insertamos en el HTML una plantilla literal
        footer.innerHTML = `<p>Plan: <strong>${planesMensuales[posicion].tipo}</strong> $ ${planesMensuales[posicion].costo}</p><p>${planesMensuales[posicion].descripcion}</p>`

        contador++;
    }, 4000);

    // añadimos la escucha del doble click en el footer para frenar el intervalo
    footer.addEventListener('dblclick', function(){
        clearInterval(intervalo);
        console.log("---> Frenamos el intervalo");
    })

})


/* -------------------------------------------------------------------------- */
/*                               MESA DE TRABAJO                              */
/* -------------------------------------------------------------------------- */
// Vamos a utilizar el setTimeout para preguntarle al usuario despues de unos segundos.
// 1- Una vez cargada la página y pasados 12 segundos debemos preguntarle al usuario si desea
// conocer más música (podemos usar un confirm).
// 2- Si el usuario confirma debemos abrir una nueva pestaña en -> https://open.spotify.com/
// 3- Si el usuario cancela debemos agregar un parrafo dentro del div '#perfil'(sin eliminar nada dentro)
// 4- El parrafo agregado debe ser de color verde y decir: "Usuario oficial de Spotifront"
// 5- Por ultimo, si ese parrafo es clickeado, debe mostrar una alerta al usuario que diga: "Gracias por confiar en nosotros."


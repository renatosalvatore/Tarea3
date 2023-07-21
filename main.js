

async function cargarDatos(){
    //canvas donde se va a mostrar la grafica
    const grafica = document.getElementById("myChart").getContext("2d");

    //peticion a la api
    const request = await fetch("http://ucamp.alumnos.dev4humans.com.mx/Main/endpoint_libros");
  const response = await request.json() //recibe objeto json y o convertimos a JS
    console.log(response);

    let etiquetas = response.data.map((item) => {
        return item.nombre.toUpperCase(); //datos para crear etoquetas
    });

    let info_data = response.data.map((data) =>{ //se obtiene a información
        return data.ventas_millones;
    });
//dibuja la gráfica
    const myChart = new Chart(grafica, {
        type: "bar", //tipo de grafica
        data :{
            labels: etiquetas,
            datasets:[
                {
                    label: "Ventas",
                    data: info_data,
                    fill: true, //rellena background de la barra de grafica
                    backgroundColor: "#ccd9ff",
                    borderColor: "#3366ff"
                }
            ]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                },
            },
        },
    })
  despliegueTabla (response)

  /*  tblPeliculas.innerHTML = "";
    for(const pelicula of response.data){
        let tr = `<tr>
                <td>${pelicula.id}</td>
                <td>${pelicula.nombre}</td>
                <td>${pelicula.ventas_millones}</td>
        </tr>`
        tblPeliculas.innerHTML += tr;
    }
*/
} 

cargarDatos()
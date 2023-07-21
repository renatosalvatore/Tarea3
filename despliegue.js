// Se toma esta parte del codigo de main para demostrar export/import
function despliegueTabla (response){
    
    tblPeliculas.innerHTML = "";
    for(const pelicula of response.data){
        let tr = `<tr>
                <td>${pelicula.id}</td>
                <td>${pelicula.nombre}</td>
                <td>${pelicula.ventas_millones}</td>
        </tr>`
        tblPeliculas.innerHTML += tr;
    

}

}

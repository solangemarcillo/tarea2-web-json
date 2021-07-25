//funcion para buscar por medio de la id
function buscador() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("busqueda");
    filter = input.value.toUpperCase();
    table = document.getElementById("buscar");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}
//hacemos un query selector y dentro de ella una funcion para obtener los datos al momento de hacer click
document.querySelector('#boton').addEventListener('click', obtenerdatos());


// añadimos una funcion y en ella hacemos el llamado del query selector en este caso de obtener datos
function obtenerdatos() {
    const xhttp = new XMLHttpRequest();
    xhttp.open('GET', 'datos.json', true);
    xhttp.send();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            // console.log(this.responseText);
            let datos = JSON.parse(this.responseText);
            console.log(datos);
            let res = document.querySelector('#res');
            res.innerHTML = '';

            //ciclo for para acceder a los datos dentro del array 
            for (let item of datos) {
                
                //console.log(item);

                //Dentro de nuestra pagina pintaremos nuestro datos llamandandolo desde a base de datos en este caso datos.json con su respectiva id 
                res.innerHTML += `<tr>
                <td>${item.id}</td>
                <td>${item.apellidos}</td>
                <td>${item.nombres}</td>
                <td>${item.semestre}</td>
                <td>${item.paralelo}</td>
                <td>${item.direccion}</td>
                <td>${item.telefono}</td>
                <td>${item.correo}</td>
                </tr>`;
            }
        }
    };
}
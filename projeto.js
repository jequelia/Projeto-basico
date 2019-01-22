

//adiciona as skills
function add(selector, id){

    var valor = document.querySelector(selector).value;
    var lista = document.querySelector(id);
    var medium = document.createElement("li");
    medium.innerHTML = valor;
    lista.appendChild(medium);


}

//altera as skills
function change(selector, id){

    var valoralterado = document.querySelector(selector).value;
    document.querySelector(id).innerHTML = valoralterado;
    
}




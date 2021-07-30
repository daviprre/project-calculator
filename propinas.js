var valorBoton = 0;
var porcentaje = 0;
var cantidadPersonas = 0;
var valorServicio= 0;
var valorIndividual = document.getElementById("valorIndividual");
var valorTotal = document.getElementById("valorTotal");
var mensaje = document.getElementById("mensajeValidacion");
var cantidad = document.getElementById("CantidadPersonas");
var PrecioTotal = document.getElementById("valorServicio");
valorIndividual.innerText = "$" + "0.00";
valorTotal.innerText = "$" + "0.00";
mensaje.innerText = "";



function ObtenerPorcentaje5(){
    valorBoton = document.getElementById("button5");
    porcentaje = valorBoton.value;
    cantidadPersonas = cantidad.value;
    valorServicio = parseInt(PrecioTotal.value);

        if(cantidadPersonas===0 || cantidadPersonas == ""){
            mensaje.innerText = "Can't be zero";
            mensaje.style="color: red; font-weight: 700";
            cantidad.style="border: 2px solid red"
        }
        else{
            var propinaIndividual = ((valorServicio * porcentaje) / 100) / cantidadPersonas;
            var totalIndividual = (((valorServicio * porcentaje) / 100) + valorServicio) / cantidadPersonas;
            valorIndividual.innerText = "$" + propinaIndividual;
            valorTotal.innerText = "$" + totalIndividual;
        }
}

function ObtenerPorcentaje10(){
    valorBoton = document.getElementById("button10");
    porcentaje = valorBoton.value;
    cantidadPersonas = cantidad.value;
    var PrecioTotal = document.getElementById("valorServicio");
    valorServicio = parseInt(PrecioTotal.value);

    if(cantidadPersonas===0 || cantidadPersonas == ""){
        mensaje.innerText = "Can't be zero";
        mensaje.style="color: red; font-weight: 700";
        cantidad.style="border: 2px solid red"
    }
    else{
        var propinaIndividual = ((valorServicio * porcentaje) / 100) / cantidadPersonas;
        var totalIndividual = (((valorServicio * porcentaje) / 100) + valorServicio) / cantidadPersonas;
        valorIndividual.innerText = "$" + propinaIndividual;
        valorTotal.innerText = "$" + totalIndividual;
    }
}

function ObtenerPorcentaje15(){
    valorBoton = document.getElementById("button15");
    porcentaje = valorBoton.value;
    cantidadPersonas = cantidad.value;
    var PrecioTotal = document.getElementById("valorServicio");
    valorServicio = parseInt(PrecioTotal.value);
  
    if(cantidadPersonas===0 || cantidadPersonas == ""){
        mensaje.innerText = "Can't be zero";
        mensaje.style="color: red; font-weight: 700";
        cantidad.style="border: 2px solid red"
    }
    else{
        var propinaIndividual = ((valorServicio * porcentaje) / 100) / cantidadPersonas;
        var totalIndividual = (((valorServicio * porcentaje) / 100) + valorServicio) / cantidadPersonas;
        valorIndividual.innerText = "$" + propinaIndividual;
        valorTotal.innerText = "$" + totalIndividual;
    }
}

function ObtenerPorcentaje25(){
    valorBoton = document.getElementById("button25");
    porcentaje = valorBoton.value;
    cantidadPersonas = cantidad.value;
    var PrecioTotal = document.getElementById("valorServicio");
    valorServicio = parseInt(PrecioTotal.value);
   
    if(cantidadPersonas===0 || cantidadPersonas == ""){
        mensaje.innerText = "Can't be zero";
        mensaje.style="color: red; font-weight: 700";
        cantidad.style="border: 2px solid red"
    }
    else{
        var propinaIndividual = ((valorServicio * porcentaje) / 100) / cantidadPersonas;
        var totalIndividual = (((valorServicio * porcentaje) / 100) + valorServicio) / cantidadPersonas;
        valorIndividual.innerText = "$" + propinaIndividual;
        valorTotal.innerText = "$" + totalIndividual;
    }
}

function ObtenerPorcentaje50(){
    valorBoton = document.getElementById("button50");
    porcentaje = valorBoton.value;
    cantidadPersonas = cantidad.value;
    var PrecioTotal = document.getElementById("valorServicio");
    valorServicio = parseInt(PrecioTotal.value);
    
    if(cantidadPersonas===0 || cantidadPersonas == ""){
        mensaje.innerText = "Can't be zero";
        mensaje.style="color: red; font-weight: 700";
        cantidad.style="border: 2px solid red"
    }
    else{
        var propinaIndividual = ((valorServicio * porcentaje) / 100) / cantidadPersonas;
        var totalIndividual = (((valorServicio * porcentaje) / 100) + valorServicio) / cantidadPersonas;
        valorIndividual.innerText = "$" + propinaIndividual;
        valorTotal.innerText = "$" + totalIndividual;
    }
}

function BorrarCampos(){
    cantidad.value=0;
    cantidad.style="border:0"
    mensaje.innerText = "";
    PrecioTotal.value=0.00;
    valorIndividual.innerText = "$" + "0.00";
    valorTotal.innerText = "$" + "0.00";

}


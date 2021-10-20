/************************************************/
/****Declaracion e inicializacion de variables***/
/************************************************/
var Precio = document.getElementById("valorServicio");
var Cantidad = document.getElementById("CantidadPersonas");
var custom = document.getElementById("custom");
var mensajeValor = document.getElementById("mensajeValorValidacion");
var mensajeCantidad = document.getElementById("mensajeValidacion");
var valorIndividual = document.getElementById("valorIndividual");
var valorTotal = document.getElementById("valorTotal");
var TotalPropina;
var TotalGeneral;
var PrecioTotal;
var TotalPropinaIndividual = 0;
var CantidadTotal;
mensajeValor.innerText = "";
mensajeCantidad.innerText = "";
valorIndividual.innerText = "$" + "0.00";
valorTotal.innerText = "$" + "0.00";

/***********************************************/
/***** Funcion para llamado desde el boton ****/
/***********************************************/
function ObtenerPorcentaje(comp){
    id = comp;
    valorPorcentaje = parseInt(id.value);
    PrecioTotal = parseInt(Precio.value);
    CantidadTotal = parseInt(Cantidad.value);

    if (!ValidacionValor() && !ValidacionCantidad()){
        mensajeCantidad.innerText = "";
        Cantidad.style="border: 0";
        TotalPropina = ((PrecioTotal * valorPorcentaje) / 100);
        TotalPropinaIndividual = TotalPropina / CantidadTotal;
        TotalPropinaIndividual = parseInt(TotalPropinaIndividual);
        TotalGeneral = (TotalPropina + PrecioTotal ) / CantidadTotal;
        TotalGeneral = parseInt(TotalGeneral);
        valorIndividual.innerText= "$" + TotalPropinaIndividual;
        valorTotal.innerText = "$" + TotalGeneral;
        /* alert("Puedo hacer la operacion! " +TotalPropina) ;  */
    }else if(!ValidacionValor()){
        mensajeCantidad.innerText = ValidacionCantidad();
        mensajeCantidad.style="color: red; font-weight: 700";
        Cantidad.style="border: 2px solid red";
        mensajeValor.innerText = "";
        Precio.style="border: 0";
    }
    else{
        mensajeValor.innerText = ValidacionValor();
        mensajeValor.style="color: red; font-weight: 700";
        Precio.style="border: 2px solid red";
    }
}
/***********************************************/
/***** Funcion para llamado desde el input *****/
/***********************************************/
function Obtener(el, e) {
    if (e.key === 'Enter' || e.keyCode === 13 || e.keyCode ===11) {
      custom.textContent = el.value;
      alert("Hola Mundo! " +custom.textContent) ;   
      ObtenerPorcentaje(el); 
    }
  }



  /****************************/
  /******helps functions******/
  /***************************/
function ValidacionValor(){
    var validacionValor;
    
    if (Precio.value > 0){
        return false;
    }else if(Precio.value == 0){
        validacionValor = "Can't be zero"
        return validacionValor;

    }else{
        validacionValor = "Can't be empty"
    }     
}

function ValidacionCantidad(){
    var validacionCantidad;
    
    if (Cantidad.value > 0){
        return false;
    }else if(Cantidad.value == 0){
        validacionCantidad = "Can't be zero"
        return validacionCantidad;

    }else{
        validacionCantidad = "Can't be empty"
    }     
}

function BorrarCampos(){
    
    valorIndividual.innerText = "$" + "0.00";
    valorTotal.innerText = "$" + "0.00";
    mensajeCantidad.innerText = "";
    mensajeValor.innerText = "";
    Precio.style="border: 0";
    Cantidad.style="border: 0";
    Precio.value = "$" + "0.00";
    Cantidad.value = 0;
    custom.value = "Custom";


/* 
    cantidad.value=0;
    cantidad.style="border:0"
    mensaje.innerText = "";
    PrecioTotal.value=0.00;
    valorIndividual.innerText = "$" + "0.00";
    valorTotal.innerText = "$" + "0.00"; */

} 



/* var valorBoton = 0;
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

} */


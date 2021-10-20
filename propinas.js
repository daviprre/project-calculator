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
      custom.textContent = el.value; //Este comando no tiene efecto en el codigo, igual lo dejare
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

}
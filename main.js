function calculadora() {
    const mensaje = ' Basandonos en ese resultado su estado dentro del imc es:';
    const mensaje2 = 'Algo salió mal'
    const peso = document.getElementById("Peso").value;
    const Estatura = document.getElementById("Estatura").value;
    const imc = peso / (Estatura **2);
    const resultado = document.getElementById("resultados");/*me permite mostrar en pantalla el estado del usuario*/
    const imagen = document.getElementById("imagen");
    console.log(imc)
    if (imc < 18.5){
        resultado.innerHTML = (`${imc.toFixed(1) } ${mensaje} peso inferior al normal`);
        imagen.src = "imagenes/bajo.png";
        imagen.style.display = "block"; /* para que luego de presionar nuevo y hacer otro calculo aparezca la imagen*/
    } else if (imc >= 18.5 && imc <= 24.9 ){
        resultado.innerHTML = (`${imc.toFixed(1) }${mensaje } normal`);
        imagen.src = "imagenes/normal.png";
        imagen.style.display = "inline"; /*inline para que la imegen no me quede hacia el lado izquierdo*/
    } else if (imc >= 25 && imc <= 29.9){
        resultado.innerHTML = (`${imc.toFixed(1) }${mensaje } Peso superior al normal`);
        imagen.src = "imagenes/sobrepeso2.png";
        imagen.style.display = "block";
    } else if (imc >30){
        resultado.innerHTML = (`${imc.toFixed(1) }${mensaje } obesidad`);
        imagen.src = "imagenes/obeso.png";
        imagen.style.display = "block";
    } else{
        alert(mensaje2)}
    
}
/*function nuevo(){
    location.reload()
    document.getElementById("nuevo")
}*/

function nuevo(){
    document.getElementById("Edad").value = "";
    document.getElementById("Nombre").value = "";
    document.getElementById("Peso").value = "";
    document.getElementById("Estatura").value = "";
    document.getElementById("resultados"). innerHTML = ""; /*no utilicé value porque este elemento no es un input*/
    document.getElementById("imagen").style.display = "none";/*no utilicé inner porque es una imagen y las imagenes no tienen contenido interno*/

}

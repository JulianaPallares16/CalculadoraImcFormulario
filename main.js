function calculadora() {
    const mensaje = 'Basandonos en ese resultado su estado dentro del imc es:';
    const mensaje2 = 'Algo salió mal'
    const peso = document.getElementById("Peso").value;
    const Estatura = document.getElementById("Estatura").value;
    const imc = peso / (Estatura **2);
    console.log(imc)
    if (imc < 18.5){
        document.write(`${imc.toFixed(2) } ${mensaje} peso inferior al normal`);
    } else if (imc >= 18.5 && imc <= 24.9 ){
        document.write(`${imc.toFixed(2) }${mensaje } normal`);
    } else if (imc >= 25 && imc <= 29.9){
        document.write(`${imc.toFixed(2) }${mensaje } Peso superior al normal`);
    } else if (imc >30){
        document.write(`${imc.toFixed(2) }${mensaje } obesidad`);
    } else{
        alert(mensaje2)}
}

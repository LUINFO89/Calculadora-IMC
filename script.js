
calc = document.getElementById("calc");
kg = document.getElementById("kg");
m = document.getElementById("m");
imc = document.getElementById("imc");
lectura = document.getElementById("lectura");

calc.onclick = function () {
    if (kg.value != "" && m.value != "") {


        imcx = (kg.value / (m.value * m.value));

        imc.innerHTML = imcx
        console.log(imcx);

        if (imcx < 18.5) { lectura.innerHTML = "Por debajo del peso"; }
        else if (imcx >= 18.5 && imcx <= 24.9) { lectura.innerHTML = "Peso Saludable"; }
        else if (imcx > 24.9 && imcx <= 29.9) { lectura.innerHTML = "Con sobrepeso"; }
        else if (imcx >= 30 && imcx <= 39.9) { lectura.innerHTML = "Obesidad"; }
        else if (imcx >= 40) { lectura.innerHTML = "Obesidad extrema o de alto riesgo"; }

    } else {
        alert("Debes ingresar peso y altura.")
        lectura.innerHTML = "Debes ingresar peso y altura.";
    }

};


// funcion para llamar el boton y guardar la informacion

let boton = document.getElementById('calc');
boton.addEventListener('click', capturardatos)

// mostrar el obtener localStorage al momento de cargar la pagina cargar
// o el dom content loader

document.addEventListener('DOMContentLoaded', function () {

    obtenerlocalstorage();
})


// capturar los datos del formulario
function capturardatos() {


    let kg = document.getElementById("kg").value;
    let m = document.getElementById("m").value;
    let = imcx.value
    // crear un objeto para almacenar los valores al tiempo

    let objeto = {

        kg: kg,
        m: m,
        imcx: imcx


    }


    localStorage.setItem('IMC', JSON.stringify(objeto));
    //console aplication localStorage
}

// OBTENER LOCAL STORAGE 

function obtenerlocalstorage() {
    let objeto = localStorage.getItem('IMC');
    console.log(objeto);
    alert(objeto);
}
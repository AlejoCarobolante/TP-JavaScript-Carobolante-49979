//Punto 1.2

{
    const a = 8;
    const b = 45;
    const c = a + b;
    console.log("El resultado de la suma es = " + c)}

//Punto 1.3
{
    let nombre = prompt("Ingrese su nombre")
    console.log("Hola " + nombre + ", cómo estás?")
}

//Punto 2.1
{
    const a = 46;
    const b = 9;
    var c
    if(a>b){
        console.log("La variable a es mayor")
    }else{
        console.log("La variable b es mayor")
    }
}

//Punto 2.2
{
    const a = prompt("Ingrese un número")
    if(a%2 == 0){
        console.log("El número ingresado es par")
    }else{
        console.log("El número ingresado es impar")
    }
}

//Punto 3.1
{
    var a = 10;
    console.log("Ejercicio 3.1")
    while(a>= 0){ 
        console.log(a)
        a--; 
    }
}

//Punto 3.2
{
    do {
        var a = prompt("Ingrese un valor igual o mayor a 100")
    } while (a<100);
    console.log("El valor ingresado mayor a 100 es : " + a)
}

//Punto 4.1
{
    function esPar(a){
        if(a%2 == 0){
            console.log("El número " + a + " es par")
        }else{
            console.log("El número " + a + " es impar")}
    }
    esPar(123)
}

//Punto 4.2
{
    function convertirCelsiusaFahrenheit(c){
        var f = c*1.8+32
        console.log(c + " grados Celsius son " + f + " grados Fahrenheit")
    }
    convertirCelsiusaFahrenheit(35)
}

//Punto 5.1
{
    let persona = {
        nombre : "Alejo",
        edad : 20,
        ciudad : "Mónaco",  
    }
    persona.ciudad = "Las Vegas"
    console.log("Los datos de la persona son: Nombre = " + persona.nombre + ", Edad= " + persona.edad + ", y Ciudad= " + persona.ciudad)
}

//Punto 5.2
{
    let libro = {
        titulo : "El Principito",
        autor : "Antoine de Saint-Exupéry",
        año : 1943
    }
    if(2024 - libro.año >= 10){
        console.log("El libro " + libro.titulo + " es antiguo")
    }else{
        console.log("El libro " + libro.titulo + " es moderno")
    }
}

//Punto 6.1
{
    let numeros = [1,2,3,4,5,6,7,8,9,10]
    console.log("Numeros originales: " + numeros)
    numeros.forEach((element)=>{
    let nuevoarray = element*2
    console.log("Los numeros multiplicados son: " + nuevoarray)
})
}

//Punto 6.2
{
    let pares = []
    for(let i=0; i<=20; i++){
        if(i%2 == 0 && i != 0){
            pares.push(i)
        }
    }
    console.log("Los números pares del arreglo son: " + pares)
}

//Punto 7.1
{
    const button = document.getElementById('buttonToBlueColor');
    const paraphElements = document.getElementsByClassName('textP');

    button.addEventListener("click", () => {
        for(let i = 0; i < paraphElements.length; i++){
            paraphElements[i].classList.add('blueText');
        }
    });
}

//Punto 7.2
{
    document.getElementById('botonAlerta').addEventListener('click', () => {
        let input = document.getElementById('input7.2').value;
        alert('Has ingresado: ' + input);
    });
}

//Punto 8.1
{
    let listElements = document.getElementsByClassName('li');

    for(let i = 0; i < listElements.length; i++){
        listElements[i].addEventListener('click', () => {
            console.log(listElements[i].textContent);
        });
    }
}

//Punto 8.2
{
    let input = document.getElementById('inputEx8');
    let nButton = document.getElementById('nBtn');
    let yButton = document.getElementById('yBtn')

    nButton.addEventListener('click', () => {
        input.disabled = true;
    });

    yButton.addEventListener('click', () => {
        input.disabled = false;
    });
}

//Punto 9
{
    let emailText = document.getElementById('emailText');

    document.getElementById('saveEmailBtn').addEventListener('click', () =>{
        let emailInput = document.getElementById('emailInput').value;
        emailText.textContent ="Correo Guardado: " + emailInput;
        localStorage.setItem('savedEmail', emailInput);
    });

    document.getElementById('deleteEmailBtn').addEventListener('click', () => {
        localStorage.removeItem('savedEmail');
        emailText.textContent = "Correo Eliminado"
    });

    if(localStorage.length === 0){
        emailText.textContent = "Correo Guardado: ejemplo@gmail.com"
    }else {
        emailText.textContent = 'Correo Guardado: ' + localStorage.getItem('savedEmail'); 
    }
};

let nombre = prompt("¿Cómo te llamas?");
alert("Hola, ¿qué tal " + nombre + "? Bienvenido a mi aboutme. Vamos a hacer un pequeño quiz.");

const preguntas = [
    "¿Mi color favorito es el azul?",
    "¿Tengo un carro?",
    "¿Mi comida favorita es el arroz con mariscos?",
    "¿Mi videojuego favorito es Age of Empires?",
    "¿Me gusta hacer trekking?",
];

const respuestas = [
    "si",
    "si",
    "no",
    "si",
    "si",
];

let respuestasIncorrectas = 0;
let respuestasCorrectas = 0;

for (let i = 0; i < preguntas.length; i++) {
    let respuestaUsuario = prompt(preguntas[i]).toLowerCase();

    // Registrar en la consola la pregunta y la respuesta del usuario
    console.log(`Pregunta: ${preguntas[i]}`);
    console.log(`Respuesta del usuario: ${respuestaUsuario}`);
    console.log(`Respuesta correcta: ${respuestas[i]}`);

    if (respuestaUsuario === respuestas[i]) {
        alert("¡Acertado, eres muy bueno!");
        respuestasCorrectas++;
    } else {
        alert("Equivocado, para gustos y colores no hay autores.");
        respuestasIncorrectas++;
    }
}

alert(nombre + ", acertaste " + respuestasCorrectas + " preguntas y te equivocaste en " + respuestasIncorrectas + ".");

// Registrar en la consola el resultado final
console.log(`${nombre}, acertaste ${respuestasCorrectas} preguntas y te equivocaste en ${respuestasIncorrectas}.`);

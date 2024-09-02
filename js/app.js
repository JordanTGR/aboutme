let nombre = prompt("¿Cómo te llamas?");
alert("Hola, ¿qué tal " + nombre + "? Bienvenido a mi aboutme. Vamos a hacer un pequeño quiz.");

const preguntas = [
    "¿Mi color favorito es el azul?",
    "¿Tengo un carro?",
    "¿Mi comida favorita es el arroz con mariscos?",
    "¿Mi videojuego favorito es Age of Empires?",
    "¿Me gusta hacer trekking?",
    "¿Cuántos años tengo?",
    "¿Cuál es una de mis películas favoritas en 2024?"
];

const respuestas = [
    "si",
    "si",
    "no",
    "no",
    "si",
    24,
    ["Intensamente 2", "Deadpool y Wolverine", "Kung Fu Panda 4", "Bad boys", "Dune: Parte 2", "Godzilla y Kong: El nuevo imperio"]
];

let respuestasIncorrectas = 0;
let respuestasCorrectas = 0;


for (let i = 0; i < preguntas.length; i++) {
    if (i < 5) { 
        let respuestaUsuario = prompt(preguntas[i]).toLowerCase();
        
        if (respuestaUsuario === respuestas[i]) {
            alert("¡Acertado, eres muy bueno!");
            respuestasCorrectas++;
        } else {
            alert("Equivocado, siempre se cometen errores.");
            respuestasIncorrectas++;
        }
    } else if (i === 5) { 
        let adivinarTiempo = false;
        
        for (let intentos = 0; intentos < 4; intentos++) {
            let adivinanza = parseInt(prompt(preguntas[i]));
            
            if (adivinanza == respuestas[i]) {
                alert("¡Correcto! Adivinaste mi edad, eres muy hábil.");
                respuestasCorrectas++;
                adivinarTiempo = true; 
                break; 
            } else if (adivinanza > respuestas[i]) {
                alert("Muy alto, prueba un número más bajo.");
            } else {
                alert("Muy bajo, prueba un número más alto.");
            }
        }
        
        if (!adivinarTiempo) {
            alert("Buen intento, pero mi edad es " + respuestas[i] + ".");
            respuestasIncorrectas++;
        }

        alert(nombre + ", pasamos a una pregunta clave. Si no lo haces bien, ¡formateo tu computadora! :)");
    } else { 
        let correct = false;
        const maxAttempts = 6;
        let intentosRestantes = maxAttempts;
        
        for (let intentos = 0; intentos < maxAttempts; intentos++) {
            let respuestaUsuario = prompt(`Intento ${intentos + 1} de ${maxAttempts}: ${preguntas[i]}`).toLowerCase();
            intentosRestantes--;
            
            for (let j = 0; j < respuestas[i].length; j++) {
                if (respuestaUsuario === respuestas[i][j].toLowerCase()) {
                    alert("¡Muy buen gusto! " + respuestaUsuario + " es una de mis películas favoritas en 2024.");
                    respuestasCorrectas++;
                    correct = true;
                    break;
                }
            }
            
            if (correct) break;
            
            if (intentosRestantes > 0) {
                alert("Incorrecto. Te quedan " + intentosRestantes + " intentos.");
            }
        }

        if (!correct) {
            alert("No te preocupes, no se formatea nada xD");
            let respuestasCorrectasTexto = "";
            for (let j = 0; j < respuestas[i].length; j++) {
                respuestasCorrectasTexto += respuestas[i][j];
                if (j < respuestas[i].length - 1) {
                    respuestasCorrectasTexto += ", ";
                }
            }
            alert("Mis películas favoritas en 2024 son: " + respuestasCorrectasTexto + ".");
            respuestasIncorrectas++;
        }
    }
}

alert(nombre + ", acertaste " + respuestasCorrectas + " preguntas y te equivocaste en " + respuestasIncorrectas + ".");
console.log(nombre + ", acertaste " + respuestasCorrectas + " preguntas y te equivocaste en " + respuestasIncorrectas + ".");

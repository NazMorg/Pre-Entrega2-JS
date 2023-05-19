/*** JUEGO MATEMATICO: RESUELVE LA SUMA ***/
/*** LA MAYOR PARTE DE LOS MENSAJES SE MOSTRARAN VIA CONSOLA DE INSPECCIÓN ***/

// Funcion para generar numeros en el rango indicado:
function numeroAleatorio(rangoMax) {
    return Math.floor(Math.random() * rangoMax + 1);
}

// Objeto juego:
const juego = {
    usuario: prompt("Ingrese su nombre: "),
    numeros: [],
    aciertos: [],
    fallos: [],
    frasesAcierto: ["Acertaste!","Bien calculado!","Correcto!","Buen Trabajo!","Así se hace!","Correctirigillo!","Bien hecho!"],

    // Funcion para llenar array con dos valores aleatorios:
    numerosAleatorios: function () {
        let sonNumeros = false;
        while (sonNumeros === false) {
            const numeroUno = numeroAleatorio(parseInt(prompt("Ingrese el valor numérico máximo para generar el primer número:")));
            const numeroDos = numeroAleatorio(parseInt(prompt("Ingrese el valor numérico máximo para generar el segundo número:")));
            if (!Number(numeroUno) && !Number(numeroDos)) {
                console.log("ERROR! Ingrese números.");
            }
            else {
                this.numeros = [numeroUno, numeroDos];
                sonNumeros = true;
            }
        }
    },

    // Funcion terminarJuego:
    terminarJuego: function () {
        console.log(`Hasta luego ${this.usuario}!`);
    },

    // Funcion empezarJuego:
    empezarJuego: function () {
        let nuevoJuego = true;

        while (nuevoJuego === true) {
            let intento = 3;
            this.numerosAleatorios();
            const suma = this.numeros[0] + this.numeros[1];

            console.log(`Bienvenido al juego de las sumas ${this.usuario}!`);
            console.log(`La suma es: ${this.numeros[0]} + ${this.numeros[1]}, tiene ${intento} intentos!`);

            while (intento > 0) {
                const adivinado = parseInt(prompt(`Ingrese el resultado de la suma, tiene ${intento} intentos:`));

                // Validacion de que lo ingresado es un número:
                if (!Number(adivinado)) {
                    console.log("ERROR! Ingrese un número.");
                    continue;
                }
                else {
                    // Correcto o Incorrecto:
                    if (adivinado === suma) {
                        console.log(`${this.frasesAcierto[Math.floor(Math.random() * 6)]} El resultado de la suma es ${suma}`);
                        break;
                    }
                    else if (intento > 0) {
                        intento--;
                        console.log(`Incorrecto! Tiene ${intento} intentos`);
                    }
                    else {
                        console.log("GAME OVER!");
                        break;
                    }
                }
            }
            // Reinicio de juego:
            nuevoJuego = confirm("¿Desea volver a jugar?");
            if (nuevoJuego === false) {
                this.terminarJuego();
                break;
            }
        }
    }
}

// Inicio del Juego:
juego.empezarJuego();
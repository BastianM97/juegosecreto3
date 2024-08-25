let numerosecreto = Math.floor(Math.random()*10)+1;
let numeroUsuario;
let intentos =1;
//let palabra = `Vez`;
let maxintento = 3;

console.log(numerosecreto);

while (numeroUsuario != numerosecreto){


    numeroUsuario = prompt('Pon un numero del 1 al 10:');

    console.log(numeroUsuario);
    


    if(numeroUsuario == numerosecreto) {alert(`Acertaste, el numero es: ${numeroUsuario}. Lo hiciste en ${intentos} ${intentos == 1 ? "vez" : "veces" }`);
    } else {
        if (numeroUsuario < numerosecreto) {
            alert (`Fallaste: El número secreto es mayor`);
        } else {( alert(`Fallaste: El número secreto es menor`))}
    }

    //intentos += 1;
    intentos ++;
    //palabra = `Veces`;
    if (intentos > maxintento) {alert (`llegaste al numero total de ${maxintento} intentos`); 
        break;
    }

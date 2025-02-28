console.log("Mike's Pari e Dispari")

/*
- chiedo all'utente di scegliere se pari o dispari
- salvo la scelta in una variabile 
- chiedo all'utente di inserire un numero da 1 a 5
- calcolo un numero randomico da 1 a 5 con una **funzione**
- sommo i due valori e li salvo in una variabile
- creo una **funzione** isNumberOdd dal possibile valore *true* o *false*
- **se** ho scelto dispari e la **funzione** isNumberOdd restituisce *true*
    - stampo "hai vinto"
- **altrimenti se** ho scelto dispari e la **funzione** isNumberOdd restituisce *false*
    - stampo "hai perso"
- **altrimenti se** ho scelto pari e la **funzione** isNumberOdd restituisce *true*
    - stampo "hai perso"
- **altrimenti**
    - stampo "hai vinto"
*/

const oddEven = prompt("inserisci pari o dispari");
console.log(`Hai scelto ${oddEven}`);


let userNumberChoice;
let isNumberValid;
let retries = 5;

while (isNumberValid !== true && retries >0){
    userNumberChoice = parseInt(prompt('Inserisci un numero da 1 a 5'));
    isNumberValid = userNumberChoice >0 && userNumberChoice <6 && !isNaN(userNumberChoice);
    retries --;
}
console.log(`Hai scelto: ${userNumberChoice}`);
let computerNumberChoice = Math.ceil(Math.random()*5);
console.log(`Il computer ha scelto: ${computerNumberChoice}`);

let sum = userNumberChoice + computerNumberChoice;
console.log(`La somma dei due numeri è: ${sum}`);

function isNumberOdd (myNumber){
    if(myNumber%2!==0){
        return true;
    } else {
        return false;
    }
}

if (isNumberOdd(sum)===true && oddEven === "dispari"){
    console.log("Hai vinto");
} else if (isNumberOdd(sum)===false && oddEven === "dispari"){
    console.log("Hai perso");
} else if (isNumberOdd(sum)===true && oddEven === "pari"){
    console.log("Hai perso");
} else if (isNumberOdd(sum)===false && oddEven === "pari"){
    console.log("Hai vinto");
}
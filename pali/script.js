console.log("Mike's Palindrome");

/*
- chiedo all'utente di inserire una parola
- la salvo in una variabile
- creo la funzione
    - inverto la parola attraverso l'utilizzo di un ciclo for
    - **se** la nuova parola è uguale a quella inserita dall'utente
        - stampo "la parola è palindroma"
    - **altrimenti**
        - stampo "la parola non è palindroma"
*/

const userWord = prompt('Inserisci una parola');

function wordReverser (aWord) {
    
    let reversedWord ='';

    for(let i=aWord.length - 1; i>=0; i--){
        reversedWord += aWord[i];
    }
    return reversedWord;
}

console.log(wordReverser(userWord));

const reversedWord = wordReverser(userWord);

if (userWord === reversedWord){
    console.log(`La parola ${userWord} al contrario si legge ${reversedWord} perciò è palindroma`);
} else {
    console.log(`La parola ${userWord} al contrario si legge ${reversedWord} perciò non è palindroma`);
}





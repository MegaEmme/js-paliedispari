console.log("Mike's Palindrome");

/*
- chiedo all'utente di inserire una parola
- la salvo in una variabile
- creo la funzione
    - divido la parola inserita in singoli caratteri (.split) di un array
    - inverto i valori dell'array (.reverse)
    - riunisco i valori dell'array in una stringa (.join)
    - **se** la nuova parola è uguale a quella inserita dall'utente
        - stampo "la parola è palindroma"
    - **altrimenti**
        - stampo "la parola non è palindroma"
*/

const userWord = prompt('Inserisci una parola');

function wordReverser (aWord) {
    const splitter = aWord.split('');
    const reverser = splitter.reverse();
    const joiner = reverser.join('');
    return joiner;
}

const reversedWord = wordReverser(userWord);

if (userWord === reversedWord){
    console.log(`La parola ${userWord} al contrario si legge ${reversedWord} perciò è palindroma`);
} else {
    console.log(`La parola ${userWord} al contrario si legge ${reversedWord} perciò non è palindroma`);
}





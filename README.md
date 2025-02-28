# **Esercizio: Pali e Dispari**

## Palidroma

Chiedere all’utente di inserire una parola.
Creare una funzione per capire se la parola inserita è palindroma

### *Pseudo-codice*

- chiedo all'utente di inserire una parola
- la salvo in una variabile
- creo una **funzione**
    - divido la parola inserita in singoli caratteri (.split) di un array
    - inverto i valori dell'array (.reverse)
    - riunisco i valori dell'array in una stringa (.join)
    - **se** la nuova parola è uguale a quella inserita dall'utente
        - stampo "la parola è palindroma"
    - **altrimenti**
        - stampo "la parola non è palindroma"

---

## Pari e Dispari

L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri, stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)e dichiariamo chi ha vinto.

### *Pseudo-codice*
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

 




---

### Consigli del giorno

- Scriviamo sempre in italiano i passaggi che vogliamo fare
- Scriviamo sempre solo un pezzetto di codice alla volta, se funziona allora andiamo avanti.
- Domande da  farsi quando si crea una funzione:
    - Come dovrebbe chiamarsi?
    - Ho bisogno di parametri?
    - Devo restituire un valore?
    - Se sì, di che tipo?
---
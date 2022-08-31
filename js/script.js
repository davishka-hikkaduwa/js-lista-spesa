console.log('JS OK!');

/* 
Consegna:
Data una lista della spesa, stampare sulla pagina (anche brutalmente, 
basta che si vedano) gli elementi della lista individualmente con un ciclo while.

Consigli:
-    Ricordiamoci di inizializzare la variabile
    di contatore prima dell'inizio del ciclo while
-   Ricordiamoci di incrementare il contatore, o 
    comunque di inserire una condizione di uscita, all'interno ciclo while
 */

const spesa = ['Formaggio', 'Uova', 'Pasta', 'Carote', 'Banane'];

const htmlContainer = document.querySelector('.container');

htmlContainer.innerHTML = '';

let counter = 0;

while (counter < spesa.length) {

    console.log(spesa[counter]);

    htmlContainer.innerHTML += `<div> ${spesa[counter]} </div>`

    counter++;
}

//recupero pulsante

const altraListaSpesa = ['Latte', 'Aranciata']

let index = 0;

const button = document.querySelector('#add-button');

//ascolto il click

button.addEventListener('click', function () {
    console.log('clicked');

    //check sul index

    if (index < altraListaSpesa.length) {

        htmlContainer.innerHTML += `<div> Altro cibo: ${altraListaSpesa[index]} </div>`;

        index++;

    }

    //quando clicco aggiungo alla lista un nuovo elemento


}
)



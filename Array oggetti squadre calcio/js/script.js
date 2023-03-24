/***********************************/
// FUNZIONI
/***********************************/

// FUNZIONE CHE GENERA NUMERI CASUALI
/**
 * Description
 * @param {number} min
 * @param {number} max
 * @returns {any}
 */
const numeriCasuali = (min,max) => Math.floor(Math.random() * (max - min + 1) + min); ;


/***********************************/
// PROGRAMMA PRINCIPALE
/***********************************/

// ARRAY OGGETTI SQUADRE
const squadre = [
    {
        nome: "Juventus",
        punti: 0,
        falli: 0
    },
    {
        nome: "Milan",
        punti: 0,
        falli: 0
    },
    {
        nome: "Napoli",
        punti: 0,
        falli: 0
    },
    {
        nome: "Inter",
        punti: 0,
        falli: 0
    },
    {
        nome: "Cagliari",
        punti: 0,
        falli: 0
    },
    {
        nome: "Roma",
        punti: 0,
        falli: 0
    },
    {
        nome: "Genoa",
        punti: 0,
        falli: 0
    },
];

// RIEMPI I VALORI CON LA CHIAVE PUNTI E FALLI
const corpoTabellare = document.querySelector(".corpo-tabella");
let stringaTabellare = "";

squadre.forEach((element,index) => {
    let {nome, punti, falli} = element;
    // GENERO I NUMERI CASUALI
    punti = numeriCasuali(0,90);
    falli = numeriCasuali(0,43);
    // STAMPO LA TABELLA CON I DATI
    console.log(`La squadra ${nome} ha ${punti} punti, ha commesso ${falli} falli`);
    stringaTabellare += `
    <tr>
        <th scope="row">${index+1}</th>
        <td>${nome}</td>
        <td>${punti}</td>
        <td>${falli}</td>
    </tr>`
});
console.log(stringaTabellare)
corpoTabellare.innerHTML = stringaTabellare;

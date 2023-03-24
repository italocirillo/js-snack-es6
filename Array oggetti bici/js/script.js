// ARRAY OGGETTI BICI
const biciclette = [
    {
        nome: "Atala",
        peso: 180
    },
    {
        nome: "Filippa",
        peso: 160
    },
    {
        nome: "Turbo",
        peso: 240
    },
    {
        nome: "Ciclocross",
        peso: 80
    },
    {
        nome: "Ebike",
        peso: 320
    },
    {
        nome: "Gravel",
        peso: 280
    },
    {
        nome: "Endurance",
        peso: 120
    },
];
// CREO UN OGGETTO CON LA BICI CHE PESA DI MENO
const BiciPesoMinore = {
    nome: "",
    peso: 10000
}

// SCORRO IL VETTORE DI OGGETTI ASSEGNANDO LA BICI CON IL PESO MINORE
let stringaAltreBici="";
biciclette.forEach(element => {
    const {nome, peso} = element;
    if(peso < BiciPesoMinore.peso){
        BiciPesoMinore.peso = peso;
        BiciPesoMinore.nome = nome;
    }
    // STAMPO LE ALTRE BICI
    console.log(`La bici ${nome} pesa ${peso}`);
    stringaAltreBici += `<p>La bici ${nome} pesa ${peso}<p>`;
});
console.log(`La bici con il peso minore è ${BiciPesoMinore.nome} e pesa ${BiciPesoMinore.peso} kg`);
// PRENDO L ELEMENTO DALL'HTML E CI METTO IL RISULTATO

const stringaBici=document.getElementById("bici-peso-minore");
const altreBici=document.getElementById("altre-bici");

stringaBici.innerHTML = `La bici con il peso minore è ${BiciPesoMinore.nome} e pesa ${BiciPesoMinore.peso} kg`;
altreBici.innerHTML=stringaAltreBici;



const numeri = [22,15,32,54,67,89,15,24,56,78];


/**
 * Description
 * @param {array} array   //Array intero
 * @param {number} a     //Indice dal quale devo partire
 * @param {number} b    //Indice al quale posso fermarmi
 * @returns {array}     //Array filtrato da A a B
 */
function selezioneArray (array,a,b){
    const arrayFiltrato = array.filter((elemento,index) => index>=a && index<=b);
    return arrayFiltrato;
}
console.log(selezioneArray(numeri,1,8));


// INDEX HTML

const arrayIntero = document.getElementById("array-intero");
const arrayFiltrato = document.getElementById("array-filtrato");

arrayIntero.innerHTML += numeri;

const sceltaA = document.getElementById("numero-a");
const sceltaB = document.getElementById("numero-b");
const bottone = document.getElementById("bottone");

bottone.addEventListener("click",function(){
    arrayFiltrato.innerHTML+=selezioneArray(numeri,sceltaA.value,sceltaB.value);
    console.log(selezioneArray(numeri,sceltaA.value,sceltaB.value));
    sceltaA.value = "";
    sceltaB.value = "";
});

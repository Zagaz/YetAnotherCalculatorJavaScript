
var arrayNum1        = []; //Primeiro parametro
var arrayNum2        = []; //Segundo parametro
var arrayTest        = [];
var arrayNumeros     = [];
var arrayNumerosTemp = [];


//PASSO 1 -----------------------------------------

// As funções add() é referentes aos numerais 0-9.
// Veja as referencias em add1().

function add(value) {
    if (arrayNumerosTemp.length <13) {
        num = document.getElementById(value).innerText;
        addArray(num);
        disableEqual('auto');
    }
}

//PASSO 2 -----------------------------------------
//a função addArray() recebe o parametro das função do PASSO 1.

function addArray(n/*Parametro recebido no PASSO 1*/) {
//Adiciona o valoe de n no array1  
popZero() 
arrayNumeros.push(n);
arrayNumerosTemp.push(n);
addTela(arrayNumerosTemp.join(""))
}

//RESET   
function limpar() {
    addTela(0);
    arrayNum1 = [];
    arrayNum2 = [];
    operador  = "";
    zeraArrayNum();
    operadorCT = 0;
    disableEqual('none');
}
    
function computar(c){
    arrayNumeros.push(c);
    arrayNumerosTemp = [];
    addTela(0);
}
     
function raiz(){
    let temp = arrayNumeros.join(""); 
    let raiz = Math.sqrt(temp);
    addTela(raiz);
    zeraArrayNum();
    disableEqual('none');
}
   
function pctgem(){  
    let temp = eval ( arrayNumeros.join("")); 
    let pct = temp/100;
    addTela(pct + "%");
    zeraArrayNum();
    disableEqual('none');
}    
       
function equal() {
    let numero = arrayNumeros.join("");
    let operacao = eval (numero);
    addTela(operacao);
    zeraArrayNum();
    arrayNumeros=[operacao]; //Coloca o valor ANS
    disableEqual('none');
}

//Printa no InneHTML da tela o valor.
function addTela(n) {
    var telaTemp = n;
    let tela = document.getElementById("iOutput");
    tela.value = telaTemp;
}

//Evita que o primeiro valor da parcela seja / ou * .
function popZero() {
    if(arrayNumeros[0] === "/" || arrayNumeros[0]==="*" ){
        arrayNumeros[0]="";
        addTela(0);
    }
}

function zeraArrayNum() {
    arrayNumeros = [];   
    arrayNumerosTemp = [];  
}
    
function disableEqual(d) {
    document.getElementById('iEqual').style.pointerEvents = d;
}

function mousePointer(id){
    
    var pointer = document.getElementById(id); 
    pointer.style.cursor = "Pointer";
}

function mouseDefault(id){

    var pointer = document.getElementById(id); 
    pointer.style.cursor = "default";
}
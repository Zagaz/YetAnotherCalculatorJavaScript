
var arrayNum1        = []; //Primeiro parametro
var arrayNum2        = []; //Segundo parametro
var arrayTest        = [];
var arrayNumeros     = [];
var arrayNumerosTemp = [];
var ans         ;
var lastNumber;
var isEqual = false;

document.body.onload = intro();


//PASSO 1 -----------------------------------------

// As funções add() é referentes aos numerais 0-9.
// Veja as referencias em add1().

function add(value) {
    if (arrayNumerosTemp.length <13) {
        isEqual = false;
        num = document.getElementById(value).innerText;
        addArray(num);
        disableKey('iEqual','auto');
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

// INTRO () is called once on load.
function intro() {
    limpar(); //Resets the calculator. 
    addTela("Hello World!"); 
    console.log(lastNumber)
}
   
//RESET   
function limpar() {
    addTela(0);
    isEqual = false;
    arrayNum1 = [];
    arrayNum2 = [];
    operador  = "";
    zeraArrayNum();
    disableKey('iEqual','none');
    disableKey('iDot','auto');
    arrayNumeros.push('(');
    ans ="";
}
    
function computar(c){
    
    
if(!isEqual){
    addTela(arrayNumerosTemp.join("")); 
    arrayNumeros.push(c);
    arrayNumerosTemp = []; 
    disableKey('iDot','auto');
    isEqual = false;


}
if(isEqual){
    arrayNumeros.push(ans);
    arrayNumeros.push(c);
    disableKey('iDot','auto');
    isEqual = false;
}

          





       
       
        } 


function  point(p) {
    var point = p;
    disableKey('iDot','none');
}
     
function raiz(){
    arrayNumeros.shift();
    let temp =arrayNumeros.join("");
    alert (temp);
   
    //let temp = arrayNumeros.join(""); 
   let raiz = Math.sqrt(temp);
   addTela(raiz);
   // zeraArrayNum();
  //  disableKey('iEqual','auto');
}
   
function pctgem(){ 
    arrayNumeros.shift();
    
    let temp = eval (arrayNumeros.join("")); 
    //temp = 5;
    let pct = temp/100;
    addTela(pct);
    zeraArrayNum();
     disableKey('iEqual','auto');
}    
       
function equal(key) {
    arrayNumeros.push(')')
    let numero = arrayNumeros.join("");
    let operacao = eval (numero);
    console.log(operacao);
    addTela(operacao);
    arrayNumeros = []; 
    ans = operacao;
    arrayNumerosTemp = [];
    arrayNumeros.push('(')
    
    isEqual = true;
    
    disableKey(key,'none');
}

//Printa no InneHTML da tela o valor.
function addTela(n) {
    //
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
    
function disableKey(key,status) {
    document.getElementById(key).style.pointerEvents = status;
}

function mousePointer(id){
    
    var pointer = document.getElementById(id); 
    pointer.style.cursor = "Pointer";
}

function mouseDefault(id){

    var pointer = document.getElementById(id); 
    pointer.style.cursor = "default";
}
let btiC = document.getElementById("iC").addEventListener("click", limpar);
let btSqrt = document.getElementById("iSqrt").addEventListener("click", raiz1);
let btPct = document.getElementById("iPct").addEventListener("click",  pctgem);
let btRatio = document.getElementById("iRatio").addEventListener("click", dividir);
let btMulti = document.getElementById("iMulti").addEventListener("click", multiplicar);
let btSubtra = document.getElementById("iSubtra").addEventListener("click", diminuir);
let btPLus = document.getElementById("iPlus").addEventListener("click", somar);
let btEqual = document.getElementById("iEqual").addEventListener("click", equal);


let bt1 = document.getElementById("i1").addEventListener("click", add1);
let bt2 = document.getElementById("i2").addEventListener("click", add2);
let bt3 = document.getElementById("i3").addEventListener("click", add3);
let bt4 = document.getElementById("i4").addEventListener("click", add4);
let bt5 = document.getElementById("i5").addEventListener("click", add5);
let bt6 = document.getElementById("i6").addEventListener("click", add6);
let bt7 = document.getElementById("i7").addEventListener("click", add7);
let bt8 = document.getElementById("i8").addEventListener("click", add8);
let bt9 = document.getElementById("i9").addEventListener("click", add9);
let bt0 = document.getElementById("i0").addEventListener("click", add0);
let btDot = document.getElementById("iDot").addEventListener("click", addDot);


var arrayNum1=[];
var arrayNum2=[]

var arrayNumeros=[]

var ordem = true
var operador;

//PASSO 1 -----------------------------------------

// As funções addX são referentes aos numerais 0-9.
// Veja as referencias em add1().

function add1() {
    //Pega o elemento botão 1
    let bt = document.getElementById("i1");
    //Envia o parametro "bt" para a função addArray
    addArray(bt.innerText)    
    //Vá para funçao addArray(). para ver o PASSO 2
}
function add2() {
    
    let bt = document.getElementById("i2");
    let num = bt.innerText;
    addArray(num)    
}

function add3() {
    
    let bt = document.getElementById("i3");
    let num = bt.innerText;
    addArray(num)    
}
function add4() {
    
    let bt = document.getElementById("i4");
    let num = bt.innerText;
    addArray(num)    
}
function add5() {
    
    let bt = document.getElementById("i5");
    let num = bt.innerText;
    addArray(num)    
}
function add6() {
    
    let bt = document.getElementById("i6");
    let num = bt.innerText;
    addArray(num)    
}
function add7() {
    
    let bt = document.getElementById("i7");
    let num = bt.innerText;
    addArray(num)    
}
function add8() {
    
    let bt = document.getElementById("i8");
    let num = bt.innerText;
    addArray(num)    
}
function add9() {
    
    let bt = document.getElementById("i9");
    let num = bt.innerText;
    addArray(num)    
}
function add0() {
    
    let bt = document.getElementById("i0");
    let num = bt.innerText;
    addArray(num)    
}
function addDot() {
    
    let bt = document.getElementById("iDot");
    let num = bt.innerText;
    addArray(num)    
}

//PASSO 2 -----------------------------------------
//a função addArray() recebe o parametro das função do PASSO 1.
function addArray(n/*Parametro recebido no PASSO 1*/) {
//Adiciona o valoe de n no array1  
if (ordem) {
    arrayNum1.push(n);
    //arrayNumeros.push(n)

  // addTela(arrayNum1.join(""))
      
    
} else if (!ordem) {
    arrayNum2.push(n);
    //arrayNumeros.push(n)
  
//   addTela(arrayNum2.join(""))
}

arrayNumeros.push(n)
popZero() 
addTela(arrayNumeros.join(""))






    
}
function limpar() {

    addTela(0)
    ordem1() 
    arrayNum1=[];
    arrayNum2=[]
    operador = "";
    arrayNumeros=[];   
    alert(arrayCounter)
  

   

}

function somar() {

   if(
       (arrayNumeros [arrayNumeros.length-1] === "+")||
       (arrayNumeros [arrayNumeros.length-1] === "-")||
       (arrayNumeros [arrayNumeros.length-1] === "/")||
       (arrayNumeros [arrayNumeros.length-1] === "*")

   ){
  
   } else{
       arrayNumeros.push("+")
       addTela(arrayNumeros.join(""))
    }
}
   
function diminuir() {
    if(
        (arrayNumeros [arrayNumeros.length-1] === "+")||
        (arrayNumeros [arrayNumeros.length-1] === "-")||
        (arrayNumeros [arrayNumeros.length-1] === "/")||
        (arrayNumeros [arrayNumeros.length-1] === "*")
 
    ){
   
    } else{
        arrayNumeros.push("-")
        addTela(arrayNumeros.join(""))
     }
 }

function multiplicar() {
    if(
        (arrayNumeros [arrayNumeros.length-1] === "+")||
        (arrayNumeros [arrayNumeros.length-1] === "-")||
        (arrayNumeros [arrayNumeros.length-1] === "/")||
        (arrayNumeros [arrayNumeros.length-1] === "*")
 
    ){
   
    } else{
        arrayNumeros.push("*")
        addTela(arrayNumeros.join(""))
     }
 }
    

function dividir() {
    if(
        (arrayNumeros [arrayNumeros.length-1] === "+")||
        (arrayNumeros [arrayNumeros.length-1] === "-")||
        (arrayNumeros [arrayNumeros.length-1] === "/")||
        (arrayNumeros [arrayNumeros.length-1] === "*")
 
    ){
   
    } else{
        arrayNumeros.push("/")
        addTela(arrayNumeros.join(""))
     }
 }
    


function raiz1(){
    
    
    let temp = arrayNumeros.join(""); 
    let raiz = Math.sqrt(temp)
    addTela(raiz)
    arrayNumerosZera()

       
}
function pctgem(){
    
    
    let temp = eval ( arrayNumeros.join("")); 

    let pct = temp/100

    addTela(pct + "%")
    arrayNumerosZera()
       
}


function ordem1() {
    ordem = true

    
}
function ordem2() {
    ordem = false
   
}

function equal() {
  
  
        let numero = arrayNumeros.join("")
        let operacao = eval (numero)
       
        addTela(operacao)
        arrayNumerosZera()
        
       
       
  
    
}
function addTela(n) {
    var telaTemp = n
    let tela = document.getElementById("iOutput");
    tela.innerHTML = telaTemp;
    
}

function arrayNumerosZera() {
    arrayNumeros=[]
    
}

function popZero() {
    if(arrayNumeros[0] === "/"||
    arrayNumeros[0]==="*"
    )
    arrayNumeros[0]="";

    
}



function clicou() {

 
    
}

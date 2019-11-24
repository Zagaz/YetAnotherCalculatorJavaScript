
//Pega os elementos
let num = document.getElementById("numero");
let lista = document.getElementById("lista");
let res = document.getElementById("resposta");
let valores = [];
let bt = document.getElementById("add");
let btFinal = document.getElementById("finalizar");

n =num.value;


//Ao clicar, chama a função calcular.
bt.addEventListener("click",adicionar);
btFinal.addEventListener("click",finalizar)

function adicionar() {
    valores.push(num.value);
    
}


function clicouMiseravel() {
    alert("Acertou miserável!")
    
}

function isNumero(n) {
    if (  Number(n)>=1 && Number(n) <=100) {
       return true;
    } else{
        return false;
    }
    
}
function isVazio(v){

    if (v=="") {
        return true
        
    }else
    return false

    }



function inList (n,l){

    if (l.indexOf(Number(n)) != -1) {
        return true;
        
    } else{
        return false;
    }


}
function somaTotal(total,b){

    return Number( total)+ Number(b);

}

function small(s) {

    let tempS = Math.min(s);
    return tempS;
    
    
}


function finalizar() {
    lista.innerText = "";
   


    if (isNumero (num.value) && !inList(num.value,valores) && !isVazio(num.value)) {
       
       let aoTodo = `Ao todo temos ${valores.length} numeros cadastrados`
       let somatorio = Number( valores.reduce(somaTotal,0));
       let soma = `A soma de todos os valores é ${somatorio}.`
       let media = `A média de todos os valores é ${somatorio/valores.length}.`
       let min = `O menor valor é ${Math.min(...valores)}.`
       let max = `O maior valor é ${Math.max(...valores)}.`

       let textArray = [aoTodo,soma,media,min,max]
      
    for (let i = 0; i < textArray.length; i++) {

        item = document.createElement("option");
        item.text = textArray[i];
        lista.appendChild(item);
       

        
        
    }
       

alert ("Os valores inseridos foram: " + valores)
  
        
    } else {
        alert("O número tem que ser entre 1 à 100 e não pode ser vazio. ")
    }

    //adiciona um valoy numa array arra.push();
    var n = numero;
   // alert(n)
    //valor apenas de 1 à 10;

    // Ao todo temos X numeros cadastrados
    //O menor vaor informado foi y
    //Somando todos os valores temos XX
    //A média dos valores é Xmedia.
    
}












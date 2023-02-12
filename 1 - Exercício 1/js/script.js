let N1 = document.querySelector('#n1');
let N2 = document.querySelector('#n2');
let btn_soma = document.querySelector('#add');
let btn_subtracao = document.querySelector('#minus');
let btn_multiplicacao = document.querySelector('#multiply');
let btn_divisao = document.querySelector('#divide');

let resultado = document.querySelector('h2');

function verificar_campos_vazios(){
    if(!N1.value || !N2.value){
    resultado.textContent = 'Preencha os 2 numeros !' ;
    return true ;
    }

    return false ;
}

//console.log(N1.value);

function limpar(){
   N1.value = "" ;
   N2.value = "" ;
}

btn_soma.addEventListener('click', (evento)=>{
    evento.stopPropagation();
    if(verificar_campos_vazios()){
        return ;
    }
    
    resultado.textContent = `Resultado : ${Number(N1.value) + Number(N2.value) }` ;

    limpar();
});

btn_subtracao.addEventListener('click', (evento)=>{
    evento.stopPropagation();
    if(verificar_campos_vazios()){
        return ;
    }

    resultado.textContent = `Resultado : ${Number(N1.value) - Number(N2.value) }`;

    limpar();
});

btn_divisao.addEventListener('click', (evento)=>{
    evento.stopPropagation();
    if(verificar_campos_vazios()){
        return ;
    }

    resultado.textContent = `Resultado : ${Number(N1.value) / Number(N2.value) }`;

    limpar();
});

btn_multiplicacao.addEventListener('click', (evento)=>{
    evento.stopPropagation();
    if(verificar_campos_vazios()){
        return ;
    }

    resultado.textContent = `Resultado : ${Number(N1.value) * Number(N2.value) }`;

    limpar();
});
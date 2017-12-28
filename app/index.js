//####################################################
//Inicializa campo de digitos#########################
//####################################################
var valorMemoria = 0;
var operacao;
var novaOperacao;
var campoDigitos = document.getElementById("campo-digitos");

campoDigitos.value = 0;

//####################################################
//Insere ouvintes do evento click nos botoes##########
//####################################################
document.getElementById("1").addEventListener("click", digitar1);
document.getElementById("2").addEventListener("click", digitar2);
document.getElementById("3").addEventListener("click", digitar3);
document.getElementById("4").addEventListener("click", digitar4);
document.getElementById("5").addEventListener("click", digitar5);
document.getElementById("6").addEventListener("click", digitar6);
document.getElementById("7").addEventListener("click", digitar7);
document.getElementById("8").addEventListener("click", digitar8);
document.getElementById("9").addEventListener("click", digitar9);
document.getElementById("0").addEventListener("click", digitar0);

document.getElementById("somar").addEventListener("click", somar);
document.getElementById("subtrair").addEventListener("click", subtrair);
document.getElementById("multiplicar").addEventListener("click", multiplicar);
document.getElementById("dividir").addEventListener("click", dividir);
document.getElementById("elevar").addEventListener("click", elevar);
document.getElementById("radiciacao").addEventListener("click", radiciacao);

document.getElementById("virgula").addEventListener("click", virgula);
document.getElementById("reiniciar").addEventListener("click", reiniciar);
document.getElementById("inverter-sinal").addEventListener("click", inverterSinal);
document.getElementById("obter-resultado").addEventListener("click", obterResultado);

//####################################################
//Funcoes executadas pelos botoes#####################
//####################################################
function digitar1(){
    digitar('1');
}

function digitar2(){
    digitar('2');
}

function digitar3(){
    digitar('3');
}

function digitar4(){
    digitar('4');
}

function digitar5(){
    digitar('5');
}

function digitar6(){
    digitar('6');
}

function digitar7(){
    digitar('7');
}

function digitar7(){
    digitar('7');
}

function digitar8(){
    digitar('8');
}

function digitar9(){
    digitar('9');
}

function digitar0(){
    if(!campoEstaZerado())
    digitar('0');
}

function somar(){
    memorizar("somar");
}

function subtrair(){
    memorizar("subtrair");
}

function multiplicar(){
    memorizar("multiplicar");
}

function dividir(){
    memorizar("dividir");
}

function elevar(){
    memorizar("elevar");
}

function radiciacao(){
    memorizar("radiciacao");
}

function inverterSinal(){
    if(!campoEstaZerado())
        inverter();
}

function obterResultado(){
    executarOperacao();
}

function virgula(){
    digitar('.');
}

//####################################################
//Logica de utilização dos eventos####################
//####################################################
function digitar(valor){
    if(campoEstaZerado() || ehNovaOperacao())
        limparCampo();

    novaOperacao = false;
    campoDigitos.value = campoDigitos.value.concat(valor);
}

function campoEstaZerado(){
    return parseFloat(campoDigitos.value) == 0;
}

function ehNovaOperacao(){
    return novaOperacao;
}

function limparCampo(){
    campoDigitos.value = "";
}

function reiniciar(){
    campoDigitos.value = "0";
    limparOperacao();
}

function memorizar(operacaoSelecionada){
    if(!campoEstaZerado())
        armazenarValor();
        
    operacao = operacaoSelecionada;
    novaOperacao = true;
}

function armazenarValor(){
    valorMemoria = campoDigitos.value;
}

function inverter(){
    campoDigitos.value = parseFloat(campoDigitos.value) * (-1);
}

function executarOperacao(){
    let resultado = '';
    let removerSeparadorDecimal = ultimoCaracterEhSeparadorDecimal();

    if(removerSeparadorDecimal)
        removerUltimoCaracter();

    if(operacao == 'somar')
        resultado = parseFloat(valorMemoria) + parseFloat(campoDigitos.value);
    else if(operacao == 'subtrair')
        resultado = parseFloat(valorMemoria) - parseFloat(campoDigitos.value);
    else if(operacao == 'multiplicar')
        resultado = parseFloat(valorMemoria) * parseFloat(campoDigitos.value);
    else if(operacao == 'dividir')
        resultado = parseFloat(valorMemoria) / parseFloat(campoDigitos.value);
    else if(operacao == 'elevar')
        resultado = Math.pow(parseFloat(valorMemoria), parseFloat(campoDigitos.value));
    else if(operacao == 'radiciacao')
        resultado = Math.pow(parseFloat(valorMemoria), 1/parseFloat(campoDigitos.value));
    else 
        resultado = campoDigitos.value;

    campoDigitos.value = String(resultado);

    limparMemoria();
    limparOperacao();
    novaOperacao = true;
}

function ultimoCaracterEhSeparadorDecimal(){
    return campoDigitos.value[campoDigitos.value.length-1] == '.';
}

function removerUltimoCaracter(){
    campoDigitos.value = campoDigitos.value.substring(0, campoDigitos.value.length-1);
}

function limparMemoria(){
    valorMemoria = 0;
}

function limparOperacao(){
    operacao = undefined;
}
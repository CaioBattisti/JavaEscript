//Executar Mascaras
function mascara(o,f){
    //define o objeto e chama a função
    Objeto=o
    funcao=f
    setTimeout("executaMascara()",1)
}

function executaMascara(){
    Objeto.value=funcao(objeto.value)
}

// mascaras:
// telefone
function Telefone(variavel){
    variavel=variavel.replace(/\D/g,"")//remove caracteres nao numericos
    variavel=variavel.replace(/^(\d\d)(\d)/g,"($1) $2")// adiciona parenteses em volta dos dois primeiros digitos
    variavel=variavel.replace(/(\d{4})(\d)/,"$1-$2")// adiciona hifem entre o quarto e quinto digito
    return variavel
}

// RG/CPF
function RGeCPF(variavel){
    variavel=variavel.replace(/\D/g,"")//remove caracteres nao numericos
    variavel=variavel.replace(/(\d{3})(\d)/,"$1.$2")// adiciona ponto entre o terceiro e quarto digito
    variavel=variavel.replace(/(\d{3})(\d)/,"$1.$2")// adiciona ponto entre sexto e o setimo digito
    variavel=variavel.replace(/(\d{3})(\d{1,2})$/,"$1-$2")// adiciona hifem entre o quarto e quinto digito
    return variavel
}
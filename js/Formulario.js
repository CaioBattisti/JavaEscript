// Função genérica para aplicar máscaras em campos de formulário
function mascara(o, f) {
    // Armazena o campo (objeto HTML) e a função de máscara
    let objeto = o;
    let funcao = f;

    // Executa a função de máscara após 1 milissegundo (evita conflitos com o evento)
    setTimeout(function () {
        executaMascara(objeto, funcao);
    }, 1);
}

// Executa a função de máscara recebida sobre o valor do campo
function executaMascara(objeto, funcao) {
    objeto.value = funcao(objeto.value); // Atualiza o valor do campo com a máscara aplicada
}

// ----------------------------
// Máscara para telefone
// Formata número no padrão: (XX) XXXX-XXXX ou (XX) XXXXX-XXXX
function Telefone(valor) {
    valor = valor.replace(/\D/g, ""); // Remove todos os caracteres que não são dígitos
    valor = valor.replace(/^(\d{2})(\d)/g, "($1) $2"); // Adiciona parênteses nos dois primeiros dígitos
    valor = valor.replace(/(\d{4,5})(\d{4})$/, "$1-$2"); // Adiciona hífen entre os últimos dígitos
    return valor;
}

// ----------------------------
// Máscara para RG ou CPF
// Formata número no padrão: 000.000.000-00 (padrão CPF)
function RGeCPF(valor) {
    valor = valor.replace(/\D/g, ""); // Remove tudo que não for número
    valor = valor.replace(/(\d{3})(\d)/, "$1.$2"); // Adiciona primeiro ponto
    valor = valor.replace(/(\d{3})(\d)/, "$1.$2"); // Adiciona segundo ponto
    valor = valor.replace(/(\d{3})(\d{1,2})$/, "$1-$2"); // Adiciona hífen nos dois últimos dígitos
    return valor;
}

// ----------------------------
// Máscara para Cartão SUS
// Formato: 000 0000 0000 0000
function CartaoSUS(valor) {
    valor = valor.replace(/\D/g, ""); // Remove caracteres não numéricos
    valor = valor.replace(/(\d{3})(\d)/, "$1 $2"); // Espaço após os 3 primeiros dígitos
    valor = valor.replace(/(\d{4})(\d)/, "$1 $2"); // Espaço após os próximos 4
    valor = valor.replace(/(\d{4})(\d)/, "$1 $2"); // Espaço após os seguintes 4
    return valor.trim(); // Remove espaços extras no final (se houver)
}

// ----------------------------
// Máscara para Data
// Formato: 00/00/0000 (dia/mês/ano)
function Data(valor) {
    valor = valor.replace(/\D/g, ""); // Remove tudo que não for número
    valor = valor.replace(/(\d{2})(\d)/, "$1/$2"); // Adiciona barra após o dia
    valor = valor.replace(/(\d{2})(\d)/, "$1/$2"); // Adiciona barra após o mês
    valor = valor.replace(/(\d{4})(\d)/, "$1"); // Impede mais que 4 dígitos no ano
    return valor;
}

// ----------------------------
// Máscara para CEP
// Formato: 00000-000
function cep(valor) {
    valor = valor.replace(/\D/g, ""); // Remove caracteres não numéricos
    valor = valor.replace(/^(\d{5})(\d)/, "$1-$2"); // Adiciona hífen após os cinco primeiros dígitos
    return valor;
}

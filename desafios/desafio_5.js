/*  
    TIPO DE PAGAMENTO:
    cartão de debito = 1
    dinheiro ou pix = 2
    duas vezes = 3
    mais de duas = 4
*/

var valorEtiqueta = 100;
var tipoPagamento = 4;

function aplicaDesconto(valorProduto, valorDesconto){
    return (valorProduto - ((valorProduto * valorDesconto) / 100));
}
function aplicaJuros(valorProduto, valorJuros){
    return (valorProduto + ((valorProduto * valorJuros) / 100));
}

if(tipoPagamento == 1){

    valorEtiqueta = aplicaDesconto(valorEtiqueta, 10);
    console.log(valorEtiqueta);

} else if(tipoPagamento == 2){

    valorEtiqueta = aplicaDesconto(valorEtiqueta, 15);
    console.log(valorEtiqueta);

} else if(tipoPagamento == 3){

    console.log(valorEtiqueta);

} else if (tipoPagamento == 4){

    valorEtiqueta = aplicaJuros(valorEtiqueta, 10);
    console.log(valorEtiqueta);

}else {

    console.log("Tipo de pagamento incorreto!");

}

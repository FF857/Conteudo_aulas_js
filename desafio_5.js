/*  TIPO DE PAGAMENTO:
    cartão de debito = 1
    dinheiro ou pix = 2
    duas vezes = 3
*/

function aplicaJuros(valorProduto, parcelaProduto, tipoPagamento){
    if(parcelaProduto == 1 && tipoPagamento == 1){
        desconto = ((valorProduto * 10) / 100);
        valorProduto = (valorProduto - desconto);
        console.log(valorProduto);
    } else if(parcelaProduto == 1 && tipoPagamento == 2){
        desconto = ((valorProduto * 15) / 100);
        valorProduto = (valorProduto - desconto);
        console.log(valorProduto);
    }else if(parcelaProduto == 2 && tipoPagamento == 3){
        console.log(valorProduto);
    } else {
        juros = ((valorProduto * 10) / 100);
        valorProduto = (valorProduto + juros);
        console.log(valorProduto)
    }

}

aplicaJuros(100, 1, 2);


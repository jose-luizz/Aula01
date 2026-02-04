
const precoBase = 200;
const desconto = 0.10; //10%
const frete = 23;

// Operadores aritméticos
const valorDesconto = precoBase * desconto;
const precoFinal = precoBase - valorDesconto;
const precoFrete = precoFinal + frete;

// Exibindo no HTML 
document.getElementById('preco-final').innerText = precoFinal;
document.getElementById('precoComFrete').innerText = precoFrete;


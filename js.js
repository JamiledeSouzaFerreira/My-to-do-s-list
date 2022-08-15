var add_item = document.querySelector('input.btn');
add_item.addEventListener("click", novo_item);

function novo_item (){
    //createElemt() + appendChild() inserem um novo elemento no html
    var item = document.querySelector("div.item");
    var novo_item = document.createElement('input');
    novo_item.classList.add('novo_item'); //caixa de texto
    var btn1 = document.createElement("button");
    btn1.classList.add('btn_novo_item');//botao novo item
    
    item.appendChild(novo_item, btn1);
}
// Passos para inserir elementos dinamicamente
    //1. criar o elemento através do create element
    //2. criar uma variavel que represente onde o elemento será adicionado
    //3. adicionar o elemento à árvore DOM
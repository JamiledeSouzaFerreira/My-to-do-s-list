

var add_item = document.querySelector('input.btn');

add_item.addEventListener("click", novo_item);

function novo_item (){
    //createElemt() + appendChild() inserem um novo elemento no html
    var item = document.createElement("div");
    add_item.appendChild(item);
    //document.body.style.backgroundColor = 'blue';
}

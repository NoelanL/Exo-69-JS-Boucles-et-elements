let list = document.getElementById('liste-commissions');
let input = document.getElementById('input');
let button = document.getElementById('button');
let buttonReset = document.getElementById('reset');

button.addEventListener('click', function (){
    if( input.value !== ""){
        let addList = document.createElement("li");
        addList.innerHTML = input.value;
        list.append(addList);
        input.value = "";
    }
})

buttonReset.addEventListener("click", function (){
    let lastLi = document.querySelector('li:last-child');
    lastLi.remove();
})




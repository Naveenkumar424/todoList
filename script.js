let add = document.querySelector(".add");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

add.addEventListener("click",function(){
    let li = document.createElement("li");
    li.innerText = inp.value;
    let delBtn = document.createElement("button");
    delBtn.classList.add("delete");
    delBtn.innerText = "delete";
    delBtn.addEventListener("click",delBtns);
    li.appendChild(delBtn);
    ul.appendChild(li);
    inp.value = "";
});

function delBtns(){
    console.log("Delete button was clicked!!!");
    let par = this.parentElement;
    console.log(par);
    par.remove();
}
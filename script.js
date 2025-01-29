let btn = document.querySelector("button");

btn.addEventListener("click",function(){
    li = document.createElement("li");
    inp = document.querySelector("input").value;
    li.innerText = inp;
    ul = document.querySelector("ul");
    ul.appendChild(li);
});
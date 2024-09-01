function aritOp(operation){
    // so kann man auf inhalt zugreifen
    document.getElementById("resultArea").innerHTML += operation;
}
function ergebnis(){
    let container = document.getElementById("resultArea");
    let result = eval(container.innerHTML);
    container.innerHTML= result;
}
function deletetast(){
    let container = document.getElementById("resultArea");
    if(container.innerHTML.endsWith(' ')){
        container.innerHTML=container.innerHTML.slice(0, -3);
    } else {
    container.innerHTML=container.innerHTML.slice(0, -1);
}
 }
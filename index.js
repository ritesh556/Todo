let text;
var a = [];

document.getElementById("ok").onclick = function(){
    let i;
    text = document.getElementById("text").value;
   if (text.length === 0 || text.length >= 100){
    
        var check = document.getElementById("check");
        if (check.innerHTML !== "enter what to do") {
            check.innerHTML += "enter what to do";
        }
    }
    
   
   else{

    a.push(text);
    localStorage.setItem("a", JSON.stringify(a));
    
    document.getElementById("write").innerHTML ="";
    for (i=0;i<a.length;i++){
        document.getElementById("write").innerHTML += (i+1) + ")" + (a[i])  + "&emsp;" + "<button class='delete' data-index='"+i+"'>Delete</button><br>";
    }
    document.getElementById("text").value = "";
    document.getElementById("check").innerHTML =""
}
}


window.onload = function() {
    a = JSON.parse(localStorage.getItem("a")) || []; 
    for (i=0;i<a.length;i++){
        document.getElementById("write").innerHTML += (i+1) + ")"  + (a[i])  + "&emsp;" + "<button class='delete' data-index='"+i+"'>Delete</button><br>";
    }
    document.querySelectorAll(".delete").forEach(function(button) {
        button.addEventListener("click", function() {
            let index = button.getAttribute("data-index");
            a.splice(index, 1);
            localStorage.setItem("a", JSON.stringify(a));
            
document.getElementById("write").innerHTML = "";
for (i=0;i<a.length;i++){
    document.getElementById("write").innerHTML += (i+1) + ")"  + (a[i])  + "&emsp;" + "<button class='delete' data-index='"+i+"'>Delete</button><br>";
}
});
})};

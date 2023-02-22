let text;
let a = [];

// Function to render the list of items
function renderList() {
    document.getElementById("write").innerHTML = "";
    for (let i = 0; i < a.length; i++) {
        document.getElementById("write").innerHTML += (i + 1) + ")" + (a[i]) + "&emsp;" + "<button class='delete' data-index='" + i + "'>Delete</button>&emsp;<button class='edit' data-index='" + i + "'>Edit</button><br>";
    }

    // Add event listeners to delete and edit buttons
    document.querySelectorAll(".delete").forEach(function(button) {
        button.addEventListener("click", function() {
            let index = button.getAttribute("data-index");
            a.splice(index, 1);
            localStorage.setItem("a", JSON.stringify(a));
            renderList();
        });
    });

    document.querySelectorAll(".edit").forEach(function(button) {
        button.addEventListener("click", function() {
            let index = button.getAttribute("data-index");
            let newText = prompt("Enter new text", a[index]);
            if (newText && newText.length > 0 && newText.length < 100) {
                a[index] = newText;
                localStorage.setItem("a", JSON.stringify(a));
                renderList();
            }
        });
    });
}

// Event listener for "Add" button
document.getElementById("ok").addEventListener("click", function(event) {
    event.preventDefault();
    text = document.getElementById("text").value;
    if (text.length === 0 || text.length >= 100) {
       textvalue = document.getElementById("text")
        textvalue.style.background="darkred"
        textvalue.classList.add("jumping")
        
       
       
    } else {
        a.push(text);
        localStorage.setItem("a", JSON.stringify(a));
        document.getElementById("text").value=""
        textvalue.style.background="rgb(19, 19, 19)"
       
        renderList();
    }
});

// Load the list of items from local storage when the page loads
window.onload = function() {
    a = JSON.parse(localStorage.getItem("a")) || [];
    renderList();
};

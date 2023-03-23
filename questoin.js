function storeAndDisplay() {
    // Get the input value
    var input = document.getElementById("input").value;
    
    // Store the input in local storage
    localStorage.setItem("input", input);
    
    // Display the input in the output element
    document.getElementById("output").innerHTML = "Question: " + input;
}

// Check if there is a stored input and display it
if (localStorage.getItem("input")) {
    document.getElementById("output").innerHTML = "Question: " + localStorage.getItem("input");
}


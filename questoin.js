function storeAndDisplay() {
    // Get the input value
    var input = document.getElementById("input").value;
    
    // Store the input in local storage
    localStorage.setItem("input", input);
    
    // Display the input in the output element
    document.getElementById("output").innerHTML = "Input: " + input;
}

// Check if there is a stored input and display it
if (localStorage.getItem("input")) {
    document.getElementById("output").innerHTML = "Question: " + localStorage.getItem("input");
}


// function othername() {
//     var input = document.getElementById("userInput").value;
//     alert(input);
// }

// function createQ(){
//     var q1 = document.getElementById("question").value;
//     alert(input);
// }


// function createQ() {
//     const nameEl = document.querySelector("#question");
//     localStorage.setItem("question", nameEl.value);
//     window.location.href = "index.html";
//   }

//   function getPlayerName() {
//     return localStorage.getItem('question');
//   }
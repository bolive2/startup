function createQ() {
    const nameEl = document.querySelector("#name");
    localStorage.setItem("question", nameEl.value);
    window.location.href = "index.html";
  }
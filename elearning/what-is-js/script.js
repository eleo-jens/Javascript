// propre ne pas injecter de JS dans le code HTML
// c-ex: <button onclick="createParagraph()">Click Me</button>

// the 'DOMContentLoaded' allows JS to run only after that event is done
// so after the HTML body is completely loaded
document.addEventListener("DOMContentLoaded", () => {
  function createParagraph() {
    const para = document.createElement("p");
    para.textContent = "You clicked the button!";
    document.body.appendChild(para);
  }

  const buttons = document.querySelectorAll("button");

  for (const button of buttons) {
    button.addEventListener("click", createParagraph);
  }
});

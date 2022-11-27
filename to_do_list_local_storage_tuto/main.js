window.addEventListener("load", () => {
  //global variable to stock items
  var todos = JSON.parse(localStorage.getItem("todos")) || [];
  const nameInput = document.querySelector("#name");
  const newTodoForm = document.querySelector("#new-todo-form");

  const username = localStorage.getItem("username") || "";

  nameInput.value = username;

  nameInput.addEventListener("change", function (e) {
    // on met un item dans notre storage
    localStorage.setItem("username", e.target.value);
  });

  newTodoForm.addEventListener("submit", (e) => {
    e.defaultPrevented();

    //création d'une objet todo avec clé valeur
    const todo = {
      content: e.target.elements.content.value,
      category: e.target.elements.category.value,
      done: false,
      createdAt: new Date().getTime(),
    };

    // on push notre todo dans le tableau global todos
    todos.push(todo);

    // on sauvegarde le tableau dans le storage: transformer notre list en json string et set dans le localstorage
    localStorage.setItem("todos", JSON.stringify(todos));

    e.target.reset();
  });
});

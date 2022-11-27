// window.localStorage(
//     //list of items
// )

window.addEventListener("load", () => {
  const form = document.getElementById("new-task-form");
  const input = document.querySelector("#new-task-input");
  const list_el = document.querySelector("#tasks");

  // console.log(form);
  // console.log(input);
  // console.log(list_el);

  form.addEventListener("submit", (e) => {
    // prevent to refresh the form to submit the form. There is no submit
    e.preventDefault();
    // console.log("Submit form");

    const task = input.value;
    if (!task) {
      alert("Please fill out the task!");
      return;
    }
    // else {
    //     console.log("Success");
    // }

    const task_el = document.createElement("div");
    task_el.classList.add("task");

    const task_content_el = document.createElement("div");
    task_content_el.classList.add("content");

    task_el.appendChild(task_content_el);

    const task_input_el = document.createElement("input");
    task_input_el.type = "text";
    task_input_el.classList.add("text");
    task_input_el.value = task;
    task_input_el.setAttribute("readonly", "readonly");

    task_content_el.appendChild(task_input_el);

    const task_action_el = document.createElement("div");
    task_action_el.classList.add("actions");

    const task_edit_el = document.createElement("button");
    task_edit_el.classList.add("edit");
    task_edit_el.innerHTML = "Edit";

    const task_delete_el = document.createElement("button");
    task_delete_el.classList.add("delete");
    task_delete_el.innerHTML = "Delete";

    task_action_el.appendChild(task_edit_el);
    task_action_el.appendChild(task_delete_el);

    task_el.appendChild(task_action_el);

    list_el.appendChild(task_el);

    input.value = "";

    task_edit_el.addEventListener("click", () => {
      if (task_edit_el.innerText.toLowerCase() == "edit") {
        task_input_el.removeAttribute("readonly");
        task_input_el.focus();
        task_edit_el.innerHTML = "Save";
      }
      else {
        task_input_el.setAttribute("readonly","readonly");
        task_edit_el.innerText = "Edit";
      }
    });

    task_delete_el.addEventListener("click", () => {
        list_el.removeChild(task_el);
    })
  });
});

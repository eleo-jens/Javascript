window.onload = function () {
    let button = document.querySelector("button");
    let ul = document.querySelector("ul");

    button.addEventListener("click", function (event) {
        let task = document.querySelector("input#item").value;
        let radio = document.querySelector('input[name="category"]:checked').value;
        console.log(radio);
        document.querySelector("input#item").value = "";
        let p = null;

        if (document.querySelector("p.alert")) {
            p = document.querySelector("p.alert");
            p.textContent = "";
        }

        if (task == "" && (task.trim().length === 0) == true) {
            if (p) {
                p.innerText = "You must put a value!";
            } else {
                let p = document.createElement("p");
                p.innerText = "You must put a value!";
                p.setAttribute("class", "alert");
                document.querySelector("div#add").appendChild(p);
            }
            return;
        }

        let div_task = document.createElement("div");
        div_task.classList.add("item");
        let label = document.createElement('label');
        let div_content = document.createElement("div");
        div_content.classList.add("content");
        let div_actions = document.createElement("div");
        div_actions.classList.add("actions");

        let check = document.createElement('input');
        check.type = "checkbox";
        let span = document.createElement('span');
        span.classList.add('bubble');
        label.appendChild(check);
        label.appendChild(span);

        let inputItem = document.createElement("input");
        inputItem.type = "Text";
        inputItem.setAttribute("readonly", "readonly");
        inputItem.value = task;
        div_content.appendChild(inputItem);

        const task_edit_el = document.createElement("button");
        task_edit_el.classList.add("edit");
        task_edit_el.innerHTML = "Edit";
        div_actions.appendChild(task_edit_el);

        const task_delete_el = document.createElement("button");
        task_delete_el.classList.add("delete");
        task_delete_el.innerHTML = "Delete";
        div_actions.appendChild(task_delete_el);

        div_task.appendChild(label);
        div_task.appendChild(div_content);
        div_task.appendChild(div_actions);
        ul.appendChild(div_task);

        check.addEventListener("click", (event) => {
            if (event.target.checked == true) {
                inputItem.style.textDecorationLine = "line-through";
            }
            else {
                inputItem.style.textDecorationLine = "none";
            }
        })

        task_delete_el.addEventListener("click", () => {
            ul.removeChild(div_task);
        });

        task_edit_el.addEventListener("click", (e) => {
            if (task_edit_el.innerText.toLowerCase() == "edit") {
                inputItem.removeAttribute("readonly");
                inputItem.focus();
                task_edit_el.innerText = "Save";
            } else {
                inputItem.setAttribute("readonly", "readonly");
                task_edit_el.innerText = "Edit";
            }
        });
    });
};

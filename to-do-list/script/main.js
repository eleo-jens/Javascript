window.onload = function () {
    let button = document.querySelector('button');
    let ul = document.querySelector('ul');
    
    button.addEventListener('click', function (event) {
        let task = document.querySelector('input').value;
        document.querySelector('input').value = "";
        let p = null;
        if (document.querySelector('p.alert')){
            p = document.querySelector('p.alert');
            p.textContent = '';
        }
        if (task != "" && ((task.trim().length === 0) == false)){
            //let li = document.createElement('li');
            let div = document.createElement('div');
            div.classList.add('item');
            let inputItem = document.createElement('input');
            inputItem.type = "Text";
            inputItem.setAttribute("readonly","readonly");
            inputItem.value = task;
            console.log(inputItem);
            div.innerHTML = '<i class="fa-solid fa-trash-can"></i><i class="fa-solid fa-pen"></i>';
            div.appendChild(inputItem);
            ul.appendChild(div);
            //li.innerHTML = task + '<i class="fa-solid fa-trash-can"></i><i class="fa-solid fa-pen"></i>';
            //ul.appendChild(li);
        }
        else {
            if (p){
                p.innerText = "You must put a value!";
            }
            else {
                let p = document.createElement('p');
                p.innerText = "You must put a value!";
                p.setAttribute('class','alert');
                document.querySelector('div#add').appendChild(p);
            }
        }

        let cans = document.querySelectorAll('li>i.fa-trash-can');
        cans.forEach(function (can) {
            can.addEventListener("click", (event) => {
                // console.log(event.target.parentNode);
                li = event.target.parentNode;
                ul.removeChild(li);
                // console.log(event.target.parentNode); 
                // console.log(event.target.parentNode.textContent); 
                
            });
        });

        let pens = document.querySelectorAll('li>i.fa-pen');
        pens.forEach(function (pen) {
            pen.addEventListener("click", (event) => {
                console.log(event.target.parentNode);
                // li = event.target.parentNode;
                // ul.removeChild(li);
                // console.log(event.target.parentNode); 
                // console.log(event.target.parentNode.textContent); 
                
            });
        });
    });

}

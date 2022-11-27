window.onload = function () {
    let button = document.querySelector('button');
    
    button.addEventListener('click', function (event) {
        let inputValue = document.querySelector('input').value;
        document.querySelector('input').value = "";
        let p = null;
        if (document.querySelector('p.alert')){
            p = document.querySelector('p.alert');
            p.textContent = '';
        }
        if (inputValue != "" && ((inputValue.trim().length === 0) == false)){
            let ul = document.querySelector('ul');
            let li = document.createElement('li');
            li.innerHTML = inputValue + '<i class="fa-solid fa-trash-can"></i>';
            ul.appendChild(li);
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
    });

    let icones = document.querySelectorAll('i>li');
    icones.forEach(function (icon) {
        icon.addEventListener("click", (event) => {
            console.log("test");
            
        });
    });
}

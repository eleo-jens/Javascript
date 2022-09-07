const html_form = document.getElementById("form_select");
const html_input1 = document.getElementById("input1");
const html_input2 = document.getElementById("input2");
const html_show = document.getElementById("show");
const html_forme = document.getElementById("forme");

const hiddeAllInputs = function () {
    html_forme.classList.add("hidden");
}

const showInputs = function () {
    html_forme.classList.remove("hidden");
    let html_labels = document.querySelectorAll('#forme label'); 
    switch (html_form.value) {
        case "rectangle":
            document.querySelector("div#forme>h2").innerText = "Rectangle";
            html_labels[0].innerText = "Hauteur : ";
            html_labels[1].innerText = "Largeur : ";
            document.querySelector("form >div:last-child").classList.remove("hidden");
            break;
        case "triangle":
            document.querySelector("div#forme>h2").innerText = "Triangle";
            html_labels[0].innerText = "Hauteur : ";
            html_labels[1].innerText = "Base : ";
            document.querySelector("form >div:last-child").classList.remove("hidden");
            break;
        case "carre":
            document.querySelector("div#forme>h2").innerText = "Carré";
            html_labels[0].innerText = "Côté: ";
            document.querySelector("form >div:last-child").classList.add("hidden");
            break;
        case "cercle":
            document.querySelector("div#forme>h2").innerText = "Cercle";
            html_labels[0].innerText = "Rayon: ";
            document.querySelector("form >div:last-child").classList.add("hidden");
            break;
        default:
            throw new Error(`Bad choice...`)
    }
}

const Calculer = function () {
    let surface;
    let perimeter;
    let input1 = parseFloat(html_input1.value);
    let input2 = parseFloat(html_input2.value);
    switch (html_form.value) {
        case "rectangle":
            surface = rect_surface(input1, input2);
            perimeter = rect_perimeter(input1, input2);
            html_show.innerText = `Un rectangle de largeur ${input2} et d'une hauteur ${input1}, \na un périmètre de ${perimeter} et une surface de ${surface}.`
            break;
        case "triangle":
            surface = tri_surface(input1, input2);
            perimeter = tri_perimeter(input1, input2);
            html_show.innerText = `Un rectangle de base ${input2} et d'une hauteur ${input1}, \na un périmètre de ${perimeter} et une surface de ${surface}.`
            break;
        case "carre":
            surface = carre_surface(input1);
            perimeter = carre_perimeter(input1);
            html_show.innerText = `Un carré ayant pour côté ${input1}, \na un périmètre de ${perimeter} et une surface de ${surface}.`
            break;
        case "cercle":
            surface = cercle_surface(input1);
            perimeter = cercle_perimeter(input1);
            html_show.innerText = `Un cercle ayant pour rayon ${input1}, \na un périmètre de ${perimeter} et une surface de ${surface}.`
            break;
        default:
            throw new Error(`Bad choice...`)
            break;
    }
}

hiddeAllInputs();
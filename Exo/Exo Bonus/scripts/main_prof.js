const html_form = document.getElementById("form_select");
const html_rectangle_hauteur = document.getElementById("rectangle_hauteur");
const html_rectangle_largeur = document.getElementById("rectangle_largeur");
const html_triangle_base = document.getElementById("triangle_base");
const html_triangle_hauteur = document.getElementById("triangle_hauteur");
const html_carre_cote = document.getElementById("carre_cote");
const html_cercle_rayon = document.getElementById("cercle_rayon");
const html_show = document.getElementById("show");
const html_rect = document.getElementById("rect");
const html_tri = document.getElementById("tri");
const html_car = document.getElementById("car");
const html_cer = document.getElementById("cer");

const hiddeAllInputs = function () {
    html_rect.classList.add("hidden");
    html_tri.classList.add("hidden");
    html_car.classList.add("hidden");
    html_cer.classList.add("hidden");
}

const showInputs = function () {
    hiddeAllInputs();
    switch (html_form.value) {
        case "rectangle":
            html_rect.classList.remove("hidden");
            break;
        case "triangle":
            html_tri.classList.remove("hidden");
            break;
        case "carre":
            html_car.classList.remove("hidden");
            break;
        case "cercle":
            html_cer.classList.remove("hidden");
            break;
        default:
            throw new Error(`Bad choice...`)
    }
}

const Calculer = function () {
    let surface;
    let perimeter;
    switch (html_form.value) {
        case "rectangle":
            let r_hauteur = parseFloat(html_rectangle_hauteur.value);
            let r_largeur = parseFloat(html_rectangle_largeur.value);
            surface = rect_surface(r_hauteur, r_largeur);
            perimeter = rect_perimeter(r_hauteur, r_largeur);
            html_show.innerText = `Un rectangle de largeur ${r_largeur} et d'une hauteur ${r_hauteur}, \na un périmètre de ${perimeter} et une surface de ${surface}.`
            break;
        case "triangle":
            let t_hauteur = parseFloat(html_triangle_hauteur.value);
            let t_base = parseFloat(html_triangle_base.value);
            surface = tri_surface(t_hauteur, base);
            perimeter = tri_perimeter(t_hauteur, base);
            html_show.innerText = `Un rectangle de base ${t_base} et d'une hauteur ${t_hauteur}, \na un périmètre de ${perimeter} et une surface de ${surface}.`
            break;
        case "carre":
            let cote = parseFloat(html_carre_cote.value);
            surface = carre_surface(cote);
            perimeter = carre_perimeter(cote);
            html_show.innerText = `Un carré ayant pour côté ${cote}, \na un périmètre de ${perimeter} et une surface de ${surface}.`
            break;
        case "cercle":
            let rayon = parseFloat(html_cercle_rayon.value);
            surface = cercle_surface(rayon);
            perimeter = cercle_perimeter(rayon);
            html_show.innerText = `Un cercle ayant pour rayon ${rayon}, \na un périmètre de ${perimeter} et une surface de ${surface}.`
            break;
        default:
            throw new Error(`Bad choice...`)
            break;
    }
}

hiddeAllInputs();
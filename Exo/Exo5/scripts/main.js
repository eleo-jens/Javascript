let aire;
let perimetre;
const html_show_aire = document.getElementById("show_aire");
html_show_aire.value = "";
const html_show_perimetre = document.getElementById("show");
html_show_perimetre.value = "";

const Calculer = function () {
    let form = document.getElementById("form_select").value;
    switch (form) {
        case "rectangle":
            const html_rectangle_hauteur = document.getElementById("rectangle_hauteur");
            const html_rectangle_largeur = document.getElementById("rectangle_largeur");
            aire = parseFloat(html_rectangle_hauteur.value) * parseFloat(html_rectangle_largeur.value);
            perimetre = (parseFloat(html_rectangle_hauteur.value) + parseFloat(html_rectangle_largeur.value)) * 2;
            break;
        case "triangle":
            const html_triangle_base = document.getElementById("triangle_base");
            const html_triangle_hauteur = document.getElementById("triangle_hauteur");
            aire = (parseFloat(html_triangle_base.value) * parseFloat(html_triangle_hauteur.value)) / 2;
            perimetre = (parseFloat(html_triangle_base.value) + parseFloat(html_triangle_hauteur.value)) * 2;
            break;
        case "carre":
            const html_carre_cote = document.getElementById("carre_cote");
            aire = parseFloat(html_carre_cote.value) * parseFloat(html_carre_cote.value);
            perimetre = 4 * parseFloat(html_carre_cote.value);
            break;
        case "cercle":
            const html_cercle_rayon = document.getElementById("cercle_rayon");
            aire = Math.PI * parseFloat(html_cercle_rayon.value) * parseFloat(html_cercle_rayon.value);
            perimetre = 2 * Math.PI * parseFloat(html_cercle_rayon.value);
            break;
    }
    html_show_aire.value = `Aire = ${aire}`;
    html_show_perimetre.value = `Périmètre =  ${perimetre}`;
}
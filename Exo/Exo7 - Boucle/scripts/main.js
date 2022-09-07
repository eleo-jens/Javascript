const RANGE_MIN = 0;
const RANGE_MAX = 255;
const html_red = document.getElementById("redRange");
const html_green = document.getElementById("greenRange");
const html_blue = document.getElementById("blueRange");
let result;
const html_tr = document.querySelector("tr");

if (!html_red) throw new Error(`There is no red color...`)
else if (!html_green) throw new Error(`There is no green color...`)
else if (!html_blue) throw new Error(`There is no blue color...`)
else {
    html_blue.min = RANGE_MIN;
    html_blue.max = RANGE_MAX;
    html_green.min = RANGE_MIN;
    html_green.max = RANGE_MAX;
    html_blue.min = RANGE_MIN;
    html_blue.max = RANGE_MAX;
}

const Start = function () {
    result = `rgb(${html_red.value},${html_green.value},${html_blue.value})`;
    console.log(result)
    let step_red = parseInt(html_red.value) / 9;
    let step_green = parseInt(html_green.value) / 9;
    let step_blue = parseInt(html_blue.value) / 9;

    html_tr.innerHTML = "";
    for (let i = 0; i < 10; i++) {
        html_tr.innerHTML += `<td><div class="color"></div></td>`;
        let td = document.querySelector("table td:last-child"); //le nouveau crée sera le dernier, recupère le dernier enfant
        td.style.backgroundColor = `rgb(${Math.round(step_red*i)},${Math.round(step_green*i)},${Math.round(step_blue*i)})`
    }
    // const colors = document.querySelectorAll(".color");
    // console.dir(colors);
    // colors[0].style.backgroundColor = "rgb(0,0,0)";


    // for (let i = 9; i > 0; i--) {
    //     colors[i].style.backgroundColor = "rgb(${html_red.value},${html_green.value},${html_blue.value})";
    //     html_red.value -= step_red;
    //     html_green.value -= step_green;
    //     html_blue.value -= step_blue;
    // }
}


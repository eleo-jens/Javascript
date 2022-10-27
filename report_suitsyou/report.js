import myJson from './report.json' assert {type: 'json'};

// let results_object = JSON.parse(localStorage.getItem("results"));

let results_object = {
    'web': 2,
    'wad': 4,
    'game': 2,
    'data': 3
}

let sorted_results = Object.keys(results_object).sort(function(a,b){return results_object[b]-results_object[a]});
// console.log(sorted_results[0]);

console.log(results_object[sorted_results[0]]);
console.log(results_object[sorted_results[1]]);
console.log(sorted_results.length);

if (results_object[sorted_results[0]] == results_object[sorted_results[1]]){
 // en cas d'égalité entre deux groupes ou plus: on affiche ninja
}
else if (results_object[sorted_results[0]] > results_object[sorted_results[1]]){
    let i = 0;
    while (i < sorted_results.length){
        if (sorted_results[0] == myJson.reports[i].code){
            console.log('sucess');
        }
        i++;
    }
}

console.log(myJson.reports);
console.log(myJson.reports[3].code);
console.log(myJson.reports[3].title);
console.log(myJson.reports[3].description);
console.log(myJson.reports[3].courses[0].name);
console.log(myJson.reports[3].courses[0].site);
console.log(myJson.reports[3].courses[0].url);

const chart = document.getElementById('myChart');

const myChart = new Chart(chart, {
    type: 'doughnut',
    data: {
        labels: [
            'Web Designer',
            'Back End Developer',
            'Game Developer',
            'Data Analyst'
        ],
        datasets: [{
            label: 'Your Carrer Path',
            data: [results_object.web, results_object.wad, results_object.game, results_object.data],
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)',
                'rgb(0, 205, 86)'
            ],
            hoverOffset: 4
        }]
    },
});
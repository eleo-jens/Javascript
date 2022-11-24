// http://ws.audioscrobbler.com/2.0/?method=artist.getSimilar&api_key=5a5126404decea0776f97b334975db8a

fetch("http://www.last.fm/api/auth/?api_key=5a5126404decea0776f97b334975db8a")
    .then((response) => response.json())
    .then((data) => console.log(data));

// let api_signature = md5("api_keyV5a5126404decea0776f97b334975db8amethodauth.getSessiontoken");

// fetch("http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=V5a5126404decea0776f97b334975db8a&format=json ")
//     .then((response) => response.json())
//     .then((data) => console.log(data));
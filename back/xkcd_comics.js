
//make get request for info from xkcd api


const options = {method: 'GET',headers: {Accept: 'application/json', 'Content-Type': 'application/json'}, 'Access-Control-Allow-Origin':'*'};
const data  = fetch('https://shy-puce-magpie-veil.cyclic.app/getcomic', options)
.then(response => {
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.text(); // Get response body as plain text
    })
    .then(text => {
    // Handle the decoded text
    console.log(text);
    var image = document.getElementById("comic");
    image.src = text
    })
    .catch(error => {
    // Handle any errors that occurred during the fetch request
    console.error(error);
    });

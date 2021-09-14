const fox_result = document.getElementById('fox-result')
const dog_result = document.getElementById('dog-result')
const fox_button = document.getElementById('fox-button')
const dog_button = document.getElementById('dog-button')
const imageFox = document.querySelector('.img-fox')
const imageDog = document.querySelector('.img-dog')


function getRandomFox() {
    fetch('https://randomfox.ca/floof/')
    .then(resp => resp.json())
    .then(data => {
        imageFox.src = data.image;
        // fox_result.innerHTML = `<img src=${data.image}`
    })
    .catch(function(){
        console.log("Nie dziala");
    })
}


function getRandomDog() {
    fetch('https://random.dog/woof.json')
    .then(resp => resp.json())
    .then(data => {
        if(data.url.includes('.mp4')) {
            getRandomDog()
        } else {
            imageDog.src = data.url;
        }
        
    })
    .catch(error => {
        console.log(error);
      });
}
fox_button.addEventListener('click', getRandomFox)
dog_button.addEventListener('click', getRandomDog)
// cat_button.addEventListener('click', getRandomCat)
// dog_button.addEventListener('click', getRandomDog)

// function getRandomCat() {
//     fetch('https://random.dog/woof.json')
//     .then(resp => {return resp.json()})
//     .then(data => {
//         cat_result.innerHTML = `<img src =${data.url}/>`
//     })
// }


// function getRandomDog() {
//     fetch('https://randomfox.ca/floof/')
//     .then(resp => resp.json())
//     .then(data => {
        // dog_result.innerHTML = `<img src=${data.link}/>`
//     })
// }
const DOG_URL = "https://dog.ceo/api/breeds/image/random";
const doggos = document.getElementById("dog-target");

function addNewDoggo() {
  const promise = fetch(DOG_URL);
  promise
    .then(function (response) {
    const processingPromise = response.text();
    return processingPromise;
  })
    .then(function (processedResponse) {
    const dogObject = JSON.parse(processedResponse);
    const img = document.createElement("img");
    img.src = dogObject.message;
    img.alt = "Cute doggo";
    img.style.maxWidth = "100vw";
    img.style.height = "auto";

    const oldImg = doggos.querySelector("img");
    if (oldImg) {
      doggos.removeChild(oldImg);
    }
    
    doggos.appendChild(img);
    
  });
}

document.getElementById("dog-btn").addEventListener("click", addNewDoggo);
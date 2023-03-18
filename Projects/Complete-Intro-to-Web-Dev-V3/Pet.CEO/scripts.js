const dogURL = "https://dog.ceo/api/breeds/image/random";
const catURL = "https://api.thecatapi.com/v1/images/search";
const animalBtn = document.getElementById("animal-btn");
const animalTarget = document.getElementById("animal-target");
const animalSelect = document.getElementById("animal-select");

function addNewAnimal() {
  let animalURL;
  if (animalSelect.value === "dog") {
    animalURL = dogURL;
  } else {
    animalURL = catURL;
  }
  const promise = fetch(animalURL);
  promise
    .then(function (response) {
    const processingPromise = response.text();
    return processingPromise;
  })
    .then(function (processedResponse) {
    let animalObject;
    if (animalSelect.value === "dog") {
      animalObject = JSON.parse(processedResponse);
      animalObject = animalObject.message;
    } else {
      animalObject = JSON.parse(processedResponse)[0].url;
    }
    const img = document.createElement("img");
    img.src = animalObject;
    img.alt = "Cute animal";
    img.style.objectFit = "contain";
    img.style.width = "100vw";
    img.style.height = "100vh";

    const oldImg = animalTarget.querySelector("img");
    if (oldImg) {
      animalTarget.removeChild(oldImg);
    }
    
    animalTarget.appendChild(img);
    
  });
}

animalBtn.addEventListener("click", addNewAnimal);
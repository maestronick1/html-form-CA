const resultDiv = document.querySelector("#results");

new URLSearchParams(window.location.search).forEach((value, name) =>{
console.log(name);
console.log(value);
let nameElement = document.createElement('p')
let valueElement = document.createElement('p')

// nameElement.textContent = name;
// valueElement.textContent = value;
// console.log(nameElement, valueElement)
let resultELement = document.createElement("p");
resultELement.textContent = name + " " + value;

resultDiv.appendChild(resultELement);
// resultDiv.appendChild(nameElement);
// resultDiv.appendChild(valueElement);
})

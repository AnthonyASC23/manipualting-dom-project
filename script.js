let box = document.getElementById("p-div");
let addParagraph = document.getElementById("p-button");
let box2 = document.getElementById("img-div");
let addImg = document.getElementById("img-button");


addParagraph.addEventListener('click', function () {
    let newParagraph = document.createElement('p');
    newParagraph.style.backgroundColor = 'white';
    newParagraph.textContent = 'Hot chocolate is bad today';

    box.appendChild(newParagraph);
    box.style.display = 'block';
    box2.style.display = 'none';
})


addImg.addEventListener('click', function () {
    let newImg = document.createElement('img');
    newImg.src = "images/banana.jpg";
    newImg.style.width = '200px';
    newImg.style.height = '150px';

    box2.appendChild(newImg);
    box2.style.display = 'block';
    box.style.display = 'none';
})



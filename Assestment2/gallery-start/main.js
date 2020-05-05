const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Looping through images */
let arrImg = [];
arrImg.push("images/pic1.jpg")
arrImg.push("images/pic2.jpg")
arrImg.push("images/pic3.jpg")
arrImg.push("images/pic4.jpg")
arrImg.push("images/pic5.jpg")

for (var i = 0; i < 5; i++) {

const newImage = document.createElement('img');
newImage.setAttribute('src', arrImg[i],);
thumbBar.appendChild(newImage);
newImage.onclick = function(e) {
displayedImage.src = e.target.src;
};
}



/* Wiring up the Darken/Lighten button */

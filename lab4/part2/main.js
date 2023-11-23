const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const images = ["pic1.jpg", "pic2.jpg", "pic3.jpg", "pic4.jpg", "pic5.jpg"]

const altText = {
    "pic1.jpg": "Blue eye",
    "pic2.jpg": "Rock that looks like a wave",
    "pic3.jpg": "Purple and white flowers",
    "pic4.jpg": "Egyptian pharohs",
    "pic5.jpg": "Monarch butterfly"
}



/* Declaring the alternative text for each image file */

/* Looping through images */

const newImage = document.createElement('img');
newImage.setAttribute('src', xxx);
newImage.setAttribute('alt', xxx);
thumbBar.appendChild(newImage);

/* Wiring up the Darken/Lighten button */
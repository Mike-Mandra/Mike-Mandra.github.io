const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const images = ["pic1.jpg", "pic2.jpg", "pic3.jpg", "pic4.jpg", "pic5.jpg"]


/* Declaring the alternative text for each image file */
const altText = {
    "pic1.jpg": "Blue eye",
    "pic2.jpg": "Rock that looks like a wave",
    "pic3.jpg": "Purple and white flowers",
    "pic4.jpg": "Egyptian pharohs",
    "pic5.jpg": "Monarch butterfly"
}

/* Looping through images */
for (counter = 0; counter < images.length; counter++) 
{
    const imgElement = document.createElement("img");
    imgElement.src = images[counter];
    imgElement.alt = altText[images[counter]]
    thumbBar.appendChild(imgElement);
}

const newImage = document.createElement('img');
newImage.setAttribute('src', xxx);
newImage.setAttribute('alt', xxx);
thumbBar.appendChild(newImage);

/* Wiring up the Darken/Lighten button */

const myHeading = document.querySelector("h1");
myHeading.textContent = "Hello world!";

const myImage = document.querySelector("img");

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "images/PictureForWebsite.jpg") {
      myImage.setAttribute("src", "images/SoftwareDeveloper2.jpg");
    } else {
      myImage.setAttribute("src", "images/PictureForWebsite.jpg");
    }
  };

let myButton = document.querySelector("button");
let userName = document.querySelector("h1");

function setUserName() {
    let myName = prompt("Please enter your name.");
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem("name", myName);
      myHeading.textContent = `Road map to becoming a software developer, ${myName}`;
    }
  }
  

  if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Roadmap to becoming a software developer, ${storedName}`;
  }

  myButton.onclick = () => {
    setUserName();
  };
  

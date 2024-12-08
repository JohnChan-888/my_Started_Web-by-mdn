const myImage = document.querySelector("img");
myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "images/my-gopherize1.png") {
      myImage.setAttribute("src", "images/my-gopherize2.png");
    } else {
      myImage.setAttribute("src", "images/my-gopherize1.png");
    }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
function setUserName() {
    const myName = prompt("Please enter your name.");
    if(!myName){
        setUserName();
    }else{
        localStorage.setItem("name", myName);
        myHeading.textContent = `Welcome to my site ${myName}`;
    }
}
if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Welcome to my site ${storedName}`;
}
myButton.onclick = function () {
    setUserName();
  };
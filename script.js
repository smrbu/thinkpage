const paragraph = document.getElementById("myI");
const myButton = document.getElementById("myButton");
const myText = document.getElementById("myText");

function writeParagraph() {
    paragraph.innerText = myText.value;
}

myButton.addEventListener("click", writeParagraph);

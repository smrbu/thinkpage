const paragraph = document.getElementById("myI");
const myButton = document.getElementById("myButton");
const myText = document.getElementById("myText");

function writeParagraph() {
    paragraph.innerText = myText.value;
}

myButton.addEventListener("click", writeParagraph);

myText.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
     event.preventDefault();
     myButton.click();
    }
});

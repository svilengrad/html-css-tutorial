document.onkeydown = checkKey;

function checkKey(e) {
    if(e.keyCode == 37) {
        console.log("You pressed the left arrow");
    } else {
        console.log("You pressed unknown key");
    }
}

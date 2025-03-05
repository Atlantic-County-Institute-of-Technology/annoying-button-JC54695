const button1 = document.getElementById("button1");
let text = document.getElementById("text")

let clicks = 0;

button1.addEventListener("click", annoy )




function annoy() {
    clicks++;
    console.log(clicks)
    if( clicks == 1 ) {
        text.innerHTML = "Hey! Stop That!";
    }
    else if( clicks == 5) {
        text.innerHTML = "I said STOP!";
    }
    else if( clicks == 10) {
        text.innerHTML = "This isn't funny. Please stop."
    }
    else if( clicks == 11) {
        text.innerHTML = "I have your family..."
    }
    else if( clicks == 12) {
        text.innerHTML = "Alright now stop!"
    }
    else if(clicks == 15) {
        text.innerHTML = "Here click my friend instead!"
    }
}


const button1 = document.getElementById("button1");
const buttonContainer = document.getElementById("buttonContainer")
let text = document.getElementById("text")
const button2 = document.createElement("button");

let clicks = 0;

buttonContainer.addEventListener("click", annoy)
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
else if (clicks == 15) {
        text.innerHTML="Now I'm really ANGRY!"
        button1.classList.add("angry");

    }
    else if (clicks == 20){
        button1.classList.remove("angry");
        text.innerHTML="Want to see a Magic Trick?"


    }

    else if(clicks == 25) {
        text.innerHTML="BOOM! Get them Jimmy..."
        button2.innerHTML = "Jimmy";
        button2.classList.add("button1");
        button2.classList.add("button2");
        buttonContainer.appendChild(button2);
    }

    else if(clicks == 30) {
        text.innerHTML="Oh you can't click Jimmy? Unfortunate lol"

    }
    else if(clicks == 38) {
        text.innerHTML="Jimmy: Cough... Cough"
    }

    else if(clicks == 40) {
        text.innerHTML="Jimmy you can help me right?"

    }

    else if(clicks == 42) {
        text.innerHTML="Jimmy: Dude it's my Mom's Birthday, I'm sorry."

    }

    else if(clicks == 44) {
        text.innerHTML="I hate you Jimmy..."
        button2.classList.remove("button1");
        button2.classList.remove("button2");
        buttonContainer.removeChild(button2);

    }

    else if(clicks == 48) {
        text.innerHTML="Anyways try catching me"
        button1.classList.add("rotate");

    }

    else if(clicks == 49) {
        button1.classList.remove("rotate");
        text.innerHTML="You cheated! Stupid user!"
    }

    else if(clicks == 53) {
        text.innerHTML="Thats IT...its time for my best move!"
    }

    else if(clicks == 56) {
        text.innerHTML="Heh...Try clicking me now...(Hint: try clicking around the page)"
        button1.classList.add("invis");
    }
    
    else if(clicks == 57) {
        text.innerHTML="Nope Not there!"
        button1.classList.add("invis1");
    }

    else if(clicks == 59) {
        text.innerHTML="STOP CHEATING!!!"
        button1.classList.remove("invis");
        button1.classList.remove("invis1");
    }
}



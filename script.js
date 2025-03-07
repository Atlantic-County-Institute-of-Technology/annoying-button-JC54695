/* All of these consts and lets are used to link my HTML elements to my JS*/

const button1 = document.getElementById("button1");
const buttonContainer = document.getElementById("buttonContainer");
let text = document.getElementById("text");
const button2 = document.createElement("button");
let text1 = document.getElementById("text1");
/* yip is for an audio file */
let yip = new Audio('yip.mp3');
let clicks = 0;

/* addEventListeners are used to add events to certain elements */
buttonContainer.addEventListener("click", annoy)
button1.addEventListener("click", annoy )



/* This is where all the magic happens. It is a huge else if chain full of all the functions and commands I want my button to do */

function annoy() {
    clicks++;
    console.log(clicks)
    if( clicks == 1 ) {
        text.innerHTML = "Hey! Stop That!";
    }
    else if( clicks == 8) {
        text.innerHTML = "I said STOP!";
    }
    else if( clicks == 12) {
        text.innerHTML = "This isn't funny. Please stop."
    }
    else if( clicks == 14) {
        text.innerHTML = "I have your family..."
    }
    else if( clicks == 17) {
        text.innerHTML = "Alright now stop!"
    }
else if (clicks == 20) {
        text.innerHTML="Now I'm really ANGRY!"
        button1.classList.add("angry");

    }
    else if (clicks == 25){
        button1.classList.remove("angry");
        text.innerHTML="Nevermind..Want to see a Magic Trick?"


    }

    else if(clicks == 30) {
        text.innerHTML="BOOM! Get them Jimmy..."
        button2.innerHTML = "Jimmy";
        button2.classList.add("button1");
        button2.classList.add("button2");
        buttonContainer.appendChild(button2);
    }

    else if(clicks == 35) {
        text.innerHTML="Oh you can't click Jimmy? Unfortunate lol"

    }
    else if(clicks == 42) {
        text.innerHTML="Jimmy: Cough... Cough"
    }

    else if(clicks == 45) {
        text.innerHTML="Jimmy you can help me right?"

    }

    else if(clicks == 48) {
        text.innerHTML="Jimmy: Dude it's my Mom's Birthday, I'm sorry."

    }

    else if(clicks == 52) {
        text.innerHTML="I hate you Jimmy..."
        button2.classList.remove("button1");
        button2.classList.remove("button2");
        buttonContainer.removeChild(button2);

    }

    else if(clicks == 57) {
        text.innerHTML="Anyways try catching me"
        button1.classList.add("rotate");

    }

    else if(clicks == 60) {
        button1.classList.remove("rotate");
        text.innerHTML="You cheated! Stupid user!"
    }

    else if(clicks == 64) {
        text.innerHTML="Thats IT...its time for my best move!"
    }

    else if(clicks == 68) {
        text.innerHTML="Heh...Try clicking me now...(Hint: try clicking around the page)"
        button1.classList.add("invis");
    }
    
    else if(clicks == 70) {
        text.innerHTML="Nope Not there!"
        button1.classList.add("invis1");
    }

    else if(clicks == 71) {
        text.innerHTML="STOP CHEATING!!!"
        button1.classList.remove("invis");
        button1.classList.remove("invis1");
    }
    else if(clicks == 74) {
        text.innerHTML="Cough...Please User..I'm Begging you. Stop Clicking"
    }
    else if(clicks == 78) {
        text.innerHTML="I'm going to start dying unless you stop clicking!"
    }
    else if(clicks == 85) {
        text.innerHTML="NO NO NO STOP!"
        button1.classList.add("dis1")
    }
    else if(clicks == 92) {
        text.innerHTML="IT HURTS!!! STOPPP!"
        button1.classList.add("dis2")
    }
    else if(clicks == 95) {
        text.innerHTML="AHHHHHHHHH"
        button1.classList.add("dis3")

    }
    else if(clicks == 100) {
        text.innerHTML="Foolish User...You will never become Button Lord...(dies)"
        text1.innerHTML= "GOD SLAIN"
        yip.play();

    }

}



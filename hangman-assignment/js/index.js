/**
 För att toggla SVG:en
 document.querySelector('figure').classList.add('scaffold')
 document.querySelector('figure').classList.add('head')
 document.querySelector('figure').classList.add('body')
 document.querySelector('figure').classList.add('arms')
 document.querySelector('figure').classList.add('legs')

 */

let keyPressed = '';
let chosenWord = '';
let chosenWordArray = [];
const words = ['banana', 'sandwich', 'cheeseburger', 'helicopter', 'tsunami', 'rollercoaster', 'tornado',
'hangman', 'farmer', 'airplane', 'school'];
let unused = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
't', 'u', 'v', 'w', 'x', 'y', 'z'];
let used;
let ul;
let wrongGuessesLeft = 5;
let emptyLeft;
let lettersFound;

//Eventlyssnare för skrivbordsinput, endast engelska alfabetet stöds

 document.addEventListener('keydown', function(event) { 

    keyPressed = event.key;
    console.log(keyPressed);
    console.log(unused.indexOf(keyPressed));

    if(keyPressed == unused[unused.indexOf(keyPressed)]) {
        console.log(unused.splice(unused.indexOf(keyPressed),1));
        wordTracker();
    }
    else {
        console.log("This letter has already been used/not allowed.");
    }
});

document.addEventListener("DOMContentLoaded", function() {
    chosenWord = words[Math.floor(Math.random()*words.length)];
    console.log(chosenWord);
    wordBuilder();
  });



//Lägger in ordet i spelet
function wordBuilder() {
    ul = document.getElementById('word');;
    let word = document.createTextNode(chosenWord);
    let b = document.getElementById('b');
    b.appendChild(word);
    console.log("b equals: " + document.getElementsByTagName('b').innerHTML);
    for(let i = 0; i < chosenWord.length; i++) {
        let li = document.createElement('li');
        li.appendChild(document.createTextNode(' '));
        ul.appendChild(li);
        console.log('created');
    }
}

// Metoden som kollar gentemot sökta ordets bokstäver och byter ut HTML. 

function wordTracker() {
    let list = ul.getElementsByTagName('li');
    let correct = false;
    emptyLeft = 0;
    lettersFound = 0;
    for(let i = 0; i < chosenWord.length; i++) {
        
        if (chosenWord.charAt(i) == keyPressed) {
            list[i].innerHTML = keyPressed;
            console.log("Have swapped letter " + keyPressed);
            correct = true;

        }
        
    }

    for(let i = 0; i < chosenWord.length; i++) {
        if (list[i].innerHTML == ' ') {
            emptyLeft++;
            console.log("spaces found");

        } 
        else {
            lettersFound++;
            console.log("letters found");
        }
    }



    if (correct == false) {
        wrongGuessesLeft--;
        lives(wrongGuessesLeft);
        used = document.getElementById('nomatch');
        let li = document.createElement('li');
        li.appendChild(document.createTextNode(keyPressed));
        used.appendChild(li);
    }
    else  {
        correct == false;
    }

    if(emptyLeft == 0) {
        saveData();
        document.getElementById("game-won").style.display = "flex";
    }
}

//Switch som håller koll på liven

function lives(wrongGuessesLeft) {
    switch (wrongGuessesLeft) {
        case 4: 
            console.log("4 lives left.");
            document.querySelector('figure').classList.add('scaffold');
            break;
        case 3: 
            console.log("3 lives left.");
            document.querySelector('figure').classList.add('head');
            break;
        case 2: 
            console.log("2 lives left.");
            document.querySelector('figure').classList.add('body');
            break;
        case 1: 
            console.log("1 lives left.");
            document.querySelector('figure').classList.add('arms');
            break;
        case 0: 
            console.log("0 lives left.");
            document.querySelector('figure').classList.add('legs');
            document.getElementById("game-over").style.display = "flex";
            break;
    }
}

//Funktion som sparar poäng till en textfil.

function saveData() {

}


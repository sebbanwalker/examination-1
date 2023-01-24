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
let used = [];

 document.addEventListener('keydown', function(event) { 

    keyPressed = event.key;
    console.log(keyPressed);
    console.log(unused.indexOf(keyPressed));

    if(keyPressed == unused[unused.indexOf(keyPressed)]) {
        console.log(unused.splice(unused.indexOf(keyPressed),1));
    }
    else {
        console.log("This letter has already been used.");
    }
});

document.addEventListener("DOMContentLoaded", function() {
    chosenWord = words[Math.floor(Math.random()*words.length)];
    console.log(chosenWord);
    wordBuilder();
  });

function wordBuilder() {
    let ul = document.getElementById('word');
    for(let i = 0; i < chosenWord.length; i++) {
        let letter = i;
        let li = document.createElement('li');
        li.appendChild(document.createTextNode(' '));
        ul.appendChild(li);
        console.log('created');
    }
}

function letterCheck() {
    for(let i = 0; i < chosenWord.length; i++) {
        for (let j = 0; j < unused.length; j++) {
            if (chosenWord.charAt(i) == unused[j]) {
                let li = document.createElement('li');
                li.appendChild(document.createTextNode(unused[j]));
                ul.appendChild(li);
                console.log('swapped ' + unused[j]);
            }
        }
    }
}

function wordTracker() {
}


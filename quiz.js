let counter = 0;
let counter2 = 0;
let point = 0;
let stop = false;
let questionfill = document.getElementsByClassName("question");
let invis = document.getElementsByClassName("invisible");
let option = document.getElementsByClassName("option");
let formlength = questionfill.length;
let correctAnswerArr = Array(formlength);
let userAnswerArr = Array(formlength);

let as1 = document.getElementsByClassName("qs1");
let as2 = document.getElementsByClassName("qs2");
let as3 = document.getElementsByClassName("qs3");
let as4 = document.getElementsByClassName("qs4");


function random_question() {
    if (!stop) {
        document.querySelector(".start").classList.toggle("invisible1");
        stop = true;
    }

        //Toggle in the invisible elements
        // let invis = document.getElementsByClassName("invisible");
        invis[0].classList.toggle("invisible");

    if (counter < formlength) {
        //Randomly choose an operator with random variables
        let rndOperator = Math.round(Math.floor(Math.random() * 4));
        let A = (Math.floor(Math.random() * 100) + 1);
        let B = (Math.floor(Math.random() * 100) + 1);
        // let questionfill = document.getElementsByClassName("question");
        // let formlength = questionfill.length;
        let answer = 0;
        switch (rndOperator) {
            case 0:
                answer = (A / B);
                questionfill[counter].innerHTML = (`Question ${counter + 1}: ${A} / ${B} = ?`);
                break;
            case 1:
                answer = (A * B);
                questionfill[counter].innerHTML = (`Question ${counter + 1}: ${A} * ${B} = ?`);
                break;
            case 2:
                answer = (A - B);
                questionfill[counter].innerHTML = (`Question ${counter + 1}: ${A} - ${B} = ?`);
                break;
            case 3:
                answer = (A + B);
                questionfill[counter].innerHTML = (`Question ${counter + 1}: ${A} + ${B} = ?`);
                break;
        }

        /* let hello = "hello";
        let as1 = document.getElementsByClassName("qs1");
        as1[0].setAttribute('value', hello);
        as1[0].innerHTML = hello; */

        // let correctAnswerArr = Array(formlength);
        // let newEntry = correctAnswerArr.push(answer);

        //Saves the correct answer
        correctAnswerArr[counter] = answer;

        //Randomized the options/answers, 1 true 3 false
        let answers = [
            (`${answer}`),
            (`${(answer) - (Math.floor(Math.random() * 7) + 1)}`),
            (`${(answer) * (Math.floor(Math.random() * 1.2) + 0.8)}`),
            (`${(answer) + (Math.floor(Math.random() * 7) + 1)}`),
        ];

        //Shuffle array
        let array = [0, 1, 2, 3];
        let m = array.length, t, i;
        while (m) {
            i = Math.floor(Math.random() * m--);
            t = array[m];
            array[m] = array[i];
            array[i] = t;
        }

        //Use shuffled array to randomly assign the options/answers
        as1[counter].innerHTML = answers[array[0]];
        as2[counter].innerHTML = answers[array[1]];
        as3[counter].innerHTML = answers[array[2]];
        as4[counter].innerHTML = answers[array[3]];
        
        counter++;
        
    }
}
function Check() {
    let x = document.querySelectorAll("input[type='radio']:checked");
    
    document.querySelector(".formQuestions").classList.toggle("invisible");
    document.querySelector(".result").classList.toggle("invisible");

    for (let i = 0; i < x.length; i++) userAnswerArr[i] = parseInt(x[i].value);
    for (let i = 0; i < x.length; i++) {
        switch (userAnswerArr[i]) {
            case 1:
                userAnswerArr[i] = as1[i].innerHTML;
                break;
            case 2:
                userAnswerArr[i] = as2[i].innerHTML;
                break;
            case 3:
                userAnswerArr[i] = as3[i].innerHTML;
                break;
            case 4:
                userAnswerArr[i] = as4[i].innerHTML;
                break;
        }
        
    }
    for (let i = 0; i < formlength; i++) {
        if (userAnswerArr[i] == correctAnswerArr[i]) {
            point++;
        }
    }

    document.getElementById("results").innerHTML = "Correct answers: " + point;
if (point < 2) {
    document.getElementById("grade").innerHTML = "You got an F-";
}
else if (point >= 2 && point < 6) {
    document.getElementById("grade").innerHTML = "You got an F";
}
else if (point == 6) {
    document.getElementById("grade").innerHTML = "You got an E";
}
else if (point == 7) {
    document.getElementById("grade").innerHTML = "You got a D";
}
else if (point == 8) {
    document.getElementById("grade").innerHTML = "You got a C";
}
else if (point == 9) {
    document.getElementById("grade").innerHTML = "You got a B";
}
else if (point == 10) {
    document.getElementById("grade").innerHTML = "You got an A";
    }
}

function disable() {
    for (let index = 0; index < 4; index++) {
        option[counter2].disabled = true;
        counter2++;
    }
    random_question();
}

// function redo() {
//     document.querySelector(".result").classList.toggle("invisible");
//     document.querySelector(".formQuestions").reset();
//     random_question();
// }

/*
document.getElementsClassName("option").addEventlistener("click", unHide);

function unHide() {
    invis[0].classList.toggle("invisible");
}

console.log((Math.floor(Math.random() * 100) + 1) / (Math.floor(Math.random() * 100) + 1));
let rnd1 = (Math.floor(Math.random() * 100) + 1);
console.log(`${(Math.floor(Math.random() * 100) + 1)} / ${(Math.floor(Math.random() * 100) + 1)} = ?`);

let nodes = document.getElementsByClassName("question"),
    i, len;
    for (i = 0, len = nodes.length; i < len; i++) {
    nodes[i].innerHTML = "...";
}
console.log(`len ${len} i ${i}`);
 */
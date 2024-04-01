// Function
// 1. declaration
// function name(param,,) { body.. return}

function printHello() {
    console.log('Hello');
}
printHello();

function log(message) {
    console.log(message);
}
log('hello');
log(1234);

// 2. param
function changeName(obj) {
    obj.name = 'coder';
}
const ellie = {name : 'ellie'};
changeName(ellie);
console.log(eliie);

// 3. Default param(added in es6)
function showMessage(message, from = 'unknwon') {
    console.log(`${message} by ${from}`);
}
showMessage('hi');

// 4. Rest param(es6)
function printAll(...args) {
    for (let i = 0; i < args.length; i++) {
        console.log(args[i]);
    }
}
printAll('dream', 'coding');

// 5. local scope
let globalMessage = 'global';
function printMessage() {
    let message = 'hello';
    console.log(message);
    console.log(globalMessage);
}
printMessage();

//6. return value
function sum(a,b) {
    return a + b;
}
const result = sum(1,2);
console.log(`sum: ${sum(1,2)}`);

// 7. Early return, exit
// bad
function upgradeUser(user) {
    // if (user.point > 10) { 가독성 낮음
    if (user.point <= 10) {
        return; // 가독성 좋음
    }
}

// fist class function
// function expression
const print = function() { // 익명함수
    console.log('print');
}
print(); // 호이스팅이 됨.
const printAgain = print;
printAgain();

// callback
function randomQuiz(answer, printYes, printNo) {
    if (answer === 'love you') {
        printYes();
    } else {
        printNo();
    }
}

const printYes = function() {
    console.log('yes');
}
const printNo = function print() {
    console.log('no');
}
randomQuiz('wrong', printYes, printNo);

// Arow function / 매번 익명함수
const simplePrint = function () {
    console.log('simple print');
}

const simplePrint2 = () => console.log('simple2');

// IIFE
(function hello() {
    console.log('IIFE')
})();


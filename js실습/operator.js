// 1. String concatenation
console.log('my' + 'cat');
console.log('1' + 2);
console.log(`string literals: 1 + 2 = ${1 + 2}`);
console.log("elie's \n\tbook")

// 2.Numeric operation
console.log(1 + 1);
console.log(1 - 1);
console.log(1 / 1);
console.log(1 * 1);
console.log(5 % 2);
console.log(2 ** 3);

// 3. Increment and decrement op
let counter = 2;
const preIncrement = ++counter;
console.log(preIncrement);
const postIncrement = counter ++;
console.log(postIncrement);

// 4. Assignment op
let x = 3;
let y = 6;
x += y;
x -= y;
x *= y;
x /= y;

// 5. Comparison op
console.log(10 < 6);
console.log(10 <= 6);
console.log(10 > 6);
console.log(10 >= 6);

// 6. logical op
const value1 = false;
const value2 = 4 < 2;

console.log(`or: ${value1 || value2 || check()}`);
console.log(`and: ${value1 && value2 && check()}`);


function check() {
    for (let i = 0; i < 10; i++) {
        console.log('**');
    }
    return true;
}

console.log(!value1);

// 7. equal
const sFive = '5';
const nFive = 5;

// == convert를 수행
console.log(sFive == nFive);

// === no type convert / strict equal
console.log(sFive === nFive);

// object는 ref 주소를 저장
const eliie1 = { name : 'elie'}
const eliie2 = { name : 'elie'}
const ellie3 = ellie1;
console.log(eliie1 == eliie2);
console.log(eliie1 === eliie2);
console.log(eliie1 === ellie3);

console.log(0 == false); // t
console.log(0 === false); //f
console.log('' == false); //t
console.log('' === false); //f
console.log(null == undefined); //t
console.log(null === undefined); //f

// 8. if, else if, else
const name = 'ellie';
if (name === 'ellie') {
    console.log('welcome ellie');
} else if (name ==='coder') {
    console.log('you are coder');
} else {
    console.log('unkwnon');
}

console.log(name === 'ellie' ? 'yes' : 'no');

// 10. switch
const browser = 'IE';
switch (browser) {
    case 'IE':
        console.log('go');
        break;
    case 'Chrome':
        console.log('its crome');
        break
}

// 11. while
let i = 3;
while (i > 0) {
    console.log(`while ${i}`);
    i--;
}

// for loop
for (i = 3; i>0; i--) {
    console.log(`for: ${i}`);
}

// break 와 continue 차이



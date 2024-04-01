// 이상한 입력 방지
'use strict';
console.log('Hello World');

// 2. variable
// let (es6에 추가됨)
let globalName = 'global name';
{
    let name = 'ellie';
    console.log(name);
    name = 'hello';
    console.log(globalName);
    console.log(name);
}
console.log(name);
console.log(globalName);

// var는 쓰지않음. 선언전에 할당 및 출력이 가능하기 때문
// var hoisting(선언을 끌어올려줌)
// block scope를 무시함(위험)

// 3. constants 포인터가 잠김, 변경불가
// immutable
// 장점 : security, thread safty, reduce huma error

const daysInWeek = 7;
const maxNumber = 5;

// 4. variable types
// primitive(대부분의 싱글), objective(싱글단위를 묶어서 박스로 관리)
// function 또한 타입, first class function(변수 할등 및 인자 가능)
// let은 넘버를 나타낼때 다이나믹하게 타입이 결정됨

// number
const infinity = 1/0;
const negativeinfinity = -1/0;
const nAn = 'not a number' / 2
console.log(infinity);
console.log(negativeinfinity);
console.log(nAn);

// bigint
const bigInt = 12324231412323n;
console.log(bigInt);

// string
const char = 'c';
const greeting = 'hello' + char;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
// ``이용 편리

//boolean
//false:0, null ...
// true: any other, value
const test = 3<1; //false
console.log(`value: ${test}`);

// null
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

// undefined
let x;
console.log(`value: ${x}, type: ${typeof x}`);

// symbol
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2);
console.log(`value: ${symbol1.description}`);

// object, real-life object, data structure
const ellie = { name: 'ellie', age: 20};
// 다른 오브젝트로 할당 불가능, 요소는 변화 가능

// 5. dynamic typing 선언할때 타입을 선언하지 않고 런타임에 따라 달라짐
let text = 'hello';
console.log(text.charAt(0)); //h
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`);
text = '8' / '2'
console.log(`value: ${text}, type: ${typeof text}`);

console.log(text.charAt(0)); //error
// typescript의 탄생

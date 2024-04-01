'use strict';

// JavaScript is synchronous.
// execute the code block by orger after hoisting
// 호이스팅 : 함수 선언들이 자동적으로 제일 위로 올라가는 것
console.log('1');
setTimeout(() => {
    console.log('2')
}, 1000
);
console.log('2');
// 동기적 실행 <-> 비동기적 실행(언제 실행될 지 모름)

// synchronous callback
function printImmediatly(print) {
    print();

}
printImemdiatly(() => console.log('hello'));
// asynchronous callback
function printWithDelay(print, timeout) {
    setTimeout(print, timeout);
}
printWithDelay(() => console.log('async callback'), 2000);


// callback hell example
class UserStorage {
    loginUser(id, password, onSuccess, onError) {
      setTimeout(() => {
        if (
          (id === 'ellie' && password === 'dream') ||
          (id === 'coder' && password === 'academy')
        ) {
          onSuccess(id);
        } else {
          onError(new Error('not found'));
        }
      }, 2000);
    }
  
    getRoles(user, onSuccess, onError) {
      setTimeout(() => {
        if (user === 'ellie') {
          onSuccess({ name: 'ellie', role: 'admin' });
        } else {
          onError(new Error('no access'));
        }
      }, 1000);
    }
  }
  
  const userStorage = new UserStorage();
  const id = prompt('enter your id');
  const password = prompt('enter your passrod');
  userStorage.loginUser(
    id,
    password,
    user => {
      userStorage.getRoles(
        user,
        userWithRole => {
          alert(
            `Hello ${userWithRole.name}, you have a ${userWithRole.role} role`
          );
        },
        error => {
          console.log(error);
        }
      );
    },
    error => {
      console.log(error);
    }
  );



'use strict';
let n = +prompt('Скільки чисел послідовності ви хочете дізнатися?');

let fib = n => {
    return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}
for (let i = 1; i <= n; i++) {
    console.log(fib(i));
}
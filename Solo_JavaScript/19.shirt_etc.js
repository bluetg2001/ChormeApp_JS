// shirt 배열의 맨 앞에 있는 원소를 빼낸다.

const numbers = [10,20,30,40];

const value = numbers.shift();
console.log(value);

console.log("");
console.log("------구분선------");
console.log("");

// pop 배열의 맨 뒤에 있는 원소를 빼낸다.

const numbers2 = [10,20,30,40];

const value2 = numbers2.pop();
console.log(value2);
console.log(numbers2);

console.log("");
console.log("------구분선------");
console.log("");

// unshirt 원소를 맨 앞으로 추가 , 맨 뒤는 push

const numbers3 = [10,20,30,40];
numbers3.unshift(5);
console.log(numbers3);

console.log("");
console.log("------구분선------");
console.log("");

// concat 배열 두 개를 합친다.

const arr1 = [1,2,3];
const arr2 = [4,5,6];

const concated = arr1.concat(arr2);
console.log(concated); // 기존의 배열은 건들지 않는다.

console.log("");
console.log("------구분선------");
console.log("");

// join 배열안의 원소간의 공백의 표시를 지정하고 문자열로 재구성
const array = [1,2,3,4,5];
console.log(array.join());
console.log(array.join(''));
console.log(array.join(', '))

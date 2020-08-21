// splice 배열의 특정 원소를 제거할 때 사용

const numbers = [10,20,30,40];
const index = numbers.indexOf(30);
const spliced = numbers.splice(index,2); // index부터 2개 지우겠다.
console.log(spliced);
console.log(numbers);

console.log("");
console.log("------구분선------");
console.log("");

const numbers2 = [10,20,30,40];

const sliced = numbers2.slice(0,2); // [0] 이상 [2] 미만
console.log(sliced);
console.log(numbers2); // 기존 배열은 건들지 않는다.
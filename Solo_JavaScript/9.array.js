const array = [1, 'blabla', {}, 4];
console.log(array[0]);

// 객체로 이루어진 배열
const objects = [{name: '멍멍이'}, {name: '야옹이'}];
console.log(objects);
console.log(objects[0]);

console.log("-------구분선-------");


// 배열의 새로운 항목 추가
objects.push({name: 'ajdanddl'});
console.log(objects);

console.log("-------구분선-------");

// 배열의 크기 조회
console.log(objects.length);
// 배열 안의 원소를 변환 (map)

const array = [1,2,3,4,5,6,7,8];

const squared = [];
for(let i = 0; i < array.length; i++) {
    squared.push(array[i] * array[i]);
}

console.log(squared);

console.log("");
console.log("------구분선------");
console.log("");

//map 활용

const square = n => n * n; // 화살표 함수이다.
const squared2 = array.map(square);

console.log(squared2)
 
const items = [
  {
      id: 1,
      text: 'hello'
  },
  {
      id: 2,
      text: 'bye'
  }
];

//배열 안에 객체 중 텍스트만 뽑아서 배열을 생성
const texts = items.map(item => item.text);
console.log(texts);
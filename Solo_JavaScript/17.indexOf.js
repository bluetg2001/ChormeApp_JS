// 특정 항목이 배열의 몇번째 원소인지

const superheroes = ['아이언맨', '캡틴 아메리카', '토르', '닥터 스트레인지'];
const index = superheroes.indexOf('토르');
console.log(index);

console.log("");
console.log("------구분선------");
console.log("");

const todos = [
    {
        id: 1,
        text: '자바 스크립트 입문',
        done: true,
   },

   {
       id: 2,
       text: '함수 배우기',
       done: true,
   },

   {
       id: 3,
       text: '객체와 배열 배우기',
       done: true,
   },

   {
       id: 4,
       text: '배열 내장함수 배우기',
       done: false,
   },
]

// 찾고자 하는 것이 객체인 경우에는 findIndex를 사용
const index2 = todos.findIndex(todo => todo.id === 3)
console.log(index);

console.log("");
console.log("------구분선------");
console.log("");

const todo = todos.find(todo => todo.id === 3)
console.log(todo);

const todo2 = todos.find(todo => todo.done === false)
console.log(todo2);

console.log("");
console.log("------구분선------");
console.log("");


// 특정 값의 원소만 추출할때 filter 사용

const taskNotDone = todos.filter(todo => todo.done === false);
console.log(taskNotDone);

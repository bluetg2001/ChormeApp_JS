function add(a,b) {
    return a+b;
}

const sum = add(1,2);

console.log(sum);

function hello(name) {
    return `Hello ${name}`;
}

const result = hello('velopert');
console.log(result);

//  연습

function getGrade(score) {
if(score === 100) {
    return 'A+';
} else if (score >= 90) {
    return 'A'
}

}

const grade = getGrade(100);
console.log(grade);

// 화살표 함수

const add2 = (a,b) => {
    return a+b;
}

const sum2 = add2(1,2);
console.log(sum);

const hello2 = (name) => {
    console.log(`Hello, ${name}!`);
}

hello2('velopert');
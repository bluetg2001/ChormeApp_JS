const numbers = [1,2,3,4,5];

let sum = 0;
numbers.forEach(n => {
    sum += n;
});

console.log(sum);

// reduce는 위의 코딩을 한줄로 줄일 수 있다.

const sum2 = numbers.reduce((accumlator, current) => accumlator + current, 0);
console.log(sum);

// current는 각 원소를 하나씩 가리킨다. 마지막 0은 초기값

console.log("");
console.log("------구분선------");
console.log("");

//평균 구하기
const avg = numbers.reduce((accumlator, current, index, array) => {
    if(index === array.length -1) {
        return (accumlator + current) / array.length;
    }
    return accumlator + current;
}, 0);
console.log(avg);
// accumlator는 0부터 시작, current는 각 원소를 가리키고, index는 [0]부터 시작, array는 해당 배열을 뜻한다.

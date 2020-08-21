//반복문에 사용할 변수를 외부에 선언
let i = 0;
let isFun = false;

while(!isFun) {
    console.log(i);
    i++;
    if(i === 30) {
        isFun = true;
    }
}
// 특정 조건을 비교할 때 사용
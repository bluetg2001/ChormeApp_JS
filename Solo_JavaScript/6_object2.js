// 객체 안에 함수 넣기

const dog = {
    name: '멍멍이',
    sound: '멍멍',
say: function say() {
    console.log(this.sound);
    // this는 객체 자기 자신을 뜻한다.
    // function say()를 지워도 똑같이 동작한다.
    // 화살표 함수를 사용하게 되면 동작하지 않는다.
    }
};

const cat = {
    name: '야옹이',
    sound: '야옹~'
};

cat.say = dog.say; //cat 객체에 say 함수를 복붙시킨다고 생각하면 됨
dog.say();
cat.say();
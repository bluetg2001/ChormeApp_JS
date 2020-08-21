// getter : 특정 값을 조회하려고 할 때 사용

const numbers = {
    a: 1,
    b: 2,
    get sum() {
        console.log('sum 함수가 실행됩니다!');
        return this.a + this;
    }
};

console.log(numbers.sum);
numbers.b = 5;
console.log(numbers.sum);

console.log("-------구분선-------");

const dog = {
    _name: '멍멍이',
    get name() {
        console.log('_name을 조회힙니다..');
        return this._name;
    },
    set name(value) {
        console.log('이름이 바뀝니다..' + value)
        this._name = value;
    }
};

console.log(dog.name);
dog.name = '뭉뭉이';
console.log(dog.name);
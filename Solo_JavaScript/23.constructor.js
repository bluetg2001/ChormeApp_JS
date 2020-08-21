// 객체 생성할때는 대문자
function Animal(type, name, sound) {
    this.type = type;
    this.name = name;
    this.sound = sound;
}

// prototype 사용법 객체들간에 공유할 수 있는 무언가(함수라던가 값이라던가...)
Animal.prototype.say = function() {
    console.log(this.sound);
}

const dog = new Animal('개', '멍멍이', '멍멍');
const cat = new Animal('고양이', '야옹이', '야옹');

dog.say();
cat.say();
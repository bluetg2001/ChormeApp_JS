const dog = {
    // 이름(키) : 값
    name: '멍멍이',
    age: 2,
    'key with space' : 'asdf' // 키 값이 공백이 들어가려면 ''를 써야한다
}

console.log(dog);
console.log(dog.name);
console.log(dog.age);
console.log(dog["key with space"]);

console.log("-------구분선-------");

const ironMan = {
    name: '토니 스타크',
    actor: '로버트 다우니 주니어',
    alias: '아이언맨'
};

const captainAmerica = {
    name: '스티븐 로저스',
    actor: '크리스 에반스',
    alias: '캡틴 아메리카'
};

function print(hero) {
    const text = `${hero.alias}(${hero.name}) 역할을 맡은 배우는 ${hero.actor} 입니다.`
    console.log(text);
}

print(ironMan);

console.log("-------구분선-------");
console.log("-------비구조 할당-------");

// 비구조 할당을 사용했을 때

function print2({alias, name, actor}) {
    const text = `${alias}(${name}) 역할을 맡은 배우는 ${actor} 입니다.`;
    console.log(text);
}

print2(ironMan);


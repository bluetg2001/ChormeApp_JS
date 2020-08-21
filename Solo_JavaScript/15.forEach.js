const superheroes = ['아이언맨','캡틴 아메리카', '토르', '닥터 스트레인지'];

function print(hero) {
    console.log(hero);
}

superheroes.forEach(print);

console.log('------구분선------');

superheroes.forEach(hero => {
    console.log(hero);
});
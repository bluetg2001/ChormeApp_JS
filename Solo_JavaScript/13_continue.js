// 특정 조건이 성립하면 스킵하고 다음 작업으로 넘어가라
for (let i =0; i<10; i++) {
    if(i === 2) continue;
    console.log(i);
}
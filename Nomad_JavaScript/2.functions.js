const names = ["nico", "lynn", "flynn"];

const hearts = names.map(function(item) {
    return item + " 💖";
});

console.log(hearts);

const newHearts = names.map(item => item + " 💖");

console.log(newHearts);

const nico = {
    name: "Nico",
    age: 24,
    addYear: () => {
        this.age++;
    }
};

console.log(nico);
nico.addYear();
nico.addYear();
console.log(nico);

const give = "TaeGyun";

function sayHello(give) {
    console.log(`Hello! ${give}`);
}

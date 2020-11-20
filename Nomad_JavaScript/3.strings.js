const sayHi = (aName = "anon") => `hello ${aName} lovely to have you`;

console.log(sayHi("Taegyun"));

// 
const wrapper = document.querySelector(".wrapper");

const addWelcome = () => {
    const div = `
        <div class="hello">
            <h1 class="title">Hello</h1>
        </div>
    `;
    wrapper.append(div);
};

setTimeout(addWelcome, 2000);
var num1 = Math.ceil(Math.random() * 9); // Math.ceil() 소수점 반올림
var num2 = Math.ceil(Math.random() * 9);
var answer = num1 * num2;

var body = document.body;
var ward = document.createElement('div');
ward.textContent = String(num1) + '곱하기' + String(num2) + '는?';
document.body.append(ward);

var form = document.createElement('form');
document.body.append(form);
var input = document.createElement('input');
input.type = 'number';
form.append(input);
var button = document.createElement('button');
button.textContent = '입력!';
var answer1 = document.createElement('div');
document.body.append(answer1);

form.addEventListener('submit', function callback(e) {
    e.preventDefault();
    if (answer === Number(input.value)) {
        answer1.textContent = '딩동댕';
        num1 = Math.ceil(Math.random() * 9);
        num2 = Math.ceil(Math.random() * 9);
        answer = num1 * num2;
        ward.textContent = String(num1) + '곱하기' + String(num2) + '는?';
        input.value = '';
        input.focus();
    } else {
        answer1.textContent = '땡';
        input.value = '';
        input.focus();
    }
});
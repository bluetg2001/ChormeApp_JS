// window는 브라우저 자체를 뜻하는 것이고 document는 화면 전체(페이지(탭))를 뜻하는 것이다.
// window는 생략이 가능하다
// html과 javascript는 다른 언어인데 이를 연결해주는 것이 document, dom 객체

var body = document.body;
var word = document.createElement('div');
word.textContent = '제로초';
document.body.append(word);
var form = document.createElement('form');
document.body.append(form);
var input = document.createElement('input');
form.append(input);
var button = document.createElement('button');
button.textContent = '입력!';
form.append(button);
var output = document.createElement('div');
document.body.append(output);

form.addEventListener('submit', function callback(e) {
    e.preventDefault();
    if (word.textContent[word.textContent.length -1] === input.value[0]) {
        output.textContent = '딩동댕';
        word.textContent = input.value;
        input.value = '';
        input.focus();
    } else {
        output.textContent = '땡';
        input.value = '';
        input.focus();
    }
});

// textContent는 태그안의 텍스트를 뜻하는 것이고, value는 input에 들어가는 텍스트를 뜻한다
var button = document.getElementById('button');
var input = document.getElementById('input');
var list = document.getElementById('list');
var cnt = 1;
button.addEventListener('click', clickButton);

function clickButton() {
    var temp = document.createElement('dt');
    temp.setAttribute("class", "list-group-item");
    temp.setAttribute("id", "dt" + cnt);
    temp.innerHTML = input.value;
    input.value='';
    temp.innerHTML += "<button id = 'del-button' type='button' onclick='remove(" + cnt + ")'>삭제</button>";
    list.appendChild(temp);
    cnt++;
}

function remove(cnt) {
    var dt = document.getElementById('dt' + cnt);
    list.removeChild(dt);
}
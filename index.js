const display = document.getElementById('display');
const btns = document.querySelectorAll('button');
btns.forEach((btn) => btn.addEventListener('click',(e) => handleClick(e.target.innerText)))
const calculate = () => {
    display.value = eval(display.value);
}
const back = () => {
    display.value=display.value.slice(0,display.value.length-1);
}
const handleClick = (val) => {
    switch (val) {
        case 'X': display.value+='*';
                  break;
        case 'AC': display.value = '';
                  break;
        case '=': calculate();
                  break;
        case '': back();
                 break;
        default: display.value+=val;
    }
}
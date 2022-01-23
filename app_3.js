
let coord = field.getBoundingClientRect();
let one = [coord.left, coord.top];
console.log( one)
let two = [coord.right, coord.bottom];
console.log(two)
let three = [coord.left + field.clientLeft,coord.top + field.clientTop]
let four = [coord.left + field.clientLeft + field.clientWidth, coord.top + field.clientTop + field.clientHeight];
console.log(three)
console.log(four)

document.onclick = function(e) { // показывает координаты точки
    //клика
     
     
    coords.innerHTML = e.clientX + ':' + e.clientY;
};




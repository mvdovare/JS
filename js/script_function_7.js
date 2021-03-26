let f1 = document.querySelector('.f-1');
function one(){
    console.log('work');
}

one();

f1.onclick = one; // без круглых скобок

console.log(1 + one());
console.log(one());

function two(){
    console.log('work 22222');
    return 54;
}

two();

console.log(1 + two());
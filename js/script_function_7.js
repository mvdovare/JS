let f1 = document.querySelector('.f-1');
function one(){
    console.log('work');
}

one();

// f1.onclick = one; // без круглых скобок
f1.onclick = () => {
    console.log('Hello');
}

console.log(1 + one());
console.log(one());

function two(){
    console.log('work 22222');
    return 54;
}

two();

console.log(1 + two());

let a = 8;
let b = 9;

function multi(){
    console.log(a*b);
    return a*b;
}
multi();
let c1 = multi();
let c2 = 10 * multi();
console.log(c1,c2);

function multi2(x=9, y=8){
    return x * y;
}


console.log(multi2(4, 5));
console.log(multi2(20, 5));
console.log(multi2(20, a));
console.log(multi2(10));

document.querySelector('.f-2').onclick = function () {
    console.log('+++++');
}

document.querySelector('.f-2').onclick = () =>{
    console.log('arrow');
    console.log('++++++++');
}

// function (a){
// return 'Hello';
// }

// (a) => 'Hello';
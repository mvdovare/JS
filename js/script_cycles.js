
// let div = document.querySelectorAll('.one');
// console.log(div);
// div.style.background = 'red';
// for (let i = 0; i < div.length; i = i + 1){
//    console.log(div[i]);
//    div[i].style.background = 'red';
//    div[i].onclick = two;
// }

let out_1 = '';
document.querySelector('#b1').onclick = function f1 () {
    for (let i = 1; i <= 50; i++ ){
        out_1 += i + ' ';
    }
    document.querySelector('#out1').innerHTML = out_1;
}

let out_2 = '';
document.querySelector('#b2').onclick = function f2 () {
    for (let i = 2; i <= 122; i = i + 2){
        out_2 += i + ' ';
    }
    document.querySelector('#out2').innerHTML = out_2;
}

let out_3 = '';
document.querySelector('#b3').onclick = function f3 () {
    for (let i = 25; i > 6; i--) {
        out_3 += i + ' ';
    }
    document.querySelector('#out3').innerHTML = out_3;
}


// function two () {
//     console.log('work!!!');
// }

// let b = document.getElementsByClassName('one');
// let c = document.getElementsByTagName('div');
// console.log(b);
// console.log(c);

// for ( let i = 0; i <b.length; i++ ){
//     b[i].style.border = '3px solid black';
// }

// document.querySelector('button').onclick = () => {
//     let r = document.querySelectorAll('input[type="radio"]');
//     console.log(r);
//     for (i=0 ; i < r.length; i++){
//         if (r[i].checked) {
//             console.log(r[i].value);
//         }
//     }
// }

// let out = '';
// for (let i = 0; i < 10; i++) {
//     if (i == 6) continue;
//     out += i + ' ';
//     // if (i == 6) break;
// }
// document.querySelector('#out').innerHTML = out;
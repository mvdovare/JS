let out = document.querySelector('.out');
// for (let i = 0; i < 5; i++) {
//     for (let k = 0; k < 10; k++){
//         out.innerHTML += '*';
//     }
//     out.innerHTML += '<br>';
// }

// for (let i = 1; i < 10; i++){
//     for (let k=1; k<10; k++){
//         out.innerHTML += `${i}*${k}=${k*i}<br>`;
//     }
//     out.innerHTML += '<hr>';
// }

// let s = '';
// for (let i = 0; i < 3; i++){
//     for (let k = 0; k < 3; k++){
//         s +='*';
//     }
//     s +='_';
// }
// out.innerHTML = s;

// out.innerHTML += '<hr>';

for (let i = 1; i < 4; i++){
    out.innerHTML += i + '<br>';
    for (let k = 0; k < 3; k++){
        out.innerHTML += '*_';
        if (k==2){
            out.innerHTML +='<br>';
        }
    }
}

out.innerHTML += '<hr>';

for (let i = 0; i < 4; i++){
    for (let k = 0; k < 3; k++){
        out.innerHTML +='*_';
    }
    out.innerHTML +='<br>';
}
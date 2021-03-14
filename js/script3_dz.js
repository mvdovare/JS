// При нажатии кнопки b-1 срабатывает функция f1. 
// Функция должна прочитать содержимое i-1 и сравнить его с числом 4 (сравнение ==). 
// Результат сравнения - true или false выведите в out-1.


const button = document.querySelector('button');
const input = document.querySelector('.number');

let div = document.querySelector('.out');
let div2 = document.querySelector('.out2');

// () => стрелочная функция
button.onclick = () => {
    let num = +input.value;
    if (num == 4) {
        div2.innerHTML = "True";
    }
     else {
        div.innerHTML = "False";
    }
}
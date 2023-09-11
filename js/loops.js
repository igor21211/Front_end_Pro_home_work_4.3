document.addEventListener('DOMContentLoaded', () => {
    showTable();
    setLineNumb();
    setSquardNumb();
    setMult();
    setSum();
    setDob();
    setAvr();
    setPar();
    setTreeMult();
    setDivisionNumb();
    setTwoDivisionNumb();
});

const elementDivisionTwo = (num) => {
    let element = document.querySelector('.two_division_tree_all_digits');
    let array = [];
    for (let i = 1; i <num ; i++) {
        if(num % i ===0 && i % 2 === 0){
            array.push(i);
        }
    }
    console.log(array)
    const sum = array.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
    let html = `Кількість парних дільників: ${array.length}<br>Сума парних дільників: ${sum}`
    element.innerHTML = html;
}
const elementDivision = (num) => {
    let element = document.querySelector('.division_tree_all_digits');
    let html = `Дільники числа ${num}:  `;
    for (let i = 1; i <num ; i++) {
        if(num % i ===0){
            html+=`${i} `
        }
    }
    element.innerHTML = html;
}

const elementTreeMult = (num1, num2) => {
    let element = document.querySelector('.mult_tree_all_digits');
    let html = `числа в діапазоні від ${num1} до ${num2} кратні 3 : `;
    for (let i =num1; i <= num2; i++) {
        if(i % 3 === 0){
            html+=`${i} `;
        }
    }
    element.innerHTML = html;
}
const elementPar = (num1, num2) => {
    let element = document.querySelector('.par_all_digits');
    let html = '';
    let array = []
    for (let i = parseInt(num1); i <= num2; i++) {
        array.push(i)
    }
    let filterArray = array.filter((element) => element % 2 === 0);
    console.log(filterArray)
    const sum = filterArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
    html = `Cуму лише парних чисел : ${sum}`;
    element.innerHTML = html;
}

const elementAvr = (num, count) => {
    let element = document.querySelector('.avr_all_digits');
    let html = "";
    let array = []
    for (let i = parseInt(num); i <= count; i++) {
        array.push(i)
    }
    console.log(array)
    const sum = array.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
    const result = sum / count
    html = `Cереднє арифметичне : ${result}`;
    element.innerHTML = html;
}
const elementDob = (num1, num2) => {
    let element = document.querySelector('.dob_all_digits');
    let html = "";
    let array = []
    for (let i = parseInt(num1); i <= num2; i++) {
        array.push(i)
    }
    console.log(array)
    const result = array.reduce((accumulator, currentValue) => accumulator * currentValue, 1)
    html = `Добуток: ${result}`;
    element.innerHTML = html;
}
const elementSum = (num1, num2) => {
    let element = document.querySelector('.sum_all_digits');
    let html = "";
    let array = []
    for (let i = parseInt(num1); i <= num2; i++) {
        array.push(i)
    }
    console.log(array)
    const result = array.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
    html = `Сума: ${result}`;
    element.innerHTML = html;
}

const numbersInOneLine = (num1, num2) => {
    let tdiv = document.querySelector('.numbers_in_one_line')
    let html = '';
    console.log(num1)
    for (let i = num1; i <= num2; i++) {
        if (i == num2) {
            html += `${i}`
        } else {
            html += `${i} ,`
        }
    }
    tdiv.innerHTML = html;
}
const showTable = () => {
    let tbody = document.querySelector('.table')
    let html = "";
    for (let i = 1; i <= 10; i++) {
        html += "<tr><td>" + i + "</td>";
        for (let j = 1; j <= 10; j++) {
            html += `<td>${i} x ${j} = ${i * j}</td>`;
        }
        html += "</tr>";
    }
    tbody.innerHTML = html;
}

const numbersInOneLineMult = (num1, num2) => {
    let tdiv = document.querySelector('.numbers_in_one_line_mult')
    let html = '';
    console.log(num1)
    for (let i = num1; i <= num2; i++) {
        html += `${i * i} `
    }
    tdiv.innerHTML = html;
}
const sevenTable = (num) => {
    let tbody = document.querySelector('.elementMult')
    let html = "";
    for (let i = 1; i <= 10; i++) {
        html += `<tr><td>${i} x ${num} = ${i * num}</td></tr>`;
    }
    tbody.innerHTML = html;
}


const setSquardNumb = () => {
    let firstElement = document.querySelector('.firstNumber');
    let secondElement = document.querySelector('.secondNumber');
    let btn = document.querySelector('.btnBet');
    btn.addEventListener("click", () => numbersInOneLineMult(firstElement.value, secondElement.value))
}

const setLineNumb = () => {
    let firstElement = document.querySelector('.firstNumberLine');
    let secondElement = document.querySelector('.secondNumberLine');
    let btn = document.querySelector('.btnLine');
    btn.addEventListener("click", () => numbersInOneLine(firstElement.value, secondElement.value))
}

const setMult = () => {
    let element = document.querySelector('.num');
    let btn = document.querySelector('.btnMult');
    btn.addEventListener("click", () => sevenTable(element.value));
}

const setSum = () => {
    let firstElement = document.querySelector('.firstNumberSum');
    let secondElement = document.querySelector('.secondNumberSum');
    let btn = document.querySelector('.btnSum');
    btn.addEventListener("click", () => elementSum(firstElement.value, secondElement.value))
}

const setDob = () => {
    let firstElement = document.querySelector('.firstNumberDob');
    let secondElement = document.querySelector('.secondNumberDob');
    let btn = document.querySelector('.btnDob');
    btn.addEventListener("click", () => elementDob(firstElement.value, secondElement.value))
}

const setAvr = () => {
    let firstElement = document.querySelector('.firstNumberAvr');
    let secondElement = document.querySelector('.secondNumberAvr');
    let btn = document.querySelector('.btnAvr');
    btn.addEventListener("click", () => elementAvr(firstElement.value, secondElement.value))
}

const setPar = () => {
    let firstElement = document.querySelector('.firstNumberPar');
    let secondElement = document.querySelector('.secondNumberPar');
    let btn = document.querySelector('.btnPar');
    btn.addEventListener("click", () => elementPar(firstElement.value, secondElement.value))
}

const setTreeMult = () => {
    let firstElement = document.querySelector('.firstNumberMultTree');
    let secondElement = document.querySelector('.secondNumberMultTree');
    let btn = document.querySelector('.btnMultTree');
    btn.addEventListener("click", () => elementTreeMult(firstElement.value, secondElement.value))
}

const setDivisionNumb = () => {
    let divisionElement = document.querySelector('.number_division')
    let btn = document.querySelector('.btnDivision')
    btn.addEventListener("click", () => elementDivision(divisionElement.value));
}

const setTwoDivisionNumb = () => {
    let divisionElement = document.querySelector('.number_division_two')
    let btn = document.querySelector('.btnDivision_two')
    btn.addEventListener("click", () => elementDivisionTwo(divisionElement.value));
}
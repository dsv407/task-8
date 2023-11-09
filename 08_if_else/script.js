min = parseInt(prompt('Минимальное знание числа для игры','0'));
max = parseInt(prompt('Максимальное знание числа для игры','100'));
let minValue = min < -999 ? -999 : min > 999 ? 999 : min;
let maxValue = max > 999 ? 999 : max < -999 ? -999 : max;
alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
let answerNumber  = Math.floor((minValue + maxValue) / 2);
let orderNumber = 1;
let gameRun = !isNaN(minValue) && !isNaN(maxValue);

const orderNumberField = document.getElementById('orderNumberField');
const answerField = document.getElementById('answerField');

orderNumberField.innerText = orderNumber;
if (gameRun) {answerField.innerText = `Вы загадали число ${answerNumber }?`;
} else {
    answerField.innerText = "Нажми Заново"
};

    document.getElementById('btnRetry').addEventListener('click', function () {
    minValue = parseInt(prompt('Минимальное знание числа для игры','0'));;
    maxValue = parseInt(prompt('Максимальное знание числа для игры','100'));
    orderNumber = 1;
    gameRun = !isNaN(minValue) && !isNaN(maxValue);
    answerNumber  = Math.floor((minValue + maxValue) / 2);
    orderNumberField.innerText = orderNumber;
    if (gameRun) {answerField.innerText = `Вы загадали число ${answerNumber }?`;
} else {
    answerField.innerText = "Нажми Заново"
};
})

document.getElementById('btnOver').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            const phraseRandom = Math.round( Math.random()*3);
            switch (phraseRandom) {
                case 0:
                    answerField.innerText = 'Вы загадали неправильное число!\n\u{1F914}';
                    break;

                case 1:
                    answerField.innerText = 'Вы забыли, какое число загадали?\n\u{1F92A}';
                    break;

                case 2:
                    answerField.innerText = 'Вы ошиблись с числом!\n\u{1F9D0}';
                    break;
            };
            gameRun = false;
        } else {
            minValue = answerNumber  + 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            const phraseAsnw = Math.round( Math.random()*2);
            switch (phraseAsnw) {
                case 0:
                    answerField.innerText = `Вы загадали число ${answerNumber }?`;
                    break;
                case 2:
                    answerField.innerText = `Да это легко! Ты загадал ${answerNumber }?`;
                    break;
                case 1: 
                    answerField.innerText = `Наверное, это число ${answerNumber }.`;
                    break;
            };
        }
    }
})

document.getElementById('btnLess').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            const phraseRandom = Math.round( Math.random()*2);
            switch (phraseRandom) {
                case 0:
                    answerField.innerText = 'Вы загадали неправильное число!\n\u{1F914}';
                    break;

                case 1:
                    answerField.innerText = 'Вы забыли, какое число загадали?\n\u{1F92A}';
                    break;

                case 2:
                    answerField.innerText = 'Вы ошиблись с числом!\n\u{1F9D0}';
                    break;
            }
            gameRun = false;
        } else {
            maxValue = answerNumber - 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            const phraseAsnw = Math.round( Math.random()*2);
            switch (phraseAsnw) {
                case 0:
                    answerField.innerText = `Вы загадали число ${answerNumber }?`;
                    break;
                case 2:
                    answerField.innerText = `Да это легко! Ты загадал ${answerNumber }?`;
                    break;
                case 1: 
                    answerField.innerText = `Наверное, это число ${answerNumber }.`;
                    break;
            };
        }
    }
})

document.getElementById('btnEqual').addEventListener('click', function () {
    if (gameRun){
        answerField.innerText = `Я всегда угадываю\n\u{1F60E}`
        gameRun = false;
    }
})


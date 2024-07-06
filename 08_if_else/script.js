function numberToWords(num) {
    const ones = ['', 'один', 'два', 'три', 'четыре', 'пять', 'шесть', 'семь', 'восемь', 'девять'];
    const teens = ['десять', 'одиннадцать', 'двенадцать', 'тринадцать', 'четырнадцать', 'пятнадцать',
        'шестнадцать', 'семнадцать', 'восемнадцать', 'девятнадцать'];
    const tens = ['', '', 'двадцать', 'тридцать', 'сорок', 'пятьдесят', 'шестьдесят', 'семьдесят', 'восемьдесят', 'девяносто'];
    const hundreds = ['', 'сто', 'двести', 'триста', 'четыреста', 'пятьсот', 'шестьсот', 'семьсот', 'восемьсот', 'девятьсот'];

    if (num === 0) return 'ноль';

    if (num < 0) return 'минус ' + numberToWords(-num);

    if (num < 10) return ones[num];
    if (num >= 10 && num < 20) return teens[num - 10];

    if (num < 100) {
        return tens[Math.floor(num / 10)] + (num % 10 != 0 ? ' ' + ones[num % 10] : '');
    }

    if (num < 1000) {
        return hundreds[Math.floor(num / 100)] + (num % 100 != 0 ? ' ' + numberToWords(num % 100) : '');
    }

    return num.toString(); // Для чисел более 999 возвращаем числовое значение
}

function formattedAnswer(answerNumber) {
    let answerText = answerNumber.toString();
    let wordText = numberToWords(answerNumber).replace(/\s+/g, ' ').trim();
    if (wordText.length <= 20) {
        answerText = wordText;
    }
    return answerText;
}

let minValue, maxValue, answerNumber, orderNumber, gameRun;
const orderNumberField = document.getElementById('orderNumberField');
const answerField = document.getElementById('answerField');

function startGame() {
    minValue = parseInt(document.getElementById('min-value').value, 10);
    maxValue = parseInt(document.getElementById('max-value').value, 10);
    minValue = Math.max(-999, Math.min(999, isNaN(minValue) ? 0 : minValue));
    maxValue = Math.max(-999, Math.min(999, isNaN(maxValue) ? 100 : maxValue));
    if (minValue > maxValue) {
        [minValue, maxValue] = [maxValue, minValue]; // Переставляем значения, если minValue больше maxValue
    }
    orderNumber = 1;
    gameRun = true;
    answerNumber = Math.floor((minValue + maxValue) / 2);
    orderNumberField.innerText = orderNumber;
    updateAnswerField();
    $('#settingsModal').modal('hide');
}

function updateAnswerField() {
    answerField.innerText = `Вы загадали число ${formattedAnswer(answerNumber)}?`;
}

document.getElementById('start-game').addEventListener('click', startGame);

document.getElementById('btnRetry').addEventListener('click', function() {
    $('#settingsModal').modal('show');
});

document.getElementById('btnOver').addEventListener('click', function() {
    if (gameRun) {
        if (minValue === maxValue || minValue > maxValue) {
            const phrases = [
                'Вы загадали неправильное число!\n\u{1F914}',
                'Вы забыли, какое число загадали?\n\u{1F92A}',
                'Вы ошиблись с числом!\n\u{1F9D0}'
            ];
            answerField.innerText = phrases[Math.floor(Math.random() * phrases.length)];
            gameRun = false;
        } else {
            minValue = answerNumber + 1;
            answerNumber = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            updateAnswerField();
        }
    }
});

document.getElementById('btnLess').addEventListener('click', function() {
    if (gameRun) {
        if (minValue === maxValue || minValue > maxValue) {
            const phrases = [
                'Вы загадали неправильное число!\n\u{1F914}',
                'Вы забыли, какое число загадали?\n\u{1F92A}',
                'Вы ошиблись с числом!\n\u{1F9D0}'
            ];
            answerField.innerText = phrases[Math.floor(Math.random() * phrases.length)];
            gameRun = false;
        } else {
            maxValue = answerNumber - 1;
            answerNumber = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            updateAnswerField();
        }
    }
});

document.getElementById('btnEqual').addEventListener('click', function() {
    if (gameRun) {
        answerField.innerText = `Я всегда угадываю\n\u{1F60E}`;
        gameRun = false;
    }
});

$(document).ready(function() {
    $('#settingsModal').modal('show');
});
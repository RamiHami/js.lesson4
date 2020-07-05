var event, ok, goal = 0;
 
do {
    ok = false;
    event = +prompt(mill.a00 + mill.a1 + mill.a2 +
        mill.a3 + mill.a4 + '-1 - Выход из игры')
    if (event == -1) {
        break;
    }
    else if (event == 1) {
        alert("Это правильный ответ!");
        goal += 1;
        ok = isAnswer(mill.a0, event);
    }
    else {
        alert("Это не правильный ответ.")
        ok = isAnswer(mill.a0, event);
    }
} while (!ok);
do {
    ok = false;
    event = +prompt(mill.b00 + mill.b1 + mill.b2 +
        mill.b3 + mill.b4 + '-1 - Выход из игры')
    if (event == -1) {
        break;
    }
    else if (event == 4) {
        alert("Это правильный ответ!");
        goal += 1;
        ok = isAnswer(mill.b0, event);
    }
    else {
        alert("Это не правильный ответ.")
        ok = isAnswer(mill.b0, event);
    }
} while (!ok)
do {
    ok = false;
    event = +prompt(mill.c00 + mill.c1 + mill.c2 +
        mill.c3 + mill.c4 + '-1 - Выход из игры')
    if (event == -1) {
        break;
    }
    else if (event == 3) {
        alert("Это правильный ответ!");
        goal += 1;
        ok = isAnswer(mill.c0, event);
    }
    else {
        alert("Это не правильный ответ.")
        ok = isAnswer(mill.c0, event);
    }
} while (!ok)

if (goal == 3) {
    alert("Поздравляем! Вы миллионер!")
}
else {
    alert("Вы проиграли.")
}

function isAnswer(q, event) {
    if (isNaN(event) || !isFinite(event)) {
        alert('Вы ввели недопустимый символ');
        return false;
    }
    else if (event < 1 || event > q) {
        alert('Ваше число выходит из допустимого диапозона');
        return false;
    }
    return true;
}

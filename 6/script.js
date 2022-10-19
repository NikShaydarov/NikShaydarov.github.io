function hide_all() {
    var antivurus = document.getElementById("antivurus");
    var windows_10 = document.getElementById("windows_10");

    antivurus.hidden = true;
    windows_10.hidden = true;
}

function antivurus_as() {
    var antivurus = document.getElementById("antivurus");
    var antivurus_1 = document.getElementById("antivurus_1");
    var antivurus_2 = document.getElementById("antivurus_2");
    var add_price = 0;

    antivurus.hidden = false;

    if (antivurus_1.checked) {
        add_price = antivurus_1.dataset.addprice;
    }
    if (antivurus_2.checked) {
        add_price = antivurus_2.dataset.addprice;
    }
    return add_price;
}

function windows() {
    var windows_10 = document.getElementById("windows_10");
    var windows_10_1 = document.getElementById("windows_10_1");

    windows_10.hidden = false;
    if (windows_10_1.checked) {
        return windows_10_1.dataset.addprice;
    } else {
        return 0;
    }
}

function changes(price, add_price) {
    var sum = document.getElementById("sum");
    var answer = document.getElementById("answer");

    var check_is_number = /^[0-9]+$/;
    var problem = "Неправильный формат ввода! Вводить только цифры!";

    var check1 = check_is_number.test(sum.value);
    var check2 = check_is_number.test(price);
    var check3 = check_is_number.test(add_price);

    var ans = 0;
    var a;
    var s;
    var d;

    if (check1 && check2 && check3) {
        a = Number(price);
        s = Number(add_price);
        d = Number(sum.value);
        ans = ((a + s) * d);
        answer.innerText = "Ответ: " + ans;
    } else {
        answer.innerText = problem;
    }
}


function changed() {
    var tovar_select = document.getElementById("tovar_select");
    var selected = tovar_select.options[tovar_select.selectedIndex];
    hide_all();

    switch (tovar_select.value) {
        case "antivurus":
            changes(selected.dataset.price, antivurus_as());
        break;
    case "windows":
            changes(selected.dataset.price, windows());
        break;
    case "CPU":
            changes(selected.dataset.price, 0);
        break;
    }
}

function changed_amount() {
    changed();
}

function main() {
    var sum = document.getElementById("sum");
    var tovar_select = document.getElementById("tovar_select");
    var antivurus_1 = document.getElementById("antivurus_1");
    var antivurus_2 = document.getElementById("antivurus_2");
    var windows_10 = document.getElementById("windows_10");

    sum.addEventListener("keyup", changed_amount);
    tovar_select.addEventListener("change", changed);
    antivurus_1.addEventListener("change", changed);
    antivurus_2.addEventListener("change", changed);
    windows_10.addEventListener("change", changed);
}

document.addEventListener("DOMContentLoaded", main);
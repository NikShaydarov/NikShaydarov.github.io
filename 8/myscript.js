"use strict";

let button = document.getElementById("start"); //c помощью id получаем эл-ты страницы и записываем их в переменные
let popup = document.getElementById("popup");
let popupwrapper = document.getElementById("popupwrapper");
popupwrapper.style.display = "none";
popup.style.display = "none";
let exit = document.getElementById("exit");


window.addEventListener("DOMContentLoaded",  //страница загружена
    function (event) {
       button.addEventListener("click", function (event) { //добавляем событие, реагирущее на нажатие кнопки
           popup.style.display = "block"; //сплывающее окно
           popupwrapper.style.display = "block";
           button.style.display = "none";
    });
    exit.addEventListener("click", function (event) { //добавляем событие, реагирущее на нажатие кнопки крестик (скрывает окно)
        popup.style.display = "none";
        popupwrapper.style.display = "none";
        button.style.display = "block";
 });
    
});
function clear(){ //очищает все поля
    let namefield = document.getElementsByName("name");
    let email = document.getElementsByName("email");
    let message = document.getElementsByName("message");
    let agree = document.getElementsByName("agree");
    namefield[0].value = "";
    email[0].value = "";
    message[0].value = "";
    agree[0].checked = false;

}

formcarry({
    form: "74y3b5WzHXr",
    element: "#my-form",
    onSuccess: function(response){
      clear();
      alert("Данные отправлены успешно")
    },
    
    onError: function(error){
        clear();
      alert("Ошибка отправки данных")
    }
  });
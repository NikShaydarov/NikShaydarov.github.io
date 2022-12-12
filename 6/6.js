window.addEventListener('DOMContentLoaded', function (event) {
  const PRICE_1 = 500;
  const PRICE_2 = 1000;
  const PRICE_3 = 2000;
  const EXTRA_PRICE = 10000;
  const RADIO_1 = 100;
  const RADIO_2 = 150;
  const RADIO_3 = 200;
  const CHECKBOX = 3000;
  let price = PRICE_1;
  let extraPrice = EXTRA_PRICE;
  let radios = document.getElementById("myradios"); 
  let s = document.getElementsByName("myselect");
  let checks = document.getElementById("mycheck");
  let r = document.querySelectorAll(".pis input[type=radio]");
  let checkbox = document.getElementById("check");
  let result = document.getElementById("result");
  let count = document.getElementsByName("count");
  let calc = document.getElementById("calc");
  
  s[0].addEventListener("change", function(event) {
    let select = event.target;
    
    if (select.value === "1") {
      radios.classList.add("d-none");
      checks.classList.add("d-none");
      extraPrice = EXTRA_PRICE;
      price = PRICE_1;

    }
    if(select.value === "2") {
      radios.classList.remove("d-none");
      checks.classList.add("d-none");
      document.getElementById("radio1").checked = true;
      extraPrice = EXTRA_PRICE;
      price = PRICE_2;
    }
    if(select.value === "3"){
      radios.classList.add("d-none");
      checks.classList.remove("d-none");
      extraPrice = EXTRA_PRICE;
      price = PRICE_3;
      document.getElementById("check").checked = false;
    }
  });

r.forEach(function (currentRadio) {
    currentRadio.addEventListener("change", function (event) {      
        let r = event.target;
        if (r.value === "r1") {      
            extraPrice = RADIO_1;
            console.log(r.value);
        }
        if (r.value === "r2") {
            extraPrice = RADIO_2;
            console.log(r.value);
        }
        if (r.value === "r3") {
            extraPrice = RADIO_3;
            console.log(r.value);
        }
    });
});

checkbox.addEventListener("change", function () {
  if (checkbox.checked) {
      extraPrice = CHECKBOX;
  } else {
      extraPrice = EXTRA_PRICE;
  }
});

calc.addEventListener("change", function () {
  let toCount = count[0].value;
  let flag1488 = toCount.match(/^\d+$/);
  if(flag1488 !== null){
    result.innerHTML=(price + extraPrice)*parseInt(count[0].value);
  }
  else{
      result.innerHTML = "Введите число в поле - количество !";
  }

});
});
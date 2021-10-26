const text = document.querySelector(".main__text");

var mon = prompt("Введите сумму - ", 0);

if (mon < 0) {
  alert("Сумма введена неверно! Попробуйте еще раз");
  mon = prompt("Введите сумму - ", 0);
}

var age = prompt("Введите Ваш возраст - ", 0);

if (age < 1) {
  alert("Возраст введен неправильно! Попробуйте еще раз");
  age = prompt("Введите Ваш возраст - ", 0);
}

if (age > 1 && age < 20) {
  mon = mon * 1.05;
  alert("Применена скидка Молодежная");
} else if (age > 65) {
  mon = mon * 1.1;
  alert("Применена скидка Пенсионная");
}

if (mon < 300) {
  img.src = "sad.jpg";
  text.innerHTML = "Средств недостаточно!";
  //   document.writeln("Средств недостаточно!");
}
if (mon >= 300 && mon <= 3000) {
  img.src = "teapot.jpg";
  //   document.writeln("Купите чайник!");
  text.innerHTML = "Купите чайник!";
}
if (mon >= 3001 && mon < 10000) {
  img.src = "cleaner.jpg";
  //   document.writeln("Купите пылесос!");
  text.innerHTML = "Купите пылесос!";
}
if (mon >= 10000) {
  img.src = "fridge.jpg";
  //   document.writeln("Купите холодильник!");
  text.innerHTML = "Купите холодильник!";
}

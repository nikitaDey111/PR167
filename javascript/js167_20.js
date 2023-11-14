let daysOfWeek = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"];
let day = (new Date()).getDay(); // Получаем номер текущего дня недели

for (let i = 0; i < daysOfWeek.length; i++) {
  if (i === day) {
    document.write("<em>" + daysOfWeek[i] + "</em><br>");
  } else {
    document.write(daysOfWeek[i] + "<br>");
  }
}

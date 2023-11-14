let daysOfWeek = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"];

for (let i = 0; i < daysOfWeek.length; i++) {
  if (i >= 5) {
    document.write("<strong>" + daysOfWeek[i] + "</strong><br>");
  } else {
    document.write(daysOfWeek[i] + "<br>");
  }
}

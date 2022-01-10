/* 1. Создайте функцию, которая принимает три значения:

h - часы
m - минуты
s - секунды
Верните значение максимальной продолжительности.
 */


// longTime(1, 59, 3598) ➞ 1

// longTime(2, 300, 15000) ➞ 300

// longTime(15, 955, 59400) ➞ 59400

function longTime(h, m, s){
    var hSecond = h * 3600;
    var mSecond = m * 60;
    var resultMax = Math.max(s, mSecond, hSecond);
    if (resultMax / 3600 === h) {
        return h;
    } else if (resultMax / 60 === m) {
        return m;
    } else {
        return s;
    }
    
}

console.log(longTime(1, 59, 3598));
console.log(longTime(2, 300, 15000));
console.log(longTime(15, 955, 59400));





//2. Если месяц и год представлены в виде чисел, верните, содержит ли этот месяц пятницу, 13-е число.

// isFriday13(3, 2020) ➞ true

// isFriday13(10, 2017) ➞ true

// isFriday13(1, 1985) ➞ false


function isFriday13(month, year){
    var soon = new Date(year, month - 1, 13);
    var isFriday = soon.getDay(); 
    if(isFriday === 5) {
        return true;
    } else {
        return false;
    } 
}

console.log(isFriday13(3, 2020));
console.log(isFriday13(10, 2017));
console.log(isFriday13(1, 1985));



// 3. Напишите функцию, которая принимает дату в формате yyyy / mm / dd в качестве входных данных и возвращает «Ура! Хэллоуин!», если дата 31 октября, иначе возвращает «Хеллоуин не сегодня:(».

/* halloween(new Date("2021/10/31")) ➞ "Ура! Хэллоуин!"

halloween(new Date("2020/07/31")) ➞ "Хеллоуин не сегодня:("

halloween(new Date("2019/10/12")) ➞ "Хеллоуин не сегодня:("
 */

function halloween(date){
    //let dateResult = new Date( Date.parse(date));
    //return (dateResult.getMonth() == 9 & dateResult.getDate() == 31) ? "Ура! Хэллоуин!" : "Хеллоуин не сегодня:(";
    return (date.getMonth() == 9 & date.getDate() == 31) ? "Ура! Хэллоуин!" : "Хеллоуин не сегодня:(";
}

console.log(halloween(new Date("2021/10/31")));
console.log(halloween(new Date("2020/07/31")));
console.log(halloween(new Date("2019/10/12")));



// 4. Напишите функцию, которая принимает месяц и год (как целые числа) и возвращает количество дней в этом месяце.

// totalDays(2, 2018) ➞ 28

// totalDays(4, 1994) ➞ 30

// totalDays(2, 2002) ➞ 28

// totalDays(2, 2001) ➞ 28

function totalDays(month, year){
    let date = new Date (year, month, 0);
    return date.getDate();
}

console.log(totalDays(2, 2018));
console.log(totalDays(4, 1994));
console.log(totalDays(2, 2002));
console.log(totalDays(2, 2001));
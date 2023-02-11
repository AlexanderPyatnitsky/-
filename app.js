// "use strict"; // Запис в строгому режимі! (Потім під низом ввесь код)

// // ** Запам'ятайте шість значень, які в булевому перетворенні приводяться до `false`:
// // `0`, `NaN`, `null`, `undefined`, порожній рядок `""` або`''`
// // і саме значення`false`.Абсолютно все інше приводиться до`true`.

// // ** Виведи на екран загальну кількість яблук та винограду. Різницю яблук та винограду.
// // const apples = 47;
// // const grapes = 135;
// // const total = apples + grapes;
// // console.log(total);
// // const diff1 = apples - grapes;
// // const diff2 = grapes - apples;
// // console.log(diff1);
// // console.log(diff2);

// // ** Зроби вираз перевизначення комбінованим оператором +=.
// // let students = 100;
// // students = students + 50; - заміна ціеї строчки нижче!
// // students += 50;
// // console.log(students);

// // ** Розбери пріоритет операторів інструкції привласнення значення змінної result.
// // const rezult = 108 + 223 - 2 * 5;
// // console.log(rezult);

// // ** Напиши скрипт який виводить у консоль заокругленні вгору, вниз і т.д значення змінної value.
// // ** Використовуй методи Math.floor(), Math.ceil(), Math.round(). Перевір що буде в консоліпри значеннях 27.3;
// // const value1 = 27.3
// // const value2 = 27.5;
// // const value3 = 27.9;

// // console.log(Math.floor(value1));
// // console.log(Math.floor(value2));
// // console.log(Math.floor(value3));

// // console.log(Math.ceil(value1));
// // console.log(Math.ceil(value2));
// // console.log(Math.ceil(value3));

// // console.log(Math.round(value1));
// // console.log(Math.round(value2));
// // console.log(Math.round(value3));

// // ** Склади фразу за допомогою шаблонних рядків A has B bots in stock, де А і В - змінні вставленні в рядок.
// // const companyName = 'Cyberdyne Systems';
// // const repairBots = 150;
// // const defenceBots = 50;
// // const totalBots = repairBots + defenceBots;
// // const message = `Cyberdyne Systems has ${totalBots} bots in stock`;
// // console.log(message); "Cyberdyne Systems has 200 bots in stock";

// // ** Напиши скрипт, який розраховує індех масси тіла людини. Для цього потрібно розділити вагу в кілограммах на квадрат висоти людини в метрах.
// // Вага та висота зберігаються у змінних width та height, але не як чісла, але в вигляді рядків спеціально для завдання).
// // Не цілі числа можуть бути заданні у вигляді 24.7 або 24,7, тобто як роздільник дробової частини може бути кома.
// // Індех масси тіла потрібно округлити до однієї цифри після коми.
// // let width = '88.3';
// // let height = '1.75';
// // const heightNum = Number(height);
// // const squareHeightNum = Math.pow(heightNum, 2);
// // const widthCorrectStringNumber = width.replace(',', '.');
// // const widthNum = Number(widthCorrectStringNumber);
// // const result = widthNum / squareHeightNum;
// // console.log(result.toFixed(1));
// // console.log(result);
// // console.log(widthNum);
// // console.log(widthCorrectStringNumber);
// // console.log(heightNum);
// // console.log(squareHeightNum);

// // const bmi = '';
// // console.log(bmi); // 28.8

// // ** Яким буде результат виразів?
// // console.log(5 > 4);
// // console.log(10 >= '7');
// // console.log('2' > '12');
// // console.log("2" < "12");
// // console.log('4' == '4');
// // console.log('6' === '6');
// // console.log('falce' == falce);
// // console.log(1 == true);
// // console.log(1 === true);
// // console.log('0' == falce);
// // console.log('0' === falce);
// // console.log('Papaya' < 'papaya');
// // console.log('Papaya' === 'papaya');
// // console.log(undefined == null);
// // console.log(undefined === null);

// // ** Яким буде результат виразів ЛОГІЧНИХ ОПЕРАТОРІВ?!
// // console.log(true && 3);
// // console.log(false && 3);
// // console.log(true && 4 && 'kiwi');
// // console.log(true && 0 && "kiwi");
// // console.log(true || 3);
// // console.log(true || 3 || 4);
// // console.log(true || false || 7);
// // console.log(null || 2 || undefined);
// // console.log((1 && null && 2) > 0);
// // console.log(null || (2 && 3) || 4);

// // ** Відрефакторити код так, щоб у змінну value присвоїлося значення incomingValue, якщо воно не рівне
// // undefined або null. В іншому випадку має присвоюватися значення defaultValue. Перевірити роботу скрипта
// // для наступних значень incomingValue: Null, Undefined, 0, False.
// // const incomingValue = 5;
// // const defaultValue = 10;
// // const value = incomingValue ?? defaultValue;
// // console.log(value);

// // ** Напиши скрипт який переведе значення totalMinutes (кількість хвилин) в рядок у формать годин та хвилин
// // 70 покаже 01:10;
// // 450 покаже 07:30;
// // 1441 покаже 23:01;
// // const totalMinuts = 70;

// // function someSum(a, b) {
// //     return a + b;
// // }
// // console.log(`Сумма ${someSum(4, 7)}`);

// // ** СТРОКИ ** //

// // let text = "Живи, а работай в свободное время! \u00A9 \u{1F60D}"; (Смайлик!)
// // console.log(text);

// // ** Задачка с длинной строки!
// // let text = "П'ятницький";
// // let firstSymbol = text[0];
// // let lastSymbol = text[text.length - 1];
// // console.log(firstSymbol); // "П"
// // console.log(lastSymbol); // "й"

// // вывести каждый символ в строке с помощью цикла "for of"//
// // let text = "П'ятницький";
// // for (const char of text) {
// //     console.log(char);
// // }

// // Изменение регистра! //
// // let text = "П'ятницький";
// // console.log(text.toUpperCase());
// // console.log(text.toLowerCase());

// // ПОИСК ПОД СТРОКИ!
// // Метод str.indexOf(sudstr, pos)
// // Он ищет подстроку (zubstr) в строке (str), начиная с позиции (pos), и возращает позицию,
// // на которой расспологается совпадение, либо -1 при отсуцтвии совпадения! //
// // let text = "П'ятницький";
// // console.log(text.indexOf('ниц')); //4
// // console.log(text.indexOf('ниц', 5)); //-1

// // Но есть более современный метод!!!//
// // let text = "П'ятницький";
// // console.log(text.includes('ниц')); // ищет строку "ниц" - true
// // console.log(text.includes('ниц', 5)); // ищет строку "ниц" с 5 позиции - false
// // console.log(text.startsWith('ниц')); //ищет в начале строки "ниц" - false
// // console.log(text.endsWith('й')); // ищет в конце строки "!" - true

// // Регистр имеет значение!
// // let text = "Привет!";
// // let searchText = "пР";
// // console.log(text.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())); // true

// *******// Другий модуль підходить к екватору і можемо виділити собі найважливіші моменти і зробити собі шпаргалку
// Масиви є однією з найпоширеніших структур даних в JS, вони використовуються для зберігання даних. Також масиви дають багато можливостей для роботи з даними.
// Функції дозволяють повторювати одну й ту саму дію в багатьох частинах програми. Це як основний будівельний елемент.
// Якщо коротко підсумувати - масиви та функції є однією з основних тем і з ними часто доведеться зустрічатися в роботі.
// Дуже важливо не забувати про те, що наші методи роботи з масивами, як і умови, можуть щось повертати.
// Індексація в масиві починається з 0.
// За допомогою властивості length ми можемо отримати довжину масиву або рядка (повертає число), буде корисно при обчисленні останнього індексу масивів.
// Шпаргалка по методам масивів:
// split/join -- перетворює рядок на масив і назад.
// push () -- додає елементи до кінця,
// pop() -- видаляє елемент з кінця,
// shift() -- видаляє елемент із початку,
// unshift() - додає елементи на початок.
// splice(index, deleteIndex, ...arr) -- починаючи з індексу index, видаляє deleteIndex елементів і вставляє
// arr. slice(start, end) -- створює новий масив, копіюючи елементи з позиції start до end (не включаючи end).
// Функція повинна робити лише те, що очевидно мається на увазі її назвою. І це має бути однією дією. Якщо коротко і зрозуміло: Одна функція -- одна дія.
// Шпаргалка з оголошення функцій у JS:
// Функціональний вираз (function expression)
// const greet = function (name) {
//  return `Hello, ${name}`;
// };
// Оголошення функції (function declaration)
// function greet(name) {
//  return `Hello, ${name}!`;
// }
// Для того, щоб щось повернути з функції/методу або умови, можна використовувати оператор return. Також з функції можна повертати відразу будь-який тип даних, наприклад return 'hello' // (повернемо рядок) чи return true // (повернемо буль) чи return [1, 2] // (повернемо масив)
// Паттерн "раннє повернення", каже про те, що якщо умова всередині нашего if поверне true, то нам сразу же потрібно щось повернути із тіла цієї умови, з допомогою return.
// Не забувайте, що оператор = це оператор присвоєння, а не порівняння.
// Декілька лайфхаків при роботі з масивами.
// Як швидко очистити масив
// const fruits = ['banana', 'apple', 'orange', 'watermelon', 'apple', 'orange', 'grape', 'apple'];
// fruits.length = 0;
// console.log(fruits); // поверне []
// Як об'єднати більше двох масивів
// const fruits = ['apple', 'banana', 'orange'];
// const meat = ['poultry', 'beef', 'fish'];
// const vegetables = ['potato', 'tomato', 'cucumber'];
// const food = [...fruits, ...meat, ...vegetables];
// console.log(food); // поверне ["apple", "banana", "orange", "poultry", "beef", "fish", "potato", "tomato", "cucumber"]
// Як отримати рандомне значення масиву
// const fruits = [ 'banana', 'apple', 'orange', 'watermelon', 'apple', 'orange', 'grape', 'apple', ];
// const randomFruit = fruits[Math.floor(Math.random() * fruits.length)];
// console.log(randomFruit); // поверне рандомний фрукт із масиву

// console.log(null && "fallse" && "Mango");
// console.log(null || "fallse" || "Mango");
// console.log("fallse" && "Mango" || "null");
// console.log("Mango" && "null" || "fallse");

// let age;
// console.log(age); //undefined (невизначенний)

// age = 21;
// console.log(age); //21

// const userName = "Олександр П'ятницький";
// const description = "я вивчаю - HTML, CSS, JawaScript";
// console.log(userName, description);


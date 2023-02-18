// "use strict"; // Запис в строгому режимі! (Потім під низом ввесь код)
// або в такому підключенні JS файла!
// <script src="/app.js" type= "module"></script>; //

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

// ============================================================================================================= //

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

//  =============================================================================================================  //

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

// ** Чісла!
// const valueA = '5';
// console.log(Number(valueA)); // 5
// console.log(typeof Number(valueA)); // number

// const valueB = "random string";
// console.log(Number(valueB)); // NaN
// console.log(typeof Number(valueB)); // number

//------------------------------------------------------//

// ---- Методи Number.parseInt() і Number.parseFloat()
// Перетворюють рядок символ за символом, доки це можливо. У разі виникнення помилки повертається підсумкове число.

// ---- Метод Number.parseInt() парсить з рядка ціле число.

// console.log(Number.parseInt("5px")); // 5
// console.log(Number.parseInt("12qwe74")); // 12
// console.log(Number.parseInt("12.46qwe79")); // 12
// console.log(Number.parseInt("qweqwe")); // NaN

// ---- Метод Number.parseFloat() парсить з рядка дробове число.

// console.log(Number.parseFloat("5px")); // 5
// console.log(Number.parseFloat("12qwe74")); // 12
// console.log(Number.parseFloat("12.46qwe79")); // 12.46
// console.log(Number.parseFloat("qweqwe")); // NaN

//--------------------------------------------------------//

// Перевірка на число
// Для перевірки на число можна використовувати метод Number.isNaN(val). Він перевіряє, чи вказане значення є NaN. Метод відповідає на запитання "Це Not A Number?" і повертає:

// true - якщо значення val - NaN
// false - якщо значення val - не NaN
// Для всіх значень val, крім NaN, при передачі в Number.isNaN(val) поверне false. Цей метод не намагається перетворити val в число, а просто виконує перевірку на NaN.

// const validNumber = Number("51"); // 51
// console.log(Number.isNaN(validNumber)); // false

// const invalidNumber = Number("qweqwe"); // NaN
// console.log(Number.isNaN(invalidNumber)); // true

//-------------------------------------------------------//

// ---- Додавання чисел з рухомою крапкою (комою)
// Додаючи нецілі числа, в JavaScript і в інших мовах програмування є особливість. Якщо коротко, то 0.1 + 0.2 не дорівнює 0.3, результат додавання буде більший, ніж 0.3. Це тому що машина рахує у двійковій системі.

// Число 0.1 у двійковій системі числення - це нескінченний дріб, оскільки у двійковій системі одиниця не ділиться на десять. Двійкове значення нескінченних дробів зберігається тільки до певного знаку, тому виникає неточність. При додаванні 0.1 і 0.2, додаються дві неточності, виходить незначна, але все-таки помилка в обчисленнях.

// console.log(0.1 + 0.2 === 0.3); // false
// console.log(0.1 + 0.2); // 0.30000000000000004

// Звичайно, це не значить, що точні обчислення для таких чисел неможливі. Існує декілька методів вирішення цієї проблеми.

// Можна зробити їх цілими, помноживши на N, додати, а потім результат поділити також на N.

// console.log(0.17 + 0.24); // 0.41000000000000003
// console.log((0.17 * 100 + 0.24 * 100) / 100); // 0.41

// Ще один спосіб - додати, а результат скоротити до певного знаку після коми за допомогою методу toFixed().

// console.log(0.17 + 0.24); // 0.41000000000000003
// console.log((0.17 + 0.24).toFixed(2)); // 0.41

// ---------------------------------------------------------------//

// *** Клас Math
// Один із вбудованих класів, який надає набір методів для роботи з числами. Знання всіх методів напам'ять не вимагається, тільки деяких, найбільш корисних.

// // Math.floor(num) - повертає найменше ціле число,
// // менше, або яке дорівнює зазначеному числу
// console.log(Math.floor(1.7)); // 1

// // Math.ceil(num) - повертає найбільше ціле число,
// // більше, або яке дорівнює зазначеному числу.
// console.log(Math.ceil(1.2)); // 2

// // Math.round(num) - повертає значення числа,
// // округленого до найближчого цілого
// console.log(Math.round(1.2)); // 1
// console.log(Math.round(1.5)); // 2

// // Math.max(num1, num2, ...) - повертає найбільше ціле число з набору
// console.log(Math.max(20, 10, 50, 40)); // 50

// // Math.min(num1, num2, ...) - повертає найменше ціле число з набору
// console.log(Math.min(20, 10, 50, 40)); // 10

// // Math.pow(base, exponent) - піднесення до степеня
// console.log(Math.pow(2, 4)); // 16

// // Math.random() - повертає псевдовипадкове число в діапазоні [0, 1)
// console.log(Math.random()); // випадкове число між 0 і 1
// console.log(Math.random() * (10 - 1) + 1); // псевдовипадкове число від 1 до 10

// ----- Шаблонні рядки
// Шаблонні рядки - це альтернатива конкатенації зі зручнішим синтаксисом. Шаблонний рядок береться у зворотні (косі) лапки, замість подвійних або одинарних, і може містити заповнювачі місця, які позначаються знаком долара і фігурними дужками - ${вираз}.

// // Використовуючи змінні, необхідно скласти рядок з підставленими значеннями
// const guestName = "Манго";
// const roomNumber = 207;
// const greeting =
//   "Welcome " + guestName + ", your room number is " + roomNumber + "!";
// console.log(greeting); // "Welcome Mango, your room number is 207!"

// Складати рядки з підставленими значеннями, використовуючи конкатенацію, - дуже незручно. На допомогу приходять шаблонні рядки та інтерполяція.

// const guestName = "Манго";
// const roomNumber = 207;
// const greeting = `Welcome ${guestName}, your room number is ${roomNumber}!`;
// console.log(greeting); // "Welcome Mango, your room number is 207!"

//-------------------------------------------------------------------------------//

// ** Властивості і методи рядків
// У кожного рядка є вбудовані властивості і методи, розглянемо деякі з них.

// Властивість length
// Для того, щоб дізнатися довжину рядка, тобто кількість його символів, у всіх рядків є вбудована властивість length, значення якої можна отримати, звернувшись до нього через крапку після імені змінної або рядкового літерала.

// const message = "Welcome to Bahamas!";
// console.log(message.length); // 19
// console.log("There is nothing impossible to him who will try".length); // 47

// ----- Методи toLowerCase() і toUpperCase()
// Повертають новий рядок у відповідному регістрі, не змінюючи оригінальний рядок.

// const message = "Welcome to Bahamas!";
// console.log(message.toLowerCase()); // "welcome to bahamas!"
// console.log(message.toUpperCase()); // "WELCOME TO BAHAMAS!"
// console.log(message); // "Welcome to Bahamas!"

// Бувають ситуації, коли всі символи в рядку необхідно перетворити в один регістр, верхній або нижній. Наприклад, для пошуку за ключовим словом, коли користувач вводить рядок 'saMsUng', а порівняти його потрібно з рядком 'samsung' або 'SAMSUNG'.

// console.log("saMsUng" === "samsung"); // false
// console.log("saMsUng" === "SAMSUNG"); // false

// Щоб не вимагати абсолютно точне введення, можна зробити «нормалізацію» введеного користувачем рядка, тобто перетворити всі його символи у верхній або нижній регістр. Методи рядка toLowerCase() і toUpperCase() повернуть новий рядок у відповідному регістрі, не змінюючи оригінальний.

// const BRAND_NAME = "SAMSUNG";
// const userInput = "saMsUng";
// const normalizedToUpperCaseInput = userInput.toUpperCase();

// console.log(userInput); // 'saMsUng'
// console.log(userInput === BRAND_NAME); // false
// console.log(normalizedToUpperCaseInput); // 'SAMSUNG'
// console.log(normalizedToUpperCaseInput === BRAND_NAME); // true

//------------------------------------------------------------------------------//

// ---- Метод indexOf()
// Повертає позицію (індекс), на якій знаходиться перший збіг підрядка або -1, якщо нічого не знайдено.

// const message = "Welcome to Bahamas!";
// console.log(message.indexOf("to")); // 8
// console.log(message.indexOf("hello")); // -1

// ----  Метод includes()
// Перевіряє, чи міститься підрядок в рядку, повертає буль - true, якщо міститься, і false - в іншому випадку. Регістр символів в рядку і підрядку має значення, оскільки, наприклад, літера "a" не дорівнює літері "А".

// const productName = "Ремонтний дроїд";

// console.log(productName.includes("н")); // true
// console.log(productName.includes("Н")); // false
// console.log(productName.includes("дроїд")); // true
// console.log(productName.includes("Дроїд")); // false
// console.log(productName.includes("Ремонтний")); // true
// console.log(productName.includes("ремонтний")); // false

//-----------------------------------------------------------//

// ---- Метод endsWith()
// Дозволяє визначити, чи завершується рядок символами (підрядком), зазначеними в дужках, повертаючи true або false.

// const jsFileName = "script.js";
// console.log(jsFileName.endsWith(".js")); // true

// const cssFileName = "styles.css";
// console.log(cssFileName.endsWith(".js")); // false

// ---- Методи replace() і replaceAll()
// Повертає новий рядок, в якому перше (replace) або усі збіги (replaceAll) підрядка замінені на вказане значення.

// const jsFileName = "script.js";
// const minifiedJsFileName = jsFileName.replace(".js", ".min.js");
// console.log(minifiedJsFileName); // "script.min.js"

// const cssFileNames = "styles.css, about.css, portfolio.css";
// const minifiedCssFileNames = cssFileNames.replaceAll(".css", ".min.css");
// console.log(minifiedCssFileNames); // "styles.min.css, about.min.css, portfolio.min.css"

//  ---- Метод slice()
// Метод рядків slice (startIndex, endIndex) використовується для створення копії частини або всього рядка. Він робить копію елементів рядка від startIndex і до, але не включно endIndex і повертає новий рядок, не змінюючи оригінал.

// const productName = "Repair droid";
// console.log(productName.slice(0, 4)); // "Repa"
// console.log(productName.slice(3, 9)); // "air dr"
// console.log(productName.slice(0, productName.length)); // "Repair droid"
// console.log(productName.slice(6, productName.length)); // "droid"

//** --------------------------------------------------------------------- **/

// ** Логічні оператори!
// Логічні оператори використовуються для перевірки умов з багатьма виразами, наприклад в операціях порівняння.
// Запам'ятайте 6 хибних (falsy) значень, що приводяться до false у логічному перетворенні: 0, NaN, null, undefined,
// порожній рядок і false.Абсолютно все інше приводиться до true.
// ** Логічні оператори!
// Існує три логічні оператори: (&& (і)), (||)або), (!)ні) які використовуються для перевірки виконання множинних виразів.

// ---- Логічне «І»
// Оператор && приводить всі операнди до буля і повертає значення одного з них.
// Лівий операнд - якщо його можна привести до false, і правий - в інших випадках.

// вираз && вираз

// У наступному прикладі обидві умови повернуть true, тому результатом всього виразу буде true - повернеться значення правого операнда
// const age = 20;
// console.log(age > 10 && age < 30); // true && true -> true

// Якщо хоча б один із операндів буде приведений до false, результатом виразу буде його значення.

// const age = 50;
// console.log(age > 10 && age < 30); // true && false -> false
// console.log(age > 80 && age < 120); // false && true -> false

// Тобто, логічне «І» зупиняється на хибному і повертає те, на чому зупинилось, або останній операнд.

// console.log(1 && 5); // true && true -> 5
// console.log(5 && 1); // true && true -> 1
// console.log(0 && 2); // false && true -> 0
// console.log(2 && 0); // true && false -> 0
// console.log("" && "Mango"); // false && true -> ""
// console.log("Mango" && ""); // true && false -> ""
// console.log("Mango" && "Poly"); // true && true -> "Poly"
// console.log("Poly" && "Mango"); // true && true -> "Mango"

// Тобто, логічне «І» зупиняється на хибному і повертає те, на чому зупинилось, або останній операнд.
// console.log(1 && 5); // true && true -> 5
// console.log(5 && 1); // true && true -> 1
// console.log(0 && 2); // false && true -> 0
// console.log(2 && 0); // true && false -> 0
// console.log("" && "Mango"); // false && true -> ""
// console.log("Mango" && ""); // true && false -> ""
// console.log("Mango" && "Poly"); // true && true -> "Poly"
// console.log("Poly" && "Mango"); // true && true -> "Mango"

// ** ЦІКАВО **
// Виконуючи логічне «І», правий операнд може не обчислюватися у випадку, якщо лівий був приведений до false.

// ---- Логічне (||) «АБО»
// Оператор || приводить всі операнди до буля і повертає значення одного з них. Лівий операнд - якщо його можна привести до true, і правий - в інших випадках.

// вираз || вираз

// У наступному прикладі умова зліва поверне true, тому результатом всього виразу буде true - повернеться значення першого операнда, яке було приведене до true.

// const age = 5;
// console.log(age < 10 || age > 30); // true || false -> true

// В цьому випадку результатом теж буде true, оскільки хоча б один із операндів, в цьому випадку правий, був приведений до true.

// const age = 40;
// console.log(age < 10 || age > 30); // false || true -> true

// А тут жодна з умов не виконується, тому отримуємо false - значення останнього операнда.

// const age = 20;
// console.log(age < 10 || age > 30); // false || false -> false

// Тобто, логічне «АБО» зупиняється на правді і повертає те, на чому зупинилося або останній операнд.

// console.log(true || false); // true
// console.log(false || true); // true
// console.log(true || true); // true

// console.log(3 || false); // 3
// console.log(false || 3); // 3
// console.log(3 || true); // 3
// console.log(true || 3); // true

// ЦІКАВО
// Виконуючи логічне «АБО», правий операнд може не обчислюватися у випадку, якщо лівий був приведений до true.

// ---- Логічне «НЕ»
// Всі оператори, які ми розглядали до цього, були бінарними - містять два операнди: лівий і правий. Логічне «НЕ» - це унарний оператор, який виконує операцію над одним операндом з правої сторони.

// !вираз

// Оператор ! приводить операнд до буля, якщо необхідно, а потім робить інверсію - змінює його на протилежний true -> false або false -> true.

// console.log(!true); // false
// console.log(!false); // true
// console.log(!3); // !3 -> !true -> false
// console.log(!"Mango"); // !"Mango" -> !true -> false
// console.log(!0); // !0 -> !false -> true
// console.log(!""); // !"" -> !false -> true

// const isOnline = true;
// const isNotOnline = !isOnline; // !isOnline -> !true -> fals

//-------------------------------------------------------------------------------------------------//

// ** ---- Тернарний оператор!
// Тернарний оператор використовується у якості синтаксично коротшої заміни інструкції if...else, коли одній і тій самій змінній необхідно присвоїти різні значення за умовою.

// <умова> ? <вираз_якщо_умова_правдива> : <вираз_якщо_умова_хибна>

// Працює за наступною схемою:

// Обчислюється умова.
// Якщо умова правдива, тобто приводиться до true, обчислюється вираз після ?.
// Якщо умова хибна, тобто приводиться до false, обчислюється вираз після :.
// Значення обчисленого виразу повертається у якості результату роботи тернарного оператора.
// let type;
// const age = 20;

// if (age >= 18) {
//   type = "adult";
// } else {
//   type = "child";
// }

// console.log(type); // "adult"

// Виконаємо рефакторинг, замінивши if...else на тернарний оператор.

// const age = 20;
// const type = age >= 18 ? "adult" : "child";
// console.log(type); // "adult"

// -------------------------------------------------------------------------------------------------- //

// ** Инструмент  "parseInt" и "pasrseFloat: для для числового конструктора "Namber"!
// ---- let elementWidth = "50.505";
// elementWidth = Number.parseInt(elementWidth);
// console.log("elementWidth:", elementWidth);

// ---- let elementWidth = "50.505";
// elementWidth = Number.parseFloat(elementWidth);
// console.log("elementWidth:", elementWidth);

// ---- Новый метод - метод число. toFixed(digits).
// let salary = 1300.1672;
// salary = (salary.toFixed(2));
// salary = Number(salary);
// console.log(salary);

// но такая запись короче! Метод "матрешки"!

// ---- let salary = 1300.1672;
// salary = Number(salary.toFixed(2));
// console.log(salary);

//-------------------------------------------------------------------------------------------------//
// Объект "Math"
// ---- возведение в степень!
// ---- Exponent operator!
// const base = 2;
// const pawer = 5;
// const result = Math.pow(base, pawer);
// console.log(result);

// но в современном  можно использовать вместо (Math.pow) оператор "экспонент"(**)
// ---- возведение в степень!
// const base = 2;
// const pawer = 5;
// console.log(base ** pawer);
// -------------------------------------------------------------------------------------------------- //

// Напиши скрипт, который просит пользователя ввести число и степень,
// возводить число в эту степень и вывести в консоль!

// * метод построения действий для выполнения.
// 1. ---- попросить ввести число и сохранить в переменную.

// let base = prompt('Давай число');
// base = Number(base);
// console.log(base);

// 2. ---- попросить ввести степень и сохранить в переменную.

// let pawer = prompt('Давай степень');
// pawer = Number(pawer);
// console.log(pawer);

// 3. ---- ввозвести введенные данные и вывести в консоль.

// const result = base ** pawer;
// console.log(result);

// -------------------------------------------------------------------------------------------- //

// ** Генерим псевдослучайные числа!
// ---- Math.random
// ---- Math.round


//Формула - Math.random() * (max - min) + min
// const max = 80;
// const min = 10;
// const result = Math.round(Math.random() * (max - min) + min);

// console.log(result);

// ----------------------------------------------------------------------------------------------
// +++++++++++++++++++++++++ Задачка (if или switch)++++++++++++++++++++++++++++ //
// ** Напиши скрипт стоимости отеля по количеству звезд!
// 1 - 20$; 2 - 30$; 3 - 50$; 4 - 70$; 5 - 120$.
// * если в переменной stars, что-то кроме 1-5, то выведи строку - "Такого колличества звезд нет!"

// const stars = 3;
// let price;

// if (stars === 1) {
//     price = 20;
// } else if (stars === 2) {
//   price = 30;
// } else if (stars === 3) {
//     price = 50;
// } else if (stars === 4) {
//     price = 70;
// } else if (stars === 5) {
//     price = 120;
// } else {
//     console.log("Такого колличества звезд нет!");
// }
// console.log(price);

// ---- если нам нужно  сравнивать 1 переменную (===) а не =>,<=....) с разными значениями то лучше применять метод "switch"//
// const stars = 3;
// let price;

// switch (stars) {
//     case 1:
//         price = 20;
//         break;
    
//     case 2:
//         price = 30;
//         break;
    
//     case 3:
//         price = 50;
//         break;
    
//     case 4:
//         price = 70;
//         break;
    
//     case 5:
//         price = 120;
//         break;
//     default:
//         console.log("Такого колличества звезд нет!");
// }

// console.log(price);

// ---- Напиши скрипт стоимости отеля по количеству звезд!
// 1,2 - 40$; 3,4 - 75$; 5,5+ - 120$.

// const stars = 3;
// let price;

// if (stars === 1 || stars === 2) {
//     price = 40;
// } else if (stars === 3 || stars === 4) {
//     price = 70;
// } else if (stars === 5) {
//     price = 120;
// } else {
//     console.log("Такого колличества звезд нет!");
// }
// console.log(price);

// const stars = 3;
// let price;

// switch (stars) {
//   case 1:
//   case 2:
//     price = 40;
//     break;

//   case 3:
//   case 4:
//     price = 70;
//     break;

//   case 5:
//     price = 120;
//     break;
    
//   default:
//     console.log("Такого колличества звезд нет!");
// }

// console.log(price);

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//

// Напиши скрипт выбора опции доставки товара.
// Опции хранятся в переменной obtion: 1- самовывоз; 2-курьер; 3-почта.

// В переменную записать сообщение в зависимости от опции:
// -- "Вы сможете забрать товар завтра с 12:00 в нашем офисе!"
// -- "Курьер доставит товар завтра с 9:00 до 18:00."
// -- "Посылка будет отправленна сегодня!"
// -- "С вами свяжется менеджер."

// Алгоритм выполнения задания:
// 1. Зделать переменные.

// 2. Зделать  switch 1, 2, 3.

// 3. В каждом кейсе записать меседж строку.

// 4. Сделать лог меседж.

// const option = 2;
// let message = '';

// switch (option) {
//     case 1:
//         message = "Вы сможете забрать товар завтра с 12:00 в нашем офисе!";
//         break;
    
//     case 2:
//         message = "Курьер доставит товар завтра с 9:00 до 18:00.";
//         break;
    
//     case 3:
//         message = "Посылка будет отправленна сегодня!";
//         break;
    
//         default:
//         message = "С вами свяжется менеджер.";
// }
// console.log(message);


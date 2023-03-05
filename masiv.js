// ============================= МАСИВЫ ==============================//
// ---- Цикл for...of ---- //
// Конструкція for...of оголошує цикл, що перебирає ітерабельні об'єкти, як-от масиви і рядки.
// Тіло циклу буде виконуватися для значення кожного елемента.Це хороша заміна циклу for, якщо не потрібен доступ до лічильника ітерації.

// for (const variable of iterable) {
//   // тіло циклу
// }


// const clients = ["Mango", "Poly", "Kiwi", "Pango", "Ajax"];
// for (const client of clients) {
// console.log(clients);
// }
// const string = "javascript";

// for (const character of string) {
// console.log(character);
// }

// ---- Оператори break і continue ---- //
// Будемо шукати ім'я клієнта в масиві імен, якщо знайшли - перериваємо цикл, оскільки немає сенсу шукати далі, імена у нас унікальні.

// const clients = ["Mango", "Poly", "Ajax"];
// const clientNameToFind = "Poly";
// let message;

// for (const client of clients) {
//   // На кожній ітерації будемо перевіряти чи збігається елемент масиву з
//   // іменем клієнта. Якщо збігається - записуємо в message повідомлення
//   // про успіх і робимо break, щоб далі не шукати
//   if (client === clientNameToFind) {
//     message = "Клієнт з таким ім'ям є в базі даних!";
//     break;
//   }

//   // Якщо вони не збігаються - записуємо в message повідомлення про відсутність імені
//   message = "Клієнт з таким ім'ям відсутній в базі даних!";
// }

// console.log(message); // "Клієнт з таким ім'ям є в базі даних!"

// ---- Краще виконання ----//
// const clients = ["Mango", "Poly", "Kiwi", "Pango", "Ajax"];
// const clientNameToFind = "Pango";
// let message = "Кліента з таким ім'ям не знайдено в базі даних!";

// for (const client of clients) {
//     if (client === clientNameToFind) {
//         message = "Клієнт з таким ім'ям є в базі даних!";
//         break;
//     }

// }
// console.log(message);

// const numbers = [1, 3, 14, 18, 4, 7, 29, 6, 34];
// const threshold = 15;

// // Для чисел, менших ніж порогове значення, спрацьовує continue, виконання тіла
// // припиняється і управління передається на наступну ітерацію.
// for (let i = 0; i < numbers.length; i += 1) {
//   if (numbers[i] < threshold) {
//     continue;
//   }

//   console.log(`Число більше за ${threshold}: ${numbers[i]}`); // 18, 29, 34
// }

// const clients = ["Mango", "Poly", "Kiwi", "Pango", "Ajax"];
// console.log(clients.includes("Kiwi"));
// console.log(clients.includes("Monkong"));

// const fruit = "apple";

// if (fruit === "apple" ||
//     fruit === "strawberry" ||
//     fruit === "cherry" ||
//     fruit === "cranberries"
//  ) {
//   console.log("It is a red fruit!");
// }

// ==================================== Методы ====================================  //

// ---- Методи split() і join() ----
// Метод split(delimiter) перетворює рядок в масив, «розбиваючи» його роздільником delimiter. Якщо роздільник - це порожній рядок, то створиться масив окремих символів. Роздільником може бути один або декілька символів.

// const name = "Mango";
// console.log(name.split("")); // ["M", "a", "n", "g", "o"]

// const message = "JavaScript - це цікаво";
// console.log(message.split(" ")); // ["JavaScript", "-", "це", "цікаво"]

// Метод масивів join(delimiter) об'єднує елементи масиву у рядок. У рядку елементи будуть розділені символом або групою символів, зазначених в delimiter. Тобто ця операція протилежна методу рядків split(delimiter).

// const words = ["JavaScript", "це", "цікаво"];
// console.log(words.join("")); // "JavaScriptцецікаво"
// console.log(words.join(" ")); // "JavaScript це цікаво"
// console.log(words.join("-")); // "JavaScript-це-цікаво"

// ---- Метод indexOf() ----
// indexOf(value) повертає перший індекс, в якому елемент зі значенням value був знайдений в масиві, або число -1, якщо такий елемент відсутній. Використовуйте indexOf тоді, коли необхідно отримати сам індекс елемента.

// const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
// console.log(clients.indexOf("Poly")); // 2
// console.log(clients.indexOf("Monkong")); // -1

// ---- Метод includes() ----
// includes(value) перевіряє, чи містить масив елемент зі значенням value і повертає true або false відповідно. Застосування цього методу корисне в ситуаціях, коли необхідно перевірити, чи є елемент в масиві і не важлива його позиція (індекс).

// const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
// console.log(clients.includes("Poly")); // true
// console.log(clients.includes("Monkong")); // false

// Перевірка багатьох умов з includes()
// На перший погляд код наступного прикладу виглядає добре.

// const fruit = "apple";

// if (fruit === "apple" || fruit === "strawberry") {
//   console.log("It is a red fruit!");
// }

// Однак, що робити, якщо у нас буде більше червоних фруктів, наприклад, ще вишня (cherry) або журавлина (cranberries)? Чи будемо ми розширювати умову за допомогою додаткових ||?

// const fruit = "apple";

// if (
//   fruit === "apple" ||
//   fruit === "strawberry" ||
//   fruit === "cherry" ||
//   fruit === "cranberries"
// ) {
//   console.log("It is a red fruit!");
// }

// Можемо переписати умову, використовуючи includes(), це дуже просто і масштабовано.

// // Виносимо варіанти в масив
// const redFruits = ["apple", "strawberry", "cherry", "cranberries"];
// const fruit = "cherry";
// // Перевіряємо присутність елемента
// const hasFruit = redFruits.includes(fruit);

// if (hasFruit) {
//   console.log(`${fruit} is a red fruit!`);
// }

// ---- Методи push() і pop() ----
// Додають або видаляють крайні елементи масиву. Працюють тільки з крайнім лівим і крайнім правим елементом,
// і не можуть вставити або видалити елемент з довільної позиції.

// ----Метод push() ---- додає один або декілька елементів наприкінці масиву,
// без необхідності зазначати індекси елементів, що додаються.
// Повертає довжину масиву після додавання елементів.
// const numbers = [];

// numbers.push(1);
// console.log(numbers); // [1]

// numbers.push(2);
// console.log(numbers); // [1, 2]

// numbers.push(3);
// console.log(numbers); // [1, 2, 3]

// numbers.push(4);
// console.log(numbers); // [1, 2, 3, 4]

// numbers.push(5);
// console.log(numbers); // [1, 2, 3, 4, 5]

// ---- Метод pop() ---- видаляє останній елемент з кінця масиву і повертає видалений елемент.
// Якщо масив порожній, метод повертає undefined.
// const numbers = [1, 2, 3, 4, 5];

// console.log(numbers.pop()); //  5
// console.log(numbers); // [1, 2, 3, 4]

// console.log(numbers.pop()); //  4
// console.log(numbers); // [1, 2, 3]

// console.log(numbers.pop()); //  3
// console.log(numbers); // [1, 2]

// console.log(numbers.pop()); //  2
// console.log(numbers); // [1]

// console.log(numbers.pop()); //  1
// console.log(numbers); // []

// ---- Метод slice() ----
// slice(begin, end) повертає новий масив, що містить копію частини вихідного масиву,
// не змінюючи його.Копія створюється з begin і до,
// але не включно, end - індекси елементів вихідного масиву.
// const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
// console.log(clients.slice(1, 3)); // ["Ajax", "Poly"]

// Якщо не зазначено end, копіювання буде зі start і до кінця вихідного масиву.
// const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
// console.log(clients.slice(1)); // ["Ajax", "Poly", "Kiwi"]
// console.log(clients.slice(2)); // ["Poly", "Kiwi"]

// Якщо значення start від'ємне, а end не зазначено -
// будуть скопійовані останні start елементи
// const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
// console.log(clients.slice(-2)); // ["Poly", "Kiwi"]

// ---- Метод splice() ----
// Швейцарський ніж для роботи з масивами, якщо вихідний масив необхідно змінити. Видаляє, додає і замінює елементи у довільному місці масиву.

// Видалення
// Щоб видалити елементи в масиві, передаються два аргументи.

// splice(position, num)

// position - вказує на позицію (індекс) першого елемента для видалення
// num - визначає кількість елементів, що видаляються
// Метод splice змінює вихідний масив і повертає масив, що містить видалені елементи. Наприклад, у нас є масив оцінок, який містить п'ять чисел від 1 до 5.

// const scores = [1, 2, 3, 4, 5];

// // Видаляємо три елементи масиву, починаючи з першого елемента (індекс 0)
// const deletedScores = scores.splice(0, 3);

// // Тепер масив scores містить два елементи
// console.log(scores); // [4, 5]

// // А масив deletedScores містить три видалені елементи
// console.log(deletedScores); // [1, 2, 3]

// Додавання
// Для того, щоб додати один або декілька елементів в масив, необхідно передати три або більше аргументи, за такої умови, другий аргумент повинен дорівнювати нулю.

// splice(position, 0, new_element_1, new_element_2, ...)

// Аргумент position вказує початкову позицію в масиві, куди будуть вставлені нові елементи.
// Другий аргумент - це нуль, він говорить методу не видаляти елементи в місці додавання нових.
// Третій, четвертий і всі наступні аргументи - це нові елементи, які додаються в масив.
// Наприклад, у нас є масив з назвами кольорів у вигляді рядків. Додамо новий колір перед елементом з індексом 2.

// const colors = ["red", "green", "blue"];

// colors.splice(2, 0, "purple");
// console.log(colors); // ["red", "green", "purple", "blue"]

// Можна додати довільну кількість елементів, передавши четвертий, п'ятий аргумент тощо.

// const colors = ["red", "green", "blue"];

// colors.splice(1, 0, "yellow", "pink");
// console.log(colors); // ["red", "yellow", "pink", "green", "blue"]

// Заміна
// Заміна - це операція додавання, в якій видаляються елементи в місці додавання нових. Для цього необхідно передати мінімум три аргументи. Кількість елементів, що видаляються і додаються, може не збігатися.

// splice(position, num, new_element_1, new_element_2, ...)

// position - вказує на позицію (індекс) першого елемента для видалення
// num - визначає кількість елементів, що видаляються
// Третій, четвертий і всі наступні аргументи - це нові елементи, які додаються в масив.
// Наприклад, у нас є масив мов програмування з чотирьох елементів.

// const languages = ["C", "C++", "Java", "JavaScript"];

// // Заміняємо елемент з індексом 1 на новий
// languages.splice(1, 1, "Python");
// console.log(languages); // ["C", "Python", "Java", "JavaScript"]

// // Заміняємо один елемент (з індексом 2) на декілька
// languages.splice(2, 1, "C#", "Swift", "Go");
// console.log(languages); // ["C", "Python", "C#", "Swift", "Go", "JavaScript"

// ---- Метод concat() ----
// Об'єднує два або більше масивів в один. Він не змінює масив, на якому викликається, а повертає новий. Порядок аргументів методу впливає на порядок елементів нового масиву.

// const oldClients = ["Mango", "Ajax", "Poly", "Kiwi"];
// const newClients = ["Monkong", "Singu"];

// const allClientsWithOldFirst = oldClients.concat(newClients);
// console.log(allClientsWithOldFirst); // ["Mango", "Ajax", "Poly", "Kiwi", "Monkong", "Singu"]

// const allClientsWithNewFirst = newClients.concat(oldClients);
// console.log(allClientsWithNewFirst); // ["Monkong", "Singu", "Mango", "Ajax", "Poly", "Kiwi"]

// console.log(oldClients); // ["Mango", "Ajax", "Poly", "Kiwi"]
// console.log(newClients); // ["Monkong", "Singu"]

// ================================================================================  //
// const clients = ["Mango", "Ajax", "Poly", "Kiwi", "Tom"];

// Преребор итерации масива:
// - for если нужен индех или нужно изменить масив.
// - for...of если индех не нужен и не нужно менять масив.

// const friends = ["Mango", "Kiwi", "Poly", "Ajex"];
// const lastIndex = friends.length - 1;
// console.table(friends);

// for (let i = 0; i <= lastIndex; i += 1) {
//     friends[i] += '-1';
// }

// console.table(friends);

// -- или так можно! --
// const friends = ["Mango", "Kiwi", "Poly", "Ajex"];
// const lastIndex = friends.length - 1;
// console.table(friends);

// for (let i = 0; i < friends.length; i += 1) {
// friends[i] += "-1"; // обращение к ячейке в памяти, для изменения елемента масива!
// }
// console.table(friends);

// const friends = ["Mango", "Kiwi", "Poly", "Ajex"];
// for (const friend of friends) {
//     console.log(friends);

// }

// ==================== Задача №1 ==================== //
// Подсчитать общую сумму покупок в корзине.

// const card = [54, 28, 105, 78, 92, 17, 120];
// // 2 - сделать переменную общей суммы "totall" до цикла!
// let totalAmountOfPurchases = 0;
// // 1 - перебрать масив
// for (let i = 0; i < card.length; i += 1) {
//   console.log(card[i]);
// // 3 - каждый элемент приплюсовать к переменной "totall"
//   totalAmountOfPurchases += card[i];
// }
// console.log(`Total:`, totalAmountOfPurchases);

// ---- Другой вариант, с коротким кодом.
// for (const value of card) {
//     totalAmountOfPurchases += value;
// }
// console.log(`Total:`, totalAmountOfPurchases);

// ==================== Задача №2 ==================== //
// К общей сумме добавить налог.
// const card = [54, 28, 105, 78, 92, 17, 120];
// for (let i = 0; i < card.length; i += 1) {
//     card[i] = Math.round(card[i] * 1.2);
// }
// console.log(card);

// ==================== Задача №3 ==================== //

// Напиши скрипт который подсчитывает сумму всех чётных чисел в масиве.
// const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 38, 18, 11, 14];
// let totalNumbers = 0;

// for (let i = 0; i < numbers.length; i += 1) {
// const number = numbers[i];
//     console.log(numbers[i]);
//     if (number % 2 === 0) {
//     console.log("Чётное!");
//     totalNumbers += numbers[i];
//     }
// }
// console.log(`Total:`, totalNumbers);

// ------ или ------

// for (const number of numbers) {
//     totalNumbers += number;
// }
// console.log(`Total:`, totalNumbers);

// ---- ok ----
// for (const number of numbers) {
//   // console.log(number);
//   if (number % 2 === 0) {
//     console.log(`${number} - Чётное`);
//     totalNumbers += number;
//   }
// }
// console.log('Total:', totalNumbers);

// ==================== Задача №4 ==================== //
/*
*  Напиши скрипт поиска "Логина".
*  - если логина нет выведи сообщение: "Пользователь (Login) не найден!"
*  - если логина найден выведи сообщение: "Пользователь (Login) найден!"
*  сначала через for;
*  потом через for ... of;
*  логика break;
*  метод includes() с тернарнім оператором.
*/
// const logins = ["eccosoft", "moby", "doggycoin", "findcoin", "rangestar"];
// const loginToFind = "doggycoin";
// let message = `Пользователь ${loginToFind} не найден!`;
// for (let i = 0; i < logins.length; i += 1) {
//   const login = logins[i];
//   // console.log(logins[i]);
//   if (login === loginToFind) {
//     message = `Пользователь ${loginToFind} найден!`;
//     break;
//   }
// }
// console.log(message);

// ---- ok ----
// for (const login of logins) {
//   if (login === loginToFind) {
//     message = `Пользователь ${loginToFind} найден!`;
//     break;
//   }
// }
// console.log(message);

// ---------- Лучший способ для нахождения строки или там чего-то! ------------
// message = logins.includes(loginToFind)
//   ? `Пользователь ${loginToFind} найден!`
//   : `Пользователь ${loginToFind} не найден!`;
//   console.log(message);

// =============== Задача №5 ================ //
/*
* Напиши скрипт поиска самого маленького числа в масиве, 
* при условии, что число уникальное (не повторяется!)
*/
// const numbers = [51, 18, 13, 27, 7, 85, 19];
// let smallesNumber = numbers[0];

// for (const number of numbers) {
//     if (number < smallesNumber) {
//         smallesNumber = number;
//     }
// }
// console.log(`Самое маленькое число:`, smallesNumber);

// =============== Задача №6 ================ //
/*
* Напиши скрипт, который обьединяет все элементы масива в одностроковое значение.
* елементов может быть произвольное количество,
* пусть елементы масива в строке будут разделены запятой!
* сначала через for; 
* затем через join().
*/
const frends = ['join', 'kiwi', 'bobi', 'polo', 'mango'];

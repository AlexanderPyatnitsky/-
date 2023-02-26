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


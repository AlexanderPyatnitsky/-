// ========== Задача №1 =========== //
/*
* Напиши функцию calculateTotalPrice(items)
* которая принимает масив цен(чисел) и возвращает их сумму.
*/
// const cart = [54, 28, 105, 70, 92, 17, 120, 12, 25, 90];
// let total = 0;
// for (const value of cart) {
//     total += value;
// }
// console.log(`Total: `, total);

// ===================================================== //
// const calculateTotalPrice = function (items) {
//     console.log(`items в нутри функции: `, items);
//     let total = 0;

//     for (const item of items) {
//         total += item;
//     }

//     return total;

// };

// const result1 = calculateTotalPrice([1, 2, 3]);
// const result2 = calculateTotalPrice([5, 10, 15, 20]);
// const result3 = calculateTotalPrice([100, 200, 300]);

// console.log(`Общая сумма покупок: ${ result1 }`);
// console.log(`Общая сумма покупок: ${ result2 }`);
// console.log(`Общая сумма покупок: ${ result3 }`);

// ========== Задача №2 =========== //
/*
* Напиши функцию findLogin (allLogins, login) для поиска логина.
* - если логин есть вывести сообщение: Пользователь [Login] найден.
* - если логин не найден вывести сообщение: Пользователь [Login] не найден.
*/
// const logins = ['m4ngoDoge', 'kiwidab3st', 'poly1scute', 'aj4xth3m4n'];

// const findLogin = function (allLogins, loginToFind) {
//     for (const logins of allLogins) {
//         if (logins === loginToFind) {
//         return `Пользователь ${loginToFind} найден.`;
//         }
        
//     }
//     return `Пользователь ${loginToFind} не найден.`;
// };

// console.log(findLogin(logins, "avokod3r"));
// console.log(findLogin(logins, "kiwidab3st"));
// console.log(findLogin(logins, "jam4l"));
// console.log(findLogin(logins, "aj4xth3m4n"));

// ---- вар. №2 ---- //
// const logins = ['m4ngoDoge', 'kiwidab3st', 'poly1scute', 'aj4xth3m4n'];
// const findLogin = function (allLogins, loginToFind) {
// const message = logins.includes(loginToFind)
//     ? `Пользователь ${loginToFind} найден.`
//     : `Пользователь ${loginToFind} не найден.`;
    
//     return message;
// };
// console.log(findLogin(logins, "avokod3r"));
// console.log(findLogin(logins, "kiwidab3st"));
// console.log(findLogin(logins, "jam4l"));
// console.log(findLogin(logins, "aj4xth3m4n"));

// ---- вар. №3 ---- //
// const logins = ['m4ngoDoge', 'kiwidab3st', 'poly1scute', 'aj4xth3m4n'];
// const findLogin = function (allLogins, loginToFind) {
// return logins.includes(loginToFind)
//     ? `Пользователь ${loginToFind} найден.`
//     : `Пользователь ${loginToFind} не найден.`;
// };
// console.log(findLogin(logins, "avokod3r"));
// console.log(findLogin(logins, "kiwidab3st"));
// console.log(findLogin(logins, "jam4l"));
// console.log(findLogin(logins, "aj4xth3m4n"));

// ========== Задача №3 =========== //
/*
* Напиши функцию findSmallesNumber(numbers) для поиска самого малого числа в масиве, 
* приусловии что числа уникальные (не повторяются).
*/
// const numbers = [51, 18, 13, 24, 7, 85, 19];
// let smallesNumber = numbers[0];
// for (const number of numbers) {
//     if (number < smallesNumber) {
//         smallesNumber = number;
//     }
// }

// console.log(`Самое маленькое число: `, smallesNumber);

// const numbers = [51, 18, 13, 24, 7, 85, 19];
// let smallesNumber = numbers[0];
// for (const number of numbers) {
//   if (number < smallesNumber) {
//     smallesNumber = number;
//   }
// }

// ---- вар 2 ----
// const findSmallesNumber = function (numbers) {
//     let smallesNumber = numbers[0];
//     for (const number of numbers) {
//         if (number < smallesNumber) {
//             smallesNumber = number;
//         }
//     }

//     return smallesNumber;
// }

// console.log(findSmallesNumber([3, 8, 12, -2, 15]));
// console.log(findSmallesNumber([100, 54, 8, 12, 47]));
// console.log(findSmallesNumber([7, 21, 84, 15, 4]));

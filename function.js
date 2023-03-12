// ========== Задача №1 =========== //
/*
* Напиши функцию calculateTotalPrice(items)
* которая принимает масив цен(чисел) и возвращает их сумму.
*/
const cart = [54, 28, 105, 70, 92, 17, 120, 12, 25, 90];
let total = 0;
for (const value of cart) {
    total += value;
}
console.log(`Total: `, total);
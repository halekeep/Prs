var num = +prompt ('Введите число');
console.log (typeof num);
if (num % 2 === 0) {
    alert('Это число чётное');
} else if (num % 2 === 1) {
    alert('Это число нечётное');
} else {
    alert('Упс, кажется вы ошиблись!');
}
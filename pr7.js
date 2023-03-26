const arr = [2, 5, 1, 0, null, 5, 8, 13, undefined];
let even = 0;
let odd = 0;
let undef = 0;
let zero = 0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
        if (arr[i] == 0){
            zero++;
            debugger;
        } else if (arr[i] == null) {
            undef++;
            debugger;    
        } else {
           even++;
           debugger; 
        }
    } else if (arr[i] % 2 == 1) {
        odd++;
        debugger;
    } else {
        undef++;
        debugger;
    }
}
console.log('Чётных ' + even);
console.log('Нечётных ' + odd);
console.log('Нулей ' + zero);
console.log('Неопределено ' + undef);
let map = new Map([
    ['blue', 'sea'],
    ['yellow', 'sun'],
    ['green', 'grass'],
    [true, 'real'],
    [false, 'unreal'],
    [1000, '8']
]);
let key = [];
for (let name of map.keys()) {
    key[key.length] = name;
}
let vle = [];
for (let vl of map.values()) {
    vle[vle.length] = vl;
}

for (let i = 0; i < key.length; i++) {
    console.log('Ключ - ',key[i],', Значение - ', vle[i]);
}


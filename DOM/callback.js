function callback(name, age, task) {
    console.log(' HELLO', name);
    console.log(' AGE', age);
    task();
}

function washHand() {
    console.log('wash hand soap');
}

function takeShower() {
    console.log('take a shower');
}

callback('sogir uddin', 17, takeShower);
callback('jagir', 13, washHand);
/**
 * Let's make a calculator 🧮
 */
type Command = 'add' | 'substract' | 'multiply' | 'divide' | 'remainder';

const calculate = (command: Command, num1: number, num2: number): number => {
    let result: number = 0;
    /* if(command === 'add') result = num1 + num2;
    else if(command === 'substract') result = num1 - num2;
    else if(command === 'multiply') result = num1 * num2;
    else if(command === 'divide') result = num1 / num2;
    else if(command === 'remainder') result = num1 % num2; */
    
    switch (command) {
        case 'add':
            return num1 + num2;
        case 'substract':
            return num1 - num2;
        case 'multiply':
            return num1 * num2;
        case 'divide':
            return num1 / num2;
        case 'remainder':
            return num1 % num2;
        default:    
            throw Error('unknown command');
    } 
}

console.log(calculate('add', 1, 3)); // 4
console.log(calculate('substract', 3, 1)); // 2
console.log(calculate('multiply', 4, 2)); // 8
console.log(calculate('divide', 4, 2)); // 2
console.log(calculate('remainder', 5, 2)); // 1

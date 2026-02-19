// Simple greeting function
function greet(name) {
    return `Hello, ${name}!`;
}

// Array of numbers and sum calculation
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((acc, num) => acc + num, 0);

console.log(greet('World'));
console.log(`Sum: ${sum}`);

// Simple object
const user = {
    name: 'John',
    age: 30,
    email: 'john@example.com'
};

console.log(user);

// Export for use in other modules
module.exports = { greet, user };
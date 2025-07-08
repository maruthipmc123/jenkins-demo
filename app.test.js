// app.test.js
const funcs = require('./app');

test('adds 2 + 3 to equal 5', () => {
	expect(funcs.add(2, 3)).toBe(5);
});

test('should return null if arguments are not numbers', () => {
	expect(funcs.add(2,'a')).toBeNull();

});


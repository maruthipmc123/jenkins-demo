// app.js
const funcs = {
      add: (num1, num2) => {
		if (typeof num1 !== 'number' || typeof num2 !== 'number') {
			return null;
		}
		return num1 + num2;
		}
};

module.exports = funcs;

// this is sample program

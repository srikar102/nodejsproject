const calculator = require("./calculator");

test("adds 5 + 3 = 8", () => {
    expect(calculator.add(5,3)).toBe(8);
});

test("subtract 10 - 4 = 6", () => {
    expect(calculator.subtract(10,4)).toBe(6);
});

test("multiply 5 * 2 = 10", () => {
    expect(calculator.multiply(5,2)).toBe(10);
});

test("divide 20 / 4 = 5", () => {
    expect(calculator.divide(20,4)).toBe(5);
});

test("division by zero", () => {
    expect(() => calculator.divide(10,0)).toThrow("Division by zero");
});
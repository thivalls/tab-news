// describe("Teste de jest", () => {
//   it("should compare number 1 with 1 as number", () => {
//     expect(1).toBe(1);
//   });

//   it("should compare 1 with 1 as string", () => {
//     expect(1).not.toBe("1");
//   });
// });

var calculator = require("./../models/calculator");

describe("Testing of calculator", () => {
  it("should sum two numbers", () => {
    var result = calculator.sum(2, 3);
    expect(result).toBe(5);
  });

  it("should sub two numbers with negative result", () => {
    var result = calculator.subtract(2, 3);
    expect(result).toBe(-1);
  });

  it("should sub two numbers with positive result", () => {
    var result = calculator.subtract(5, 2);
    expect(result).toBe(3);
  });

  it("should multiply two numbers", () => {
    var result = calculator.multiply(5, 2);
    expect(result).toBe(10);
  });

  it("should divide two numbers", () => {
    var result = calculator.divide(20, 2);
    expect(result).toBe(10);
  });

  it("should not divide per zero", () => {
    var result = calculator.divide(20, 0);
    expect(result).toEqual(new Error("Invalid divisor zero"));
  });
});

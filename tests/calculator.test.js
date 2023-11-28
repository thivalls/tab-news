describe("Teste de jest", () => {
  it("should compare number 1 with 1 as number", () => {
    expect(1).toBe(1);
  });

  it("should compare 1 with 1 as string", () => {
    expect(1).not.toBe("1");
  });
});

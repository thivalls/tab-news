describe("# Suite for API integration", () => {
  it("should GET api/v1/status and return 200", async () => {
    const result = await fetch("http://localhost:3000/api/v1/status");
    expect(result.status).toBe(200);
  });
});

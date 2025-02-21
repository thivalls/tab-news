describe("# Suite for API integration", () => {
  it("should GET api/v1/migrations and return 200", async () => {
    const response = await fetch("http://localhost:3000/api/v1/migrations");
    expect(response.status).toBe(200);

    const responseBody = await response.json();
    console.log(responseBody);
    expect(Array.isArray(responseBody)).toBeTruthy();
  });
});

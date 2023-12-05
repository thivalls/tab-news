describe("# Suite for API integration", () => {
  it("should GET api/v1/status and return 200", async () => {
    const response = await fetch("http://localhost:3000/api/v1/status");
    expect(response.status).toBe(200);
  });

  it("should GET api/v1/status with updated_at", async () => {
    const response = await fetch("http://localhost:3000/api/v1/status");
    const responseBody = await response.json();
    const testDate = new Date(responseBody.updated_at);
    expect(response.status).toBe(200);
    expect(responseBody.updated_at).toBeDefined();
    expect(responseBody.updated_at).not.toBeNull();
    expect(responseBody.updated_at).toEqual(testDate.toISOString());
    expect(typeof responseBody.updated_at).toEqual("string");
    expect(responseBody.updated_at.includes("T")).toBeTruthy();
    expect(testDate.toString()).not.toEqual("Invalid Date");
    expect(testDate).toBeDefined();
  });

  it("should GET api/v1/status with postgres_version", async () => {
    const response = await fetch("http://localhost:3000/api/v1/status");
    const responseBody = await response.json();

    expect(response.status).toBe(200);
    expect(responseBody.postgres_version).toBeDefined();
    expect(
      responseBody.postgres_version.includes("PostgreSQL 16"),
    ).toBeTruthy();
    expect(typeof responseBody.postgres_version).toEqual("string");
  });

  it("should GET api/v1/status with max_connections", async () => {
    const response = await fetch("http://localhost:3000/api/v1/status");
    const responseBody = await response.json();

    expect(response.status).toBe(200);
    expect(responseBody.max_connections).toBeDefined();
    expect(typeof responseBody.max_connections).toEqual("string");
    expect(responseBody.max_connections).toEqual("100");
  });

  it("should GET api/v1/status with opened_connections", async () => {
    const response = await fetch("http://localhost:3000/api/v1/status");
    const responseBody = await response.json();
    expect(response.status).toBe(200);
    expect(responseBody.opened_connections).toBeDefined();
    expect(typeof responseBody.opened_connections).toEqual("string");
  });

  it("Should close conections when it throws error to avoid leak connections at connections pool", async () => {
    for (let i = 0; i < 10; i++) {
      await fetch("http://localhost:3000/api/v1/error");
    }

    const response = await fetch("http://localhost:3000/api/v1/status");

    const responseBody = await response.json();
    expect(response.status).toBe(200);
    expect(responseBody.opened_connections).toBeDefined();
    expect(Number.parseInt(responseBody.opened_connections)).toBeLessThan(10);
  });
});

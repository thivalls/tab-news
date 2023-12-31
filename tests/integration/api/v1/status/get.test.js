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
    expect(responseBody.postgres_version).toEqual("16.1");
    expect(typeof responseBody.postgres_version).toEqual("string");
  });

  it("should GET api/v1/status with max_connections", async () => {
    const response = await fetch("http://localhost:3000/api/v1/status");
    const responseBody = await response.json();

    expect(response.status).toBe(200);
    expect(responseBody.max_connections).toBeDefined();
    expect(typeof responseBody.max_connections).toEqual("number");
    expect(responseBody.max_connections).toEqual(100);
  });

  it("should GET api/v1/status with opened_connections", async () => {
    const response = await fetch("http://localhost:3000/api/v1/status");
    const responseBody = await response.json();
    expect(response.status).toBe(200);
    expect(responseBody.opened_connections).toBeDefined();
    expect(typeof responseBody.opened_connections).toEqual("number");
    expect(responseBody.opened_connections).toEqual(1);
  });

  // SQL INJECTION EXAMPLE
  // it.only("should GET api/v1/status with opened_connections", async () => {
  //   const response = await fetch(
  //     "http://localhost:3000/api/v1/status?databaseName='; SELECT pg_sleep(4); --;",
  //   );
  // });
});

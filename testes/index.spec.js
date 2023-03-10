const request = require("supertest");
const app = require("../src/app");

describe("Test router server", () => {
	it("Should get main router", async () => {
		const res = await request(app).get("/api/upload");

		expect(res.statusCode).toEqual(200);
		expect(res.body).toHaveProperty("message");
	});
});

/*
informações importantes para teste
body, headers, statusCode, file, buffer
*/

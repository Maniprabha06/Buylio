const request = require('supertest');
const {app, server, name} =require('../app');

describe('GET /', () => {
    it("Should return 200 status and the correct message",async() => {
        const response = await request(app).get("/");
        expect(response.status).toBe(200);
        expect(response.text).toBe(`Welcome to Buylio from ${name}!`);
    })
})

afterAll(()=>{
    server.close();
})
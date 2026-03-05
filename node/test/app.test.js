import request from "supertest";
import { expect } from "chai";
import app from "../server.js";

// create test app
describe('Server API Tests',()=>{
    it('This API should return Hello from Mocha',async()=>{
        const res= await request(app).get('/');
        expect(res.status).to.equal(200)
        expect(res.body.message).to.equal('Hello from Mocha!')
    })
    it('This APi should add 2 numbers correctly',async()=>{
        const res = await request(app).get('/add?num1=10&num2=20')
        expect(res.status).to.equal(200)
        expect(res.body.result).to.equal(30)

    })
    it('this app should return my name',async()=>{
        const res =await request(app).get('/name')
        expect(res.status).to.equal(200)
        expect(res.body.message).to.equal("my name is sumaya")
    })
})

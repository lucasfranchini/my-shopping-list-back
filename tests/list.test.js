import supertest from "supertest";
import app from "../src/app";
import connection from "../src/database";


beforeEach(async ()=>{
    await connection.query(`DELETE FROM list `)
})

afterAll(()=>{
    connection.end();
})

describe("POST /list", ()=>{
    beforeEach(async ()=>{
        await connection.query(`INSERT INTO list (text) VALUES ('batata')`)
    })
    it('return status 201 from valid text', async ()=>{
        const newItem ={text:'abacate'}
        const result = await supertest(app).post('/list').send(newItem)
    })
})
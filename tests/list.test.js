import supertest from "supertest";
import app from "../src/app";
import connection from "../src/database";


afterAll(()=>{
    connection.end();
})

describe("POST /list", ()=>{
    beforeAll(async ()=>{
        await connection.query(`DELETE FROM list `)
        await connection.query(`INSERT INTO list (text) VALUES ('batata'),('matte'),('banana'),('abacaxi')`)
    })
    it('return status 201 from valid text', async ()=>{
        const newItem ={text:'abacate'}
        const result = await supertest(app).post('/list').send(newItem)
        expect(result.status).toEqual(201);
    })
})
describe("POST /list", ()=>{
    beforeAll(async ()=>{
        await connection.query(`DELETE FROM list `)
        await connection.query(`INSERT INTO list (text) VALUES ('batata'),('matte'),('banana'),('abacaxi')`)
    })
    it('return an array with 4 itens from valid URL', async ()=>{
        const result = await supertest(app).get('/list')
        expect(result.body.length).toEqual(4);
    })
})
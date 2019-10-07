const request = require('supertest');
const app = require('../app');

describe('Test the root path', () => {
    test('It should response the GET method', (done) => {
        request(app).get('/').then((response) => {
            expect(response.statusCode).toBe(200);
            done();
        });
    });
});
describe('Test the second page', () => {
    test('It should response the POST method', (done) => {
        request(app).post('/second').then((response) => {
            expect(response.statusCode).toBe(200);
            done();
        });
    });
});
describe('Test the third page', () => {
    test('It should response the POST method', (done) => {
        request(app).post('/third').then((response) => {
            expect(response.statusCode).toBe(200);
            done();
        });
    });
});
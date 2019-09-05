const request = require('supertest');
const app = require('../server/index.js');

describe('Test the root path', () => {
  test('It should response the GET method', () => {
    return request(app)
    .get("/api/products/1")
    .then(response => {
      expect(response.statusCode).toBe(200)
      });
  });
  test('It should response the GET method', () => {
    return request(app)
    .get("/api/products/1")
    .then(response => {
      expect(response.data).toBe(200)
      });
  });  
});
/// <reference types="cypress" />

describe('API Tests', () => {
  describe('API Test 1', () => {
    it('should return data from the API', () => {
      cy.request({
        method: 'GET',
        url: 'https://iqaccbyrzi.execute-api.ap-southeast-1.amazonaws.com/default/getHouseInfo',
      }).then((response) => {
        expect(response.status).to.eq(200); // Assert the response status code
        expect(response.body).to.have.length.above(0); // Assert that the response has data
      });
    });
  });

  describe('API Test 2', () => {
    it('should handle error responses', () => {
      cy.request({
        method: 'GET',
        url: 'https://iqaccbyrzi.execute-api.ap-southeast-1.amazonaws.com/default/getHouseInfo',
        failOnStatusCode: false,
      }).then((response) => {
        // Assert that the response status is an error
        expect(response?.status)?.to?.be?.oneOf([400, 404, 500]);

        // Assert the error message or any other relevant properties in the response
        expect(response?.body?.error)?.to?.exist;
      });
    });
  });
});

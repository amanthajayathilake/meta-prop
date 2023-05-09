✨ Site is LIVE - https://meta-prop-lgx7wuaay-amanthajayathilake.vercel.app/
## To run and test this app

First, install npm and run the development server:
```npm i || yarn install
```
then
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Desktop View
![image](https://github.com/amanthajayathilake/meta-prop/assets/79798311/53e53e1a-0f5d-452d-97c9-51f7a12818f6)

Tab View
![localhost_3000_(iPad Air)](https://github.com/amanthajayathilake/meta-prop/assets/79798311/ea9edd7a-bbb4-4927-91dc-51cc5554cdf8)

Mobile View
![localhost_3000_(iPhone SE)](https://github.com/amanthajayathilake/meta-prop/assets/79798311/e74ac7e5-fb10-4db8-8c63-1596bc1d345f)

## To open cypress and run test cases:
```npx cypress open```

## Test Codes
```describe('API Tests', () => {
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
```

![image](https://github.com/amanthajayathilake/meta-prop/assets/79798311/eec7c117-bc3a-4452-94d2-606f9155271c)




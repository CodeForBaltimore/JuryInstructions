const main = require('../public/js/main');

describe('Test sanitizeContent function', () => {
    test('It should return a clean string with no HTML body tags', () => {
        const testHtml = '<body>hey buddy!</body>';
        expect(main.sanitizeContent(testHtml)).toEqual('hey buddy!');
    })
});

describe('Test getDate function', () => {
    test('It should return the current date properly formatted', () => {
        let today = new Date();
        let dd = String(today.getDate()).padStart(2, '0');
        let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        let yyyy = today.getFullYear();
        today = mm + '/' + dd + '/' + yyyy;
        expect(main.getDate()).toEqual(today);
    })
});
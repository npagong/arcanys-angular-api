var test = require('ava');
var Api = require('../dist/build');

var api = new Api();

test('Trying GET end-point', t => {
    t.is(api.TEST('will work'), 'will work');
});

// test(async function (t) {
//     const value = await api.GET('https://httpbin.org/get');
//     t.true(value);
// });

// test(t => {
//     return api.GET('https://httpbin.org/get').then(result => {
//         t.is(result, 'unicorn');
//     });
// });
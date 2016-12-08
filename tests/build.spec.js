var test = require('ava');
var Client = require('../dist/build');

var client = new Client();

test('Trying GET end-point', t => {
    t.is(client.TEST('will work'), 'will work');
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
const card = require('./card');
test('Should generate a random number', () => {
    const number = card(1,10);
    expect(typeof number).toBe('number');
});

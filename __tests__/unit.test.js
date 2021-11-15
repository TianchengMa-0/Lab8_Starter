// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
test('all tests', () => {
    expect(functions.isPhoneNumber('123-123-1234')).toBe(true);
    expect(functions.isPhoneNumber('123-123-7777')).toBe(true);
    expect(functions.isPhoneNumber('asdwearfcd')).toBe(false);
    expect(functions.isPhoneNumber('1231231234')).toBe(false);

    expect(functions.isEmail('someone@ucsd.edu')).toBe(true);
    expect(functions.isEmail('abc@ask.com')).toBe(true);
    expect(functions.isEmail('@aaa.com')).toBe(false);
    expect(functions.isEmail('aaaa')).toBe(false);

    expect(functions.isStrongPassword('a123abcs')).toBe(true);
    expect(functions.isStrongPassword('ABCD1234Z')).toBe(true);
    expect(functions.isStrongPassword('asd')).toBe(false);
    expect(functions.isStrongPassword('110315456')).toBe(false);

    expect(functions.isDate('12/45/7777')).toBe(true);
    expect(functions.isDate('44/99/8888')).toBe(true);
    expect(functions.isDate('AD4S5AD4AS6D')).toBe(false);
    expect(functions.isDate('CXC11Z1C')).toBe(false);

    expect(functions.isHexColor('009acd')).toBe(true);
    expect(functions.isHexColor('ab0000')).toBe(true);
    expect(functions.isHexColor('asdwearfcd')).toBe(false);
    expect(functions.isHexColor('1231231234')).toBe(false);
});
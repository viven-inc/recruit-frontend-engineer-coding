
let functionA = require("./functionA")

test('functionA',() => {
    expect(functionA(20)).toBe(23)
    expect(functionA(2)).toBe(2)
    expect(functionA(99992)).toBe(100003)
})
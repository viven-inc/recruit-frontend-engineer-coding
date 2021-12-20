
let functionA = require("./functionA")

test('functionA 1',() => {
    expect(functionA(19)).toBe(19)
})
test('functionA 2',() => {
    expect(functionA(20)).toBe(23)
})
test('functionA 3',() => {
    expect(functionA(2)).toBe(2)
})
test('functionA 4',() => {
    expect(functionA(99992)).toBe(100003)
})

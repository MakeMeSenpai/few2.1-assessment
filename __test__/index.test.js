const { expect } = require('@jest/globals')
const { Maths } = require('../index')

test("Returns golden ratio", () => {
    // expect().toBe()
    var g = new Maths(10)
    expect(g.gold()).toBe(16.1803398875)
    g = new Maths(2.5)
    expect(g.gold()).toBe(4.045084971875)
})

test("Returns radians ", () => {
    var r = new Maths(15)
    expect(r.radians()).toBe(0.2617993877991494)
    r = new Maths(50)
    expect(r.radians()).toBe(0.8726646259971648)
})

test("Returns degrees ", () => {
    var d = new Maths(0.2617993877991494)
    expect(Math.round(d.degrees())).toBe(15)
    d = new Maths(0.8726646259971648)
    expect(Math.round(d.degrees())).toBe(50)
})

test("Returns money ", () => {
    var m = new Maths(23)
    expect(m.money()).toBe("$23.00")
    m = new Maths(55.5)
    expect(m.money()).toBe("$55.50")
})

// test("Returns random ", () => {
//     var ran = Maths(0)
//     expect(ran.random(1,2))
// })


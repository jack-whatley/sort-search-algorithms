const add = require("./modules/sum");

test("number adding test", () => {

    expect(add(1, 2)).toBe(3);

})

var app = require('../js/script.js');

describe("app", function() {
    it("sayHello()", function() {

        var result;
        console.log('app',app);

        result = app.sayHello('Vasya');

        expect(result).toEqual('Hello,Vasya!');
    });

    it("sum()", function() {

        var result;

        result = app.sum(5,5);

        expect(result).toEqual(10);
    });

    it("dest()", function() {

        var result;

        result = app.dest(1,2,3,4);

        expect(result).toEqual(24);
    });
});

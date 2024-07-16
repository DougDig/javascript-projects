const checkFive = require("../checkFive.js");

describe ("checkFive", function () {
    test ('does the return for #s less than 5 work', function () {
        let output = checkFive(2);
        expect(output).toEqual('2 is less than 5.');
    });
    test ('does the return for 3s greater than 5 work', function () {
        let output = checkFive(6);
        expect(output).toEqual('6 is greater than 5.');
    });
    test ('does the return for 5 work', function(){
        let output = checkFive(5);
        expect(output).toEqual('5 is equal to 5.');
    }); 
});



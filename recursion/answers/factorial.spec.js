describe('factorial', function () {

    //5*4*3*2*1

    it("factorial(0) should be 1", function () {
        expect(factorial(0)).toEqual(1);
    });

    it("factorial(1) should be 1", function () {
        expect(factorial(1)).toEqual(1);
    });

    it("factorial(2) should be 2", function () {
        expect(factorial(2)).toEqual(2);
    });

    it("factorial(3) should be 6", function () {
        expect(factorial(3)).toEqual(6);
    });

    it("factorial(10) should be 3628800", function () {
        expect(factorial(10)).toEqual(3628800);
    });


    /*
     it("factorial(40000) should be 40000", function(){
     expect(factorial(40000)).toEqual(Infinity);
     });
     */


});
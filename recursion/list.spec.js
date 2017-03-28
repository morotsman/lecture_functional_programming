describe('list', function () {

	//1,2,3,4,5 => 5,4,3,2,1 

    it("reverse of [] should be []", function(){
        expect(reverse([])).toEqual([]);
    });
	
    it("reverse of [1] should be [1]", function(){
        expect(reverse([1])).toEqual([1]);
    });	
	
	it("reverse of [1,2] should be [2,1]", function(){
        expect(reverse([1,2])).toEqual([2,1]);
    });

	it("reverse of [1,2,3,4,5] should be [5,4,3,2,1]", function(){
        expect(reverse([1,2,3,4,5])).toEqual([5,4,3,2,1]);
    });	
	
	it("reverse of reverse of [1,2,3,4,5] should be [1,2,3,4,5]", function(){
        expect(reverse(reverse([1,2,3,4,5]))).toEqual([1,2,3,4,5]);
    });		
	
	
	//min(1,5,2,-5,6) => -5
	
	it("min of [] should be ?", function() {
		
	});
	
	it("min of [1] should be 1", function() {
		expect(min([1])).toEqual(1);
	});
	
	
	
	//min
	//max
	//sum
	//product
	//reduce
	
	//times 2
	//length of strings
	//map
	
	//all evens
	//all that starts with A
	//filter
	
	
	
});
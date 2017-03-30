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
	
	it("min of [1,2] should be 1", function() {
		expect(min([1,2])).toEqual(1);
	});	
	
	it("min of [1,5,2,-5,6] should be -5", function() {
		expect(min([1,5,2,-5,6])).toEqual(-5);
	});	
	
	
	//max(1,5,2,-5,6) => 6
	
	it("max of [1] should be 1", function() {
		expect(max([1])).toEqual(1);
	});
	
	it("max of [1,2] should be 1", function() {
		expect(max([1,2])).toEqual(2);
	});	
	
	it("max of [1,5,2,-5,6] should be -5", function() {
		expect(max([1,5,2,-5,6])).toEqual(6);
	});	

	// sum(1,2,3) => 6
	
	it("sum of [] should be 0", function() {
		expect(sum([])).toEqual(0);
	});
	
	
	it("sum of [1] should be 1", function() {
		expect(sum([1])).toEqual(1);
	});	
	
	it("sum of [1,2,3] should be 6", function() {
		expect(sum([1,2,3])).toEqual(6);
	});	

	// product(1,2,3) => 6	
	
	it("product of [] should be 1", function() {
		expect(product([])).toEqual(1);
	});
	
	
	it("product of [1] should be 1", function() {
		expect(product([1])).toEqual(1);
	});	
	
	it("product of [1,2,3] should be 6", function() {
		expect(product([1,2,3])).toEqual(6);
		
	});		
	
	//reduce reduce([1,2,3], minimum) => 1
	
	const maximum = (a,b) => a>b?a:b;
	const minimum = (a,b) => a<b?a:b;
	const add = (a,b) => a + b;
	const times = (a,b) => a * b;
	
	it("reduce with min", function() {
		expect(reduce([1,2,3], minimum)).toEqual(1);
	});

	it("reduce with max", function() {
		expect(reduce([1,2,3], maximum)).toEqual(3);
	});		
	
	it("reduce with sum", function() {
		expect(reduce([1,2,3], add, 0)).toEqual(6);
	});		
	
	it("reduce with product", function() {
		expect(reduce([1,2,3], times, 1)).toEqual(6);
	});	

	it("reduce with reverse", function() {		
		expect(reduce([1,2,3], (acc,v) => [v].concat(acc), [])).toEqual([3,2,1]);
	});	
	
	
	// [1,2,3] => [2,4,6]
	
	it("times2 should multiply each entry in the array with 2", function() {
		expect(times2([])).toEqual([]);
	});
	
	it("times2 should multiply each entry in the array with 2", function() {
		expect(times2([1])).toEqual([2]);
	});

	it("times2 should multiply each entry in the array with 2", function() {
		expect(times2([1,2,3])).toEqual([2,4,6]);
	});		
	
	// ['a', 'abc', 'ab'] => [1,3,2]
	
	it("lengthOfStrings should return the length of strings", function() {
		expect(lengthOfStrings([])).toEqual([]);
	});
	
	it("lengthOfStrings should return the length of strings", function() {
		expect(lengthOfStrings(["a"])).toEqual([1]);
	});

	it("lengthOfStrings should return the length of strings", function() {
		expect(lengthOfStrings(["a", "abc", "ab"])).toEqual([1,3,2]);
	});		


	it("map should apply a function on all elements in the array", function() {
		expect(map([], v => v*2)).toEqual([]);
	});
	
	it("map should apply a function on all elements in the array", function() {
		expect(map([1], v => v*2)).toEqual([2]);
	});
	
	it("map should apply a function on all elements in the array", function() {
		expect(map([1,2,3], v => v*2)).toEqual([2,4,6]);
	});
	
	it("map should apply a function on all elements in the array", function() {
		expect(map([1,2,3], v => v*2)).toEqual([2,4,6]);
	});
	

	it("map should return the length of strings", function() {
		expect(map(['a','abc','ab'], v => v.length)).toEqual([1,3,2]);
	});		
	
	// allEvens([1,2,3,4]) => [2,4]
	
	it("allEvens should give back all even values", function() {
		expect(allEvens([])).toEqual([]);
	});
	
	it("allEvens should give back all even values", function() {
		expect(allEvens([1])).toEqual([]);
	});
	
	it("allEvens should give back all even values", function() {
		expect(allEvens([1,2])).toEqual([2]);
	});	
	
	it("allEvens should give back all even values", function() {
		expect(allEvens([1,2,3,4])).toEqual([2,4]);
	});	
	
	// allThatStartsWithA(["abc", "Ada", "Beta"]) => ["Ada"]
	
	
	it("allThatStartsWithA should give back all values that starts with A", function() {
		expect(allThatStartsWithA([])).toEqual([]);
	});
	
	it("allThatStartsWithA should give back all values that starts with A", function() {
		expect(allThatStartsWithA(["abc"])).toEqual([]);
	});
	
	it("allThatStartsWithA should give back all values that starts with A", function() {
		expect(allThatStartsWithA(["abc", "ABC"])).toEqual(["ABC"]);
	});	
	
	it("allThatStartsWithA should give back all values that starts with A", function() {
		expect(allThatStartsWithA(["abc", "Ada", "Beta", "Apa"])).toEqual(["Ada", "Apa"]);
	});	
	
	//filter
	
	const startsWithA = v => v.startsWith("A");
	const isEven = v => v%2 === 0;
	
	it("should give back all values where the given predicate returns true", function() {
		expect(filter([1,2,3,4,5,6], isEven)).toEqual([2,4,6]);
	});
	
	it("filter should give back all values where the given predicate returns true", function() {
		expect(filter([], startsWithA)).toEqual([]);
	});
	
	it("filter should give back all values where the given predicate returns true", function() {
		expect(filter(["abc"], startsWithA)).toEqual([]);
	});
	
	it("filter should give back all values where the given predicate returns true", function() {
		expect(filter(["abc", "ABC"], startsWithA)).toEqual(["ABC"]);
	});	
	
	it("filter should give back all values where the given predicate returns true", function() {
		expect(filter(["abc","Ada","Beta","Apa"], startsWithA)).toEqual(["Ada", "Apa"]);
	});	
	
	
	
});
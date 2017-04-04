describe('array', function () {

	/*********************Use*****************************************/

	it("[1,2,3].concat([4,5,6]) => [1,2,3,4,5,6]", function(){
		const list1 = [1,2,3];
		const list2 = [4,5,6];
		
		const actual = list1.concat(list2);
		
        expect(actual).toEqual([1,2,3,4,5,6]);
		expect(list1).toEqual([1,2,3]);
		expect(list2).toEqual([4,5,6]);
    });
	
	it("[1,2,3].every(i => i < 4) => true", function(){
		const list1 = [1,2,3];
		
		const actual = list1.every(i => i < 4);
		
        expect(actual).toEqual(true);
		expect(list1).toEqual([1,2,3]);	
    });
	
	it("[1,2,3].every(i => i < 3) => false", function(){
		const list1 = [1,2,3];
		
		const actual = list1.every(i => i < 3);
		
        expect(actual).toEqual(false);
		expect(list1).toEqual([1,2,3]);	
    });	
	
	
	it("[1,2,3].filter(i => i < 3) => [1,2]", function(){
		const list1 = [1,2,3];
		
		const actual = list1.filter(i => i < 3);
		
        expect(actual).toEqual([1,2]);
		expect(list1).toEqual([1,2,3]);	
    });	
	
	it("[].filter(i => i < 3) => []", function(){
		const list1 = [];
		
		const actual = list1.filter(i => i < 3);
		
        expect(actual).toEqual([]);
		expect(list1).toEqual([]);	
    });	
		
	
	it("[1,2,3].find(i => i < 3) => 1", function(){
		const list1 = [1,2,3];
		
		const actual = list1.find(i => i < 3);
		
        expect(actual).toEqual(1);
		expect(list1).toEqual([1,2,3]);	
    });	
	
	it("[1,2,3].findIndex(i => i < 3) => 0", function(){
		const list1 = [1,2,3];
		
		const actual = list1.findIndex(i => i < 3);
		
        expect(actual).toEqual(0);
		expect(list1).toEqual([1,2,3]);	
    });	
	
	it("[1,2,3].includes(i => i === 2) => true", function(){
		const list1 = [1,2,3];
		
		const actual = list1.includes(2);
		
        expect(actual).toEqual(true);
		expect(list1).toEqual([1,2,3]);	
    });		
	
	it("[1,2,3].includes(i => i === 4) => false", function(){
		const list1 = [1,2,3];
		
		const actual = list1.includes(4);
		
        expect(actual).toEqual(false);
		expect(list1).toEqual([1,2,3]);	
    });		
	
	
	it("[1,2,3].indexOf(2) => 1", function(){
		const list1 = [1,2,3];
		
		const actual = list1.indexOf(2);
		
        expect(actual).toEqual(1);
		expect(list1).toEqual([1,2,3]);	
    });	
	
	it("[1,2,3].indexOf(5) => -1", function(){
		const list1 = [1,2,3];
		
		const actual = list1.indexOf(5);
		
        expect(actual).toEqual(-1);
		expect(list1).toEqual([1,2,3]);	
    });		
	
	it("[1,2,3].join() => 1,2,3", function(){
		const list1 = [1,2,3];
		
		const actual = list1.join();
		
        expect(actual).toEqual("1,2,3");
		expect(list1).toEqual([1,2,3]);	
    });	
	
	it("[1].join() => 1", function(){
		const list1 = [1];
		
		const actual = list1.join();
		
        expect(actual).toEqual("1");
		expect(list1).toEqual([1]);	
    });		
	
	it("[1,2,3].join('') => 123", function(){
		const list1 = [1,2,3];
		
		const actual = list1.join('');
		
        expect(actual).toEqual("123");
		expect(list1).toEqual([1,2,3]);	
    });	
		
		
	it("[1,2,3,4,2].lastIndexOf(2) => 4", function(){
		const list1 = [1,2,3,4,2];
		
		const actual = list1.lastIndexOf(2);
		
        expect(actual).toEqual(4);
		expect(list1).toEqual([1,2,3,4,2]);	
    });		
	
	it("[1,2,3].map(v => 2*v) => [2,4,6]", function(){
		const list1 = [1,2,3];
		
		const actual = list1.map(v => 2*v);
		
        expect(actual).toEqual([2,4,6]);
		expect(list1).toEqual([1,2,3]);	
    });		
	
	it("[1,2,3].reduce((acc,v) => acc + v) => 6", function(){
		const list1 = [1,2,3];
		
		const actual = list1.reduce((acc,v) => acc + v);
		
        expect(actual).toEqual(6);
		expect(list1).toEqual([1,2,3]);	
    });		

	it("[1,2,3].reduce((acc,v) => acc + v, 7) => 13", function(){
		const list1 = [1,2,3];
		
		const actual = list1.reduce((acc,v) => acc + v,7);
		
        expect(actual).toEqual(13);
		expect(list1).toEqual([1,2,3]);	
    });	

	it("[1,2,3].reduceRight((acc,v) => acc + v, 7) => 13", function(){
		const list1 = [1,2,3];
		
		const actual = list1.reduceRight((acc,v) => acc + v,7);
		
        expect(actual).toEqual(13);
		expect(list1).toEqual([1,2,3]);	
    });		
	
	
	it("[1,2,3].slice(1) => [2,3]", function(){
		const list1 = [1,2,3];
		
		const actual = list1.slice(1);
		
        expect(actual).toEqual([2,3]);
		expect(list1).toEqual([1,2,3]);	
    });	
	
	it("[1,2,3,4].slice(1,3) => [2,3]", function(){
		const list1 = [1,2,3,4];
		
		const actual = list1.slice(1,3);
		
        expect(actual).toEqual([2,3]);
		expect(list1).toEqual([1,2,3,4]);	
    });		
	
	it("[1,2,3,4].some(v => v === 2) => true", function(){
		const list1 = [1,2,3,4];
		
		const actual = list1.some(v => v === 2);
		
        expect(actual).toEqual(true);
		expect(list1).toEqual([1,2,3,4]);	
    });	

	it("[1,2,3,4].some(v => v === 5) => false", function(){
		const list1 = [1,2,3,4];
		
		const actual = list1.some(v => v === 5);
		
        expect(actual).toEqual(false);
		expect(list1).toEqual([1,2,3,4]);	
    });		
	
	
	/*********************Be wary*****************************************/
	
	
	it("Be wary of reverse", function(){
		const list1 = [1,2,3,4];
		
		const actual = list1.reverse();
		
        expect(actual).toEqual([4,3,2,1]);
		expect(list1).toEqual([4,3,2,1]);	
    });	
	
	const doSomething = list => {
		list.reverse();
	}
	
	it("Example of problem", function(){
		const list1 = [1,2,3,4];
		
		doSomething(list1);
		
		expect(list1).toEqual([4,3,2,1]);	
    });
	
	it("Be wary of shift", function(){
		const list1 = [1,2,3,4];
		
		const actual = list1.shift();
		
        expect(actual).toEqual(1);
		expect(list1).toEqual([2,3,4]);	
    });
	
	
	it("Be wary of copyWithin", function(){
		const list1 = [1,2,3,4];
		
		const actual = list1.copyWithin(2, 0);
		
        expect(actual).toEqual([1,2,1,2]);
		expect(list1).toEqual([1,2,1,2]);	
    });	
	
	it("Be wary of fill", function(){
		const list1 = [1,2,3,4];
		
		const actual = list1.fill(5);
		
        expect(actual).toEqual([5,5,5,5]);
		expect(list1).toEqual([5,5,5,5]);	
    });		
	
	it("Be wary of pop", function(){
		const list1 = [1,2,3,4];
		
		const actual = list1.pop();
		
        expect(actual).toEqual(4);
		expect(list1).toEqual([1,2,3]);	
    });		
	
	it("Be wary of push", function(){
		const list1 = [1,2,3,4];
		
		const actual = list1.push(5);
		
        expect(actual).toEqual(5);
		expect(list1).toEqual([1,2,3,4,5]);	
    });
		
	it("Be wary of shift", function(){
		const list1 = [1,2,3,4];
		
		const actual = list1.shift();
		
        expect(actual).toEqual(1);
		expect(list1).toEqual([2,3,4]);	
    });

	it("Be wary of sort", function(){
		const list1 = [4,3,2,1];
		
		const actual = list1.sort();
		
        expect(actual).toEqual([1,2,3,4]);
		expect(list1).toEqual([1,2,3,4]);	
    });	
	
	it("Be wary of splice", function(){
		const list1 = [1,2,3,4];
		
		const actual = list1.splice(1);
		
        expect(actual).toEqual([2,3,4]);
		expect(list1).toEqual([1]);	
    });	

	it("Be wary of unshift", function(){
		const list1 = [1,2,3,4];
		
		const actual = list1.unshift(5);
		
        expect(actual).toEqual(5);
		expect(list1).toEqual([5,1,2,3,4]);	
    });		
	
	
	/**************Assignments**********************/
	
	it("sum of [] should be 0", function(){
		//use reduce
		const actual = [].reduce((acc,v) => acc + v, 0);
		expect(actual).toEqual(0);
	});		
	
	it("sum of [1,2,3,4] should be 10", function(){
		//use reduce
		const actual = [1,2,3,4].reduce((acc,v) => acc + v, 0);
		expect(actual).toEqual(10);
	});	
	
	it("length of [] should be 0", function(){
		//use reduce
		const actual = [].reduce((acc,v) => acc + 1, 0);
		expect(actual).toEqual(0);
	});		
	
	it("length of [1,2,3,4] should be 4", function(){
		//use reduce
		const actual = [1,2,3,4].reduce((acc,v) => acc + 1, 0);
		expect(actual).toEqual(4);
	});	
	
	it("sum of all even numbers [1,2,3,4] should be 6", function(){
		//use reduce
		const actual = [1,2,3,4].filter(v => v%2 === 0).reduce((acc,v) => acc + v, 0);
		expect(actual).toEqual(6);
	});	

	it("reverse([]) should be '[]' and the original array should not be affected", function(){
		const actual = [].filter(v => v%2 === 0).reduce((acc,v) => acc.concat(v), []);
		expect(actual).toEqual([]);
	});		
	
	it("reverse([1,2,3,4]) should be '[4,3,2,1]' and the original array should not be affected", function(){
		const actual = [1,2,3,4].filter(v => v%2 === 0).reduce((acc,v) => acc.concat(v), []);
		expect(actual).toEqual([4,3,2,1]);
	});	
	
	it("longest string ['hej', 'hejsan', 'svejsan'] should be 'svejsan'", function(){

	});	
	
	it("groupBy([], v => v.charAt(0)) should be '{}' and the original array should not be affected", function(){

	});			
	
	it("groupBy(['apa','beta','ada','ceasar'], v => v.charAt(0)) should be '{a: ['apa', 'ada'], b: ['beta'], c:['ceasar']}' and the original array should not be affected", function(){

	});		

	it("sort('Sadder') should be 'adders'", function(){

	});	
	
	it("sort('Dreads') should be 'adders'", function(){

	});	
	
	it("longest words in anagrams(['Sadder', 'Creative', 'Dreads', 'Reactive']) should be ['Creative', 'Reactive']", function(){

	});		
	
});
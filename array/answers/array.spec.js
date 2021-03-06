describe('array', function () {
	
	
	/********************Motivation************************************/
	
	const joinImperative = (list,separator = ',') => {
		let result = '';
		for( let i = 0; i < list.length; i++ ) {
			if(i === (list.length - 1)) {
				result = result + list[i];
			} else {
				result = result + list[i] + separator;
			}
			
		}
		return result;
	}
	
	const joinFunctional = (list,seperator) => list.join(seperator) 
	
	
	it("test joinFunctional", function(){
		expect(joinFunctional([])).toEqual("");
		expect(joinFunctional([1])).toEqual("1");
        expect(joinFunctional([1,2,3])).toEqual("1,2,3");
		expect(joinFunctional([1,2,3], ";")).toEqual("1;2;3");
    });	
	
	it("test joinImperative", function(){
		expect(joinImperative([])).toEqual("");
		expect(joinImperative([1])).toEqual("1");
        expect(joinImperative([1,2,3])).toEqual("1,2,3");
		expect(joinImperative([1,2,3], ";")).toEqual("1;2;3");
    });		

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
    
	/**************Good to know********************/
	it("Good to know", function(){
            
		
		console.log("*************functional**********************************");
		const list = ["a","ab","abc","abcd", "abcde", "abcdef"];
		
		const result1 = list.map(v => {
			console.log("map1");
			return v + v;
		}).map(v => {
			console.log("map2");
			return v.length;
		}).filter(v => {
			console.log("filter");
			return v < 10;
		})[0];

		console.log(result1);
		
		
		console.log("*************imperative**********************************");
		
		
		let resul2;
		for(let i = 0; i < list.length; i++) {
			console.log("loop");
			let value = (list[i] + list[i]).length;
			if(value < 10) {
				result2 = value;
				break;
			}
		}
		
		console.log(result2);
		
		console.log("*************better functional**********************************");
                
                const result3 = _(list).map(v => {
			console.log("map1");
			return v + v;
		}).map(v => {
			console.log("map2");
			return v.length;
		}).filter(v => {
			console.log("filter");
			return v < 10;
		}).first();
                
                console.log("-------");
                
                console.log(result3);
		
        		
    });	
    
    
        /*
     * Other languages:
     * 
     * lisp: http://clhs.lisp.se/Body/17_a.htm
     * haskell: https://hackage.haskell.org/package/base-4.9.1.0/docs/Data-List.html
     * java: https://docs.oracle.com/javase/8/docs/api/java/util/stream/Stream.html
     * scala: https://www.scala-lang.org/api/current/scala/collection/immutable/Vector.html
     * ruby: https://ruby-doc.org/core-2.4.1/Enumerable.html
     * lodash: https://lodash.com/docs/4.17.4
     * rxjs: http://reactivex.io/rxjs/class/es6/Observable.js~Observable.html
     * 
     * scala: https://www.scala-lang.org/api/current/scala/concurrent/Future.html
     * scala: https://www.scala-lang.org/api/current/scala/Option.html
     * scala: http://www.scala-lang.org/api/2.12.x/scala/util/Try.html
     * 
     */
	
	
	/**************Assignments**********************/
	
	//use reduce in all but sortString
	
	it("sum of [] should be 0", function(){
		expect(sum([])).toEqual(0);
	});		
	
	it("sum of [2] should be 2", function(){
		expect(sum([2])).toEqual(2);
	});		
	
	it("sum of [1,2,3,4] should be 10", function(){
		expect(sum([1,2,3,4])).toEqual(10);
	});	
	
	it("length of [] should be 0", function(){
		expect(length([])).toEqual(0);
	});		
	
	it("length of [2] should be 1", function(){
		expect(length([2])).toEqual(1);
	});		
	
	it("length of [1,2,3,4] should be 4", function(){
		expect(length([1,2,3,4])).toEqual(4);
	});	
	
	it("sum of all even numbers [] should be 0", function(){
		expect(sumAllEvenNumbers([])).toEqual(0);
	});		
	
	it("sum of all even numbers [1] should be 0", function(){
		expect(sumAllEvenNumbers([1])).toEqual(0);
	});		
	
	it("sum of all even numbers [1,2,3,4] should be 6", function(){
		expect(sumAllEvenNumbers([1,2,3,4])).toEqual(6);
	});	

	it("reverse([]) should be '[]' and the original array should not be affected", function(){
		expect(reverse([])).toEqual([]);
	});

	it("reverse([2]) should be '[2]' and the original array should not be affected", function(){
		expect(reverse([2])).toEqual([2]);
	});		
	
	it("reverse([1,2,3,4]) should be '[4,3,2,1]' and the original array should not be affected", function(){
		expect(reverse([1,2,3,4])).toEqual([4,3,2,1]);
	});	
	
	it("longest string [] should be ''", function(){
		expect(longestString([])).toEqual('');
	});		
	
	it("longest string ['hej'] should be ''", function(){
		expect(longestString(['hej'])).toEqual('hej');
	});		
	
	it("longest string ['hej', 'hejsan', 'abcdefghijklmn', 'svejsan'] should be 'svejsan'", function(){
		expect(longestString(['hej', 'hejsan', ,'abcdefghijklmn','svejsan'])).toEqual('abcdefghijklmn');
	});	
	
	it("groupBy([], v => v.charAt(0)) should be '{}' and the original array should not be affected", function(){
		expect(groupBy([], v=> v.charAt(0))).toEqual({});
	});		

	it("groupBy(['hej'], v => v.charAt(0)) should be '{h: ['hej']}' and the original array should not be affected", function(){
		expect(groupBy(['hej'], v=> v.charAt(0))).toEqual({h: ['hej']});
	});			
	
	it("groupBy(['apa','beta','ada','ceasar'], v => v.charAt(0)) should be '{a: ['apa', 'ada'], b: ['beta'], c:['ceasar']}' and the original array should not be affected", function(){
		expect(groupBy(['apa','beta','ada','ceasar'], v=> v.charAt(0))).toEqual({a: ['ada', 'apa'], b: ['beta'], c:['ceasar']});
	});		
	
	//no need for reduce
	it("sortString('') should be ''", function(){
		expect(sortString('')).toEqual('');
	});		
	
	it("sortString('s') should be 's'", function(){
		expect(sortString('s')).toEqual('s');
	});		

	it("sortString('sadder') should be 'adders'", function(){
		expect(sortString('sadder')).toEqual('adders');
	});	
	
	it("sort('dreads') should be 'adders'", function(){
		expect(sortString('dreads')).toEqual('adders');
	});	
		
        
    it("objectValues({}) should be []", function(){
		expect(objectValues({})).toEqual([]);
	});
        
    it("objectValues({a:'ada'}) should be ['ada','basic']", function(){
		expect(objectValues({a:'ada', b:'basic'})).toEqual(['ada', 'basic']);
	});
        
    it("objectValues({a:['ada', 'apa'], b: ['basic']}) should be [['ada','apa], ['basic']]", function(){
		expect(objectValues({a:['ada','apa'], b:['basic']})).toEqual([['ada','apa'], ['basic']]);
	});
	
	it("anagrams(['Sadder', 'Creative', 'Dreads', 'Reactive', 'abcdefghijklmnop']) should be [['Dreads', 'Sadder'], ['Reactive', 'Creative']]", function(){
                const words = ['Sadder', 'Creative', 'Dreads', 'Reactive', 'abcdefghijklmnop'];
		const expected = [['Dreads', 'Sadder'], ['Reactive', 'Creative']];
		expect(anagrams(words)).toEqual(expected);
	});
        
        //use lodash https://lodash.com/docs/4.17.4
    it("anagrams(['Sadder', 'Creative', 'Dreads', 'Reactive', 'abcdefghijklmnop']) should be [['Sadder','Dreads'], ['Creative','Reactive']]", function(){
        const words = ['Sadder', 'Creative', 'Dreads', 'Reactive', 'abcdefghijklmnop'];
		const expected = [['Sadder','Dreads'], ['Creative','Reactive']];
        
		const anagrams = _(words).groupBy(word => sortString(word.toLowerCase())).map(_.values).filter(g => g.length > 1)
		
		expect(anagrams.value()).toEqual(expected);
	});
	
	function imperativeAnagrams(list) {
		if (list.length === 0) return list;
		
		let grouped = {};
		for(var i = 0; i < list.length; i++) {
			let word = list[i];
			let sortedString = word.toLowerCase().split("").sort().join("");
			grouped[sortedString] = grouped[sortedString]?grouped[sortedString].concat([word]):[word];
		}
		
		let result = [];
		Object.keys(grouped).forEach(key => {
			if(grouped[key].length > 1) {
				result.push(grouped[key])
			}		
		})
		
		return result;
		
	}
	
    it("imperativeAnagrams", function(){
        const words = ['Sadder', 'Creative', 'Dreads', 'Reactive', 'abcdefghijklmnop'];
		const expected = [['Sadder','Dreads'], ['Creative','Reactive']];
       
		
		expect(imperativeAnagrams(words)).toEqual(expected);
	});	
	
	
	
	
	
	
	
});
L= window.L || {};

L = function () {

	const memoized = fun => {
		const cache = {};
		return (...args) => {
			const key = args.join();
			if(cache[key]) return cache[key]
			
			const result = fun(...args);
			cache[key] = result;
			return result;
		};
	}	

	const timed = fun => (...args) => {
		const startTime = new Date().getTime();
		const result = fun(...args)
		console.log(`Function completed in ${new Date().getTime() - startTime} ms`);
		return result;
	}	
	
	function* map(fun, iterable) {
		for (let value of iterable) {
			//console.log("map: " + value);
			yield fun(value);
		}
	}
	
	function* filter(fun, iterable) {
		for (let value of iterable) {
			//console.log("filter: " + value);
			if(fun(value)) {
				//console.log("OK");
				yield value
			}else {
				//console.log("Not OK");
			};
		}
	}	
	
	function* take(number, iterable) {
            let i = 0;
            for (let value of iterable) {
		if(i < number) yield value;
		i++;
		if(i === number){
                    return;
		};	
            }              
	}
	
	function curry(fun) {
		var numberOfParameters = fun.length;

		return function go(...args1) {
			if (args1.length >= numberOfParameters) return fun(...args1);
	
			return function f2(...args2) {
				return go(...args1.concat(args2)); 
			}
		};
	}
	
	function compose(...funs) {
		return pipe(funs.reverse());
	}
	
	function pipe(funs) {
		return (...args) => {
			const firstResult = funs[0](...args);
			return funs.slice(1).reduce((acc,fun) => fun(acc), firstResult);
		}
	}	
	
	
	const times = (a,b) => a * b;
	
	const add = (a,b) => a + b;
	


  
	return {
		memoized,
		timed,
		map: curry(map),
		filter: curry(filter),
		take: curry(take),
		add: curry(add),
		times: curry(times),
		curry,
		compose,
		pipe
	}

}();

const make_me_fast = L.memoized;
const timed = L.timed;






 
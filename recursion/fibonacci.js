const memoized = fun => {
	const cache = {};
	return (...args) => {
		const key = args.join();
		if(cache[key]) {
			return cache[key]
		};
			
		const result = fun(...args);
		cache[key] = result;
		return result;
	};
}


const fibonacci = memoized( number => {
	if(number === 1) return 0;
	if(number === 2) return 1;
	return fibonacci(number-1) + fibonacci(number-2)
});

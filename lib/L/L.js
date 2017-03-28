
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

const timed = fun => (...args) => {
	const startTime = new Date().getTime();
	const result = fun(...args)
	console.log(`Function completed in ${new Date().getTime() - startTime} ms`);
	return result;
}
 
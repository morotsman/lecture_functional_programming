
const head = list => list[0];

const tail = list => list.splice(1);

const reverse = list => {
	if(list.length === 0) return [];
	return reverse(tail(list)).concat(head(list));
}

const min = list => {
	const go = (list,acc) => {
		if(list.length === 0) return acc;
		return go(tail(list), head(list)>acc?acc:head(list));		
	}
	
	return go(list,list[0]);
}

const max = list => {
	const go = (list,acc) => {
		if(list.length === 0) return acc;
		return go(tail(list), head(list)<acc?acc:head(list));		
	}
	
	return go(list,list[0]);	
}

const sum = list => {
	const go = (list,acc) => {
		if(list.length === 0) return acc;
		return go(tail(list), head(list) + acc);		
	}
	
	return go(list,0);
}

const product = list => {
	const go = (list,acc) => {
		if(list.length === 0) return acc;
		return go(tail(list), head(list) * acc);		
	}
	
	return go(list,1);	
}

const reduce = (list, fun, initial=list[0]) => {
	const go = (list,acc,initial) => {
		if(list.length === 0) return acc;
		return go(tail(list), fun(acc, head(list)) );		
	}
	
	return go(list,initial);
	
}

const times2 = list => {
	
}

const lengthOfStrings = list => {
	
}

const map = (list, fun) => {
	
} 

const evens = list => {
	
}

const startsWithA = list => {
	
}

const filter = (list,fun) => {
	
}

 
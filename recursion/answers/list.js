
const head = list => list[0];

const tail = list => list.splice(1);

const reverse = list => {
	if(list.length === 0) return [];
	return reverse(tail(list)).concat(head(list));
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

const reduce = (list, fun, initial=list[0]) => {
	const go = (list,acc,initial) => {
		if(list.length === 0) return acc;
		return go(tail(list), fun(acc, head(list)) );		
	}
	
	return go(list,initial);
	
}

const times2 = list => {
	if(list.length === 0) return list;
	return [head(list)*2].concat(times2(tail(list)));
}

const lengthOfStrings = list => {
	if(list.length === 0) return list;
	return [head(list).length].concat(lengthOfStrings(tail(list)))
}

const map = (list, fun) => {
	if(list.length === 0) return list;
	return [fun(head(list))].concat(map(tail(list), fun));
} 

const allEvens = list => {
	if(list.length === 0) return list;
	const val = head(list)%2?[]:[head(list)];
	return val.concat(allEvens(tail(list)))
}

const allThatStartsWithA = list => {
	if(list.length === 0) return list;
	const val = head(list).startsWith('A')?[head(list)]:[];
	return val.concat(allThatStartsWithA(tail(list)));
}

const filter = (list,fun) => {
	if(list.length === 0) return list;
	const val = fun(head(list))?[head(list)]:[];
	return val.concat(filter(tail(list), fun));	
}

 

const reverse = list => {
	if(list.length === 0) return [];
	return reverse(list.slice(1)).concat(list[0]);
}

const min = _list => {
	const go = (list,acc) => {
		if(list.length === 1) return list[0]>acc?acc:list[0];
		return go(list.slice(1), list[0]>acc?acc:list[0]);		
	}
	
	return go(_list,_list[0]);
}

const max = list => {
	
}

const sum = list => {
	
}

const product = list => {
	
}

const reduce = (list, fun) => {
	
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

 


const sum = list => {
	return list.reduce((acc,v) => acc + v, 0);
}

const length = list => {
	return list.reduce((acc,v) => acc + 1, 0);
}

const sumAllEvenNumbers = list => {
	return list.filter(v => v%2 === 0).reduce((acc,v) => acc + v, 0);
}

const reverse = list => {
	return list.reduce((acc,v) => [v].concat(acc), []);
}

const longestString = list => {
	return list.reduce((acc,v) => acc.length>v.length?acc:v); 
}

const sortString = s => {
	return s.toLowerCase().split("").sort().join("");
}

const id = (v) => v 

const unique = (values,extractor=id) => objectValues(values.reduce((acc,b) => {
      acc[extractor(b)] = b; 
      return acc;
    },{}));
	
const groupBy = (values,extractor=id) => values.reduce((acc,b) => {
      acc[extractor(b)] = acc[extractor(b)]?[b].concat(acc[extractor(b)]):[b]; 
      return acc;
    },{})	
    


const id = (v) => v 

const groupBy = (values,extractor=id) => values.reduce((acc,b) => {
      acc[extractor(b)] = acc[extractor(b)]?[b].concat(acc[extractor(b)]):[b]; 
      return acc;
    },{})
    

    


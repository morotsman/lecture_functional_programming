describe('lodash', function () {
	
	
	
    

	
	
    /**************Assignments use lodash in all assignments**********************/
	
    //Documentaion at: https://lodash.com/docs/4.17.4
    
	
    it("1 + 1 should be 2", function(){
	expect(_.add(1,1)).toEqual(2);
    });	
    
    
    it("sum of [] to equal 0", function(){
        const numbers = [];
        const actual = _(numbers).reduce(_.add,0);
	expect(actual).toEqual(0);
    });	
    
    it("sum of [1] to equal 1", function(){
        const numbers = [1];
        const actual = _(numbers).reduce(_.add,0);        
	expect(actual).toEqual(1);
    }); 
    
    it("sum of [1,2,3] to equal 6", function(){
        const numbers = [1,2,3];
        const actual = _(numbers).reduce(_.add,0);          
	expect(actual).toEqual(6);
    }); 
    
    
    it("map value + 1 of [] to equal []", function(){
        const numbers = [];
        const actual = _(numbers).map(number => number + 1);
	expect(_.toArray(actual)).toEqual([]);
    });	  
    
    it("map value + 1 of [1] to equal [2]", function(){
        const numbers = [1];
        const actual = _(numbers).map(number => number + 1);
	expect(_.toArray(actual)).toEqual([2]);
    }); 
    
    it("map value + 1 of [1,2,3] to equal [2,3,4]", function(){
        const numbers = [1,2,3];
        const actual = _(numbers).map((number,index) => {
            console.log(index);
            return number + 1
        });
	expect(_.toArray(actual)).toEqual([2,3,4]);
    });    
    
    
     it("map letter + letter of 'hello' to equal 'hheelllloo'", function(){
        const word = 'hello';
        const actual = _(word).map(letter => letter + letter).join("");
	expect(actual).toEqual('hheelllloo');
    }); 
    
    
    it("map attribute + attribute of {one:1, two:'hello'} to equal [2, 'hellohello']", function(){
        const object = {one:1, two:"hello"};
        const actual = _(object).map((attribute,key) => {
            console.log(attribute);
            console.log(key);
            return attribute + attribute;
        });
	expect(_.toArray(actual)).toEqual([2, "hellohello"]);
    });
    
    it("map attribute + attribute of {one:1, two:'hello'} to equal [2, 'hellohello']", function(){
        const object = {one:1, two:"hello"};
        const actual = _(object).filter((attribute, key) => key === "one").map(attribute => attribute + attribute);
	expect(_.toArray(actual)).toEqual([2]);
    });    
    
    
    
    
    
    
	
		
	
	
	
	
	
	
	
});
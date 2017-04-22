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
    
     it("pick", function(){
        const object = {one:1, two:2, three:3, four: {five:5, six:6}}
        const actual = _.pick(object, ["one", "four.five"])
	expect(actual).toEqual({one:1, four: {five:5}});
    });   
    
    const persons = [
            {id:1, firstName:"Kalle", lastName: "Anka", age: "43", childs: [3,4,5], parents: []},
            {id:2, firstName:"Musse", lastName: "Pigg", age: "57", childs: [], parents: []},
            {id:3, firstName:"Knatte", lastName: "Anka", age: "8", childs: [], parents:[1]},
            {id:4, firstName:"Fnatte", lastName: "Anka", age: "8", childs: [], parents:[1]},
            {id:5, firstName:"Tjatte", lastName: "Anka", age: "8", childs: [], parents:[1]},
            {id:6, firstName:"Sune", lastName: "Andersson", age: "10", childs: [], parents:[7,8]},
            {id:7, firstName:"Rudolf", lastName: "Andersson", age: "44", childs: [6,9,10], parents:[], spouses:[8]},
            {id:8, firstName:"Karin", lastName: "Andersson", age: "42", childs: [6,9,10], parents:[], spouses: [7]},
            {id:9, firstName:"Anna", lastName: "Andersson", age: "13", childs: [], parents:[7,8]},
            {id:10, firstName:"Håkan", lastName: "Andersson", age: "6", childs: [], parents:[7,8]}
        ];
        
    const isParent = person => person.childs.length > 0;    
        
    //hint: filter and map
    it("find the first name of all parents", function(){
        const parents = _(persons).filter(isParent).map(person => person.firstName);
        expect(_.toArray(parents)).toEqual([ 'Kalle', 'Rudolf', 'Karin' ]);
    });
    
    const renderPerson = person => `<tr><td>${person.firstName}</td><td>${person.lastName}</td><td>${person.age}</td></tr>`;
    
    //hint: filter, map, join 
    it("show information about parents in a table", function(){
        const parents = _(persons)
                .filter(isParent)
                .map(renderPerson)
                .join("");
        expect(parents).toEqual('<tr><td>Kalle</td><td>Anka</td><td>43</td></tr><tr><td>Rudolf</td><td>Andersson</td><td>44</td></tr><tr><td>Karin</td><td>Andersson</td><td>42</td></tr>');
    });
    
    const isFamily = (person1, person2) => person1.childs.concat(person1.spouses).concat(person1.parents).include(person2.id);
    
    it("families", function() {
        const result = _(persons).reduce((families, person, index) => {
            
            return person
        }, {});
        console.log(result);
    })
    
    
    	
});
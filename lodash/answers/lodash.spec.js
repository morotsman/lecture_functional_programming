describe('lodash', function () {
	
	
	
    

	
	
    /**************Assignments use lodash in all assignments**********************/
	
    //Documentaion at: https://lodash.com/docs/4.17.4
    
	
	//map
    it("convert list of squares to triangles", function(){
        const squares = [];
        
		const actual = _(squares).map(square => "triangle");
		
		expect(_.toArray(actual)).toEqual([]);
    });		
	
    it("convert list of squares to triangles", function(){
        const squares = ["square","square","square"];
        
		const actual = _(squares).map(square => "triangle");
		
		expect(_.toArray(actual)).toEqual(["triangle","triangle", "triangle"]);
    });	

	
	
	//map assignments
    it("add 1 to each number in the list", function(){
        const numbers = [1,2,3];
        const actual = _(numbers).map(number => number + 1);
		expect(_.toArray(actual)).toEqual([2,3,4]);
    });	  
	
    it("get length of each word in the list", function(){
        const words = ["a", "list", "of", "words"];
        const actual = _(words).map(word => word.length);
		expect(_.toArray(actual)).toEqual([1,4,2,5]);
    });		
    	
    it("get the first name of each person", function(){
        const persons = [{firstName:"Kalle", lastName:"Anka"},{firstName:"Musse", lastName:"Pigg"},{firstName:"Arne", lastName:"Anka"}];
        const actual = _(persons).map(person => person.firstName);
		expect(_.toArray(actual)).toEqual(["Kalle", "Musse", "Arne"]);
    });		


	
	
	//filter
    it("keep all the triangles", function(){
        const shapes = [];
        
		const actual = _(shapes).filter(shape => shape === "triangle");
		
		expect(_.toArray(actual)).toEqual([]);
    });	
	
	const isTriangle = shape => shape === "triangle";
		
    it("keep all the triangles", function(){
        const shapes = ["square","triangle","square", "triangle"];
        
		const actual1 = _(shapes).filter(shape => shape === "triangle");
		const actual2 = _(shapes).filter(isTriangle);
		
		expect(_.toArray(actual1)).toEqual(["triangle","triangle"]);
		expect(_.toArray(actual2)).toEqual(["triangle","triangle"]);
    });	

    it("keep all the stars", function(){
        const shapes = ["square","triangle","square", "triangle"];
        
		const actual = _(shapes).filter(shape => shape === "star");
		
		expect(_.toArray(actual)).toEqual([]);
    });		
	
	
	//filter assignements
	const isEven = number => number % 2 === 0;
	
    it("keep all even numbers", function(){
        const numbers = [1,2,3,4];
        
		const actual = _(numbers).filter(isEven);
		
		expect(_.toArray(actual)).toEqual([2,4]);
    });	


	//hint: startsWith	
    it("get the full name of all persons where the last name starts with A", function(){
        const persons = [{firstName:"Kalle", lastName:"Anka"},{firstName:"Musse", lastName:"Pigg"},{firstName:"Arne", lastName:"Anka"}];
        
		const actual = _(persons).filter(person => person.lastName.startsWith("A")).map(person => person.firstName + " " + person.lastName);
		
		expect(_.toArray(actual)).toEqual(["Kalle Anka","Arne Anka"]);
    });		
	
	
    it("get the full name of all persons where the last name starts with E", function(){
        const persons = [{firstName:"Kalle", lastName:"Anka"},{firstName:"Musse", lastName:"Pigg"},{firstName:"Arne", lastName:"Anka"}];
        
		const actual = _(persons).filter(person => person.lastName.startsWith("E")).map(person => person.firstName + " " + person.lastName);
		
		expect(_.toArray(actual)).toEqual([]);
    });		
	
	
	
	
	
	//reduce
    it("build an apple tree", function(){
        const apples = [];
		const originalAppleTree = { apples: 0, branches:7, trunk:1, leafs:1000};
		
        const appleTree = _(apples).reduce((appleTree, apple) => {
			appleTree.apples = appleTree.apples + 1;
			return appleTree;
		}, _.clone(originalAppleTree));
		
		expect(originalAppleTree).toEqual({ apples: 0, branches:7, trunk:1, leafs:1000});
		expect(appleTree).toEqual({ apples: 0, branches:7, trunk:1, leafs:1000});
    });		
	
	
    it("build an apple tree", function(){
        const apples = ["apple","apple","apple", "apple"];
		const originalAppleTree = { apples: 0, branches:7, trunk:1, leafs:1000};
		
        const appleTree = _(apples).reduce((appleTree, apple) => {
			appleTree.apples = appleTree.apples + 1;
			return appleTree;
		}, _.clone(originalAppleTree));
		
		expect(originalAppleTree).toEqual({ apples: 0, branches:7, trunk:1, leafs:1000});
		expect(appleTree).toEqual({ apples: 4, branches:7, trunk:1, leafs:1000});
    });	
	
	
	
	//reduce assignaments
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
	
	
	

	
    //map also works on string
    it("map letter + letter of 'hello' to equal 'hheelllloo'", function(){
        const word = 'hello';
        const actual = _(word).map(letter => letter + letter).join("");
		expect(actual).toEqual('hheelllloo');
    }); 
    
    
	//map also works on object
    it("map attribute + attribute of {one:1, two:'hello'} to equal [2, 'hellohello']", function(){
        const object = {one:1, two:"hello"};
        const actual = _(object).map((attribute,key) => {
            console.log(attribute);
            console.log(key);
            return attribute + attribute;
        });
		expect(_.toArray(actual)).toEqual([2, "hellohello"]);
    });	
	
	//map and filter also works on object
    it("map attribute + attribute of {one:1, two:'hello'} to equal [2, 'hellohello']", function(){
        const object = {one:1, two:"hello"};
        const actual = _(object).filter((attribute, key) => key === "one").map(attribute => attribute + attribute);
		expect(_.toArray(actual)).toEqual([2]);
    });
	
	
	


	
    
    
    const persons = [
            {id:1, firstName:"Kalle", lastName: "Anka", age: 43, childs: [3,4,5], parents: [], spouses: []},
            {id:2, firstName:"Musse", lastName: "Pigg", age: 57, childs: [], parents: [], spouses: []},
            {id:3, firstName:"Knatte", lastName: "Anka", age: 8, childs: [], parents:[1], spouses: []},
            {id:4, firstName:"Fnatte", lastName: "Anka", age: 8, childs: [], parents:[1], spouses: []},
            {id:5, firstName:"Tjatte", lastName: "Anka", age: 8, childs: [], parents:[1], spouses: []},
            {id:6, firstName:"Sune", lastName: "Andersson", age: 10, childs: [], parents:[7,8]},
            {id:7, firstName:"Rudolf", lastName: "Andersson", age: 44, childs: [6,10,11], parents:[], spouses:[8]},
            {id:8, firstName:"Karin", lastName: "Andersson", age: 42, childs: [6,10,11], parents:[], spouses: [7]},
			{id:9, firstName:"Mimmie", lastName: "Pigg", age: 42, childs: [], parents:[], spouses: []},
            {id:10, firstName:"Anna", lastName: "Andersson", age: 13, childs: [], parents:[7,8], spouses: []},
            {id:11, firstName:"Håkan", lastName: "Andersson", age: 6, childs: [], parents:[7,8], spouses: []}
        ];
        
    const isParent = person => person.childs.length > 0;    
	
	const isChild = person => person.parents.length > 0;
	
	const renderPerson = person => `<tr><td>${person.firstName}</td><td>${person.lastName}</td><td>${person.age}</td></tr>`;
	
	const isFamily = (person1, person2) => person1.childs.concat(person1.spouses).concat(person1.parents).include(person2.id);
	
	const fullName = person => person.firstName + " " + person.lastName;
	
	const not = fun => (...args) => !fun(...args);
	
	const olderThen = age => person => person.age > age;
	
	const youngerThen = age => person => person.age < age;
	
	const or = (fun1, fun2) => (...args) => fun1(...args) || fun2(...args);
	
	const and = (fun1, fun2) => (...args) => fun1(...args) && fun2(...args);
        
    //hint: filter and map
    it("find the first name of all parents", function(){
        const parents = _(persons).filter(isParent).map(fullName);
        expect(_.toArray(parents)).toEqual([ 'Kalle Anka', 'Rudolf Andersson', 'Karin Andersson' ]);
    });
    
    //hint: join 
    it("show information about parents in a table", function(){
        const parents = _(persons)
                .filter(isParent)
                .map(renderPerson)
                .join("");
        expect(parents).toEqual('<tr><td>Kalle</td><td>Anka</td><td>43</td></tr><tr><td>Rudolf</td><td>Andersson</td><td>44</td></tr><tr><td>Karin</td><td>Andersson</td><td>42</td></tr>');
    });
	
	//hint: sortBy 
    it("show information about parents in a table sorted by age", function(){
        const parents = _(persons)
                .filter(isParent)
				.sortBy("age")
                .map(renderPerson)
                .join("");
        expect(parents).toEqual('<tr><td>Karin</td><td>Andersson</td><td>42</td></tr><tr><td>Kalle</td><td>Anka</td><td>43</td></tr><tr><td>Rudolf</td><td>Andersson</td><td>44</td></tr>');
    });	
	
	//hint: orderBy, first, parseInt
    it("name of oldest person", function(){
        const oldestPerson = _(persons)
				.orderBy('age','desc')
				.map(fullName)
                .first();
        expect(oldestPerson).toEqual('Musse Pigg');
    });	

	//hint: size
    it("number of childrens", function(){
        const numberOfChildren = _(persons).filter(isChild).size();	
        expect(numberOfChildren).toEqual(6);
    });

	//try to use not and olderThen
	//Example: isBlack = color => color === 'black'
	//isBlack('black') === true
	//not(isBlack)('black') === false
	
	//Eaxample
	//olderThen(30)(45) === true
	//olderThen(30)(15) === false
    it("name of first person older than 30 in the list that does not have any children", function(){
        const actual = _(persons)
			.filter(olderThen(30))
			.filter(not(isParent))
			.map(fullName)
			.first();	
        expect(actual).toEqual('Musse Pigg');
    });  

	//hint: every
    it("is all personons older then 7?", function(){
        const actual = _(persons)
			.every(olderThen(7));	
        expect(actual).toEqual(false);
    });  
	
    it("is all personons older then 3?", function(){
        const actual = _(persons)
			.every(olderThen(3));	
        expect(actual).toEqual(true);
    });

	//hint: groupBy
    it("group all persons together on last name", function(){
        const actual = _(persons)
			.groupBy('lastName')
			.map(group => group.map(fullName));
		
		const expected = [
			['Kalle Anka', 'Knatte Anka', 'Fnatte Anka', 'Tjatte Anka'],
			[ 'Musse Pigg', 'Mimmie Pigg' ],
			[ 'Sune Andersson', 'Rudolf Andersson', 'Karin Andersson', 'Anna Andersson', 'Håkan Andersson' ]
		]
        expect(_.toArray(actual)).toEqual(expected);
    });		
	
	//hint: groupBy
    it("group all persons together on last name, only return the youngest person", function(){
        const actual = _(persons)
			.groupBy('lastName')
			.map(group => _(group).orderBy('age').map(fullName).first());
		
		const expected = ['Knatte Anka','Mimmie Pigg','Håkan Andersson'];
        expect(_.toArray(actual)).toEqual(expected);
    });	

	const parentOrChild = or(isChild,isParent);

	//hint: partition
    it("partition the persons in children and parents", function(){
        const actual = _(persons)
			.filter(parentOrChild)
			.partition(isParent)
			.map(partition => partition.map(fullName))
		
		const expected = [
			[ 'Kalle Anka', 'Rudolf Andersson', 'Karin Andersson' ],
			[ 'Knatte Anka', 'Fnatte Anka', 'Tjatte Anka', 'Sune Andersson', 'Anna Andersson', 'Håkan Andersson' ]
		];
        expect(_.toArray(actual)).toEqual(expected);
    });	

	//hint: partition
    it("find youngest child and parent", function(){
        const actual = _(persons)
			.filter(or(isChild,isParent))
			.partition(isParent)
			.map(partition => _(partition).orderBy('age').map(fullName).first())
		
		const expected = ['Karin Andersson' ,'Håkan Andersson' ];
		
        expect(_.toArray(actual)).toEqual(expected);
    });	

	const permutations = array => _(array).flatMap(v1 => array.map(v2 => [v1,v2]))
	
    it("find all permutations of [0,1]", function(){
        const actual = permutations([0,1])
		const expected = [[0,0],[0,1],[1,0],[1,1]];
		
        expect(_.toArray(actual)).toEqual(expected);
    });	
	
	const ageDifference = (person1,person2) => Math.abs(person1.age-person2.age); 

	//hint: use permutations
    it("find ", function(){
        const actual = permutations(persons)
			.filter(pair => pair[0].id !== pair[1].id)
			.map(pair => {
				return {
					person1: fullName(pair[0]), 
					person2: fullName(pair[1]), 
					difference: ageDifference(pair[0], pair[1])
				}
			}).filter(persons => persons.difference > 6 && persons.difference < 10);
		
		const expected = [
			{ person1: 'Anna Andersson', person2: 'Håkan Andersson', difference: 7 },
			{ person1: 'Håkan Andersson', person2: 'Anna Andersson', difference: 7 }
		];
		
        expect(_.toArray(actual)).toEqual(expected);
    });	
	
	
	
 
    
    	
});
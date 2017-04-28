describe('lodash', function () {



    //Documentaion at: https://lodash.com/docs/4.17.4

    const badGetFlowers = colorOfFlower => {
        if(colorOfFlower === "red") {
            return ['Roses', 'Tulips'];
        }
        return null;
    };


    it("imperative example with null instead of empty list", function () {
        const flowers = badGetFlowers('red');//will not work with 'black'

        var flowersThatStartsWithR = [];
        for(var i = 0; i < flowers.length; i++) {
            if(flowers[i].startsWith('R')){
                flowersThatStartsWithR.push(flowers[i]);
            }

        }

        expect(flowersThatStartsWithR).toEqual(['Roses']);
    });


    it("imperative example with null instead of empty list", function () {
        const flowers = badGetFlowers('black');

        var flowersThatStartsWithR = [];
        if(flowers !== null) {
            for(var i = 0; i < flowers.length; i++) {
                if(flowers[i].startsWith('R')){
                    flowersThatStartsWithR.push(flowers[i]);
                }

            }
        }

        expect(flowersThatStartsWithR).toEqual([]);
    });


    const goodGetFlowers = colorOfFlower => {
        if(colorOfFlower === "red") {
            return ['Roses', 'Tulips'];
        }
        return [];
    };

    it("imperative example with empty list instead of empty list", function () {
        const flowers = goodGetFlowers('black');

        var flowersThatStartsWithR = [];
        for(var i = 0; i < flowers.length; i++) {
            if(flowers[i].startsWith('R')){
                flowersThatStartsWithR.push(flowers[i]);
            }
        }

        expect(flowersThatStartsWithR).toEqual([]);
    });

    it("functional version", function () {
        const flowers = goodGetFlowers('red');

        const flowersThatStartsWithR = flowers.filter(flower => flower.startsWith('R'));

        expect(flowersThatStartsWithR).toEqual(['Roses']);
    });


    it("functional version", function () {
        const flowers = goodGetFlowers('black');

        const flowersThatStartsWithR = flowers.filter(flower => flower.startsWith('R'));

        expect(flowersThatStartsWithR).toEqual([]);
    });

    /***********************************map***************************************/

    it("convert list of squares to triangles", function () {
        const squares = [];

        const actual = _(squares).map(square => "triangle").value();

        expect(actual).toEqual([]);
    });

    it("convert list of squares to triangles", function () {
        const squares = ["square", "square", "square"];

        const actual = _(squares).map(square => "triangle").value();

        expect(actual).toEqual(["triangle", "triangle", "triangle"]);
    });


    //map assignments
    it("add 1 to each number in the list", function () {
        // const numbers = [1, 2, 3];
        //
        // const actual =
        //
        // expect(actual).toEqual([2, 3, 4]);
    });

    it("get length of each word in the list", function () {
        // const words = ["a", "list", "of", "words"];
        //
        // const actual =
        //
        // expect(actual).toEqual([1, 4, 2, 5]);
    });

    it("get the first name of each person", function () {
        // const persons = [
        //     {firstName: "Kalle", lastName: "Anka"},
        //     {firstName: "Musse", lastName: "Pigg"},
        //     {firstName: "Arne", lastName: "Anka"}];
        //
        // const actual =
        //
        // expect(actual).toEqual(["Kalle", "Musse", "Arne"]);
    });


    /**************************************filter*******************************/

    it("keep all the triangles", function () {
        const shapes = [];

        const actual = _(shapes).filter(shape => shape === "triangle").value();

        expect(actual).toEqual([]);
    });

    const isTriangle = shape => shape === "triangle";

    it("keep all the triangles", function () {
        const shapes = ["square", "triangle", "square", "triangle"];

        const actual1 = _(shapes).filter(shape => shape === "triangle").value();
        const actual2 = _(shapes).filter(shape => isTriangle(shape)).value();
        const actual3 = _(shapes).filter(isTriangle).value();

        expect(actual1).toEqual(["triangle", "triangle"]);
        expect(actual2).toEqual(["triangle", "triangle"]);
        expect(actual3).toEqual(["triangle", "triangle"]);
    });

    it("keep all the stars", function () {
        const shapes = ["square", "triangle", "square", "triangle"];

        const actual = _(shapes).filter(shape => shape === "star").value();

        expect(actual).toEqual([]);
    });


    //filter assignements
    const isEven = number => number % 2 === 0;

    it("keep all even numbers", function () {
        // const numbers = [1, 2, 3, 4];
        //
        // const actual =
        //
        // expect(actual).toEqual([2, 4]);
    });


    //hint: map, filter, startsWith
    it("get the full name of all persons where the last name starts with A", function () {
        // const persons = [{firstName: "Kalle", lastName: "Anka"},
        //     {firstName: "Musse", lastName: "Pigg"},
        //     {firstName: "Arne", lastName: "Anka"}];
        //
        // const actual =
        //
        // expect(actual).toEqual(["Kalle Anka", "Arne Anka"]);
    });

    it("get the full name of all persons where the last name starts with E", function () {
        // const persons = [{firstName: "Kalle", lastName: "Anka"},
        //     {firstName: "Musse", lastName: "Pigg"},
        //     {firstName: "Arne", lastName: "Anka"}];
        //
        // const actual =
        //
        // expect(actual).toEqual([]);
    });


    /*************************************reduce***************************************/

    it("build an apple tree", function () {
        const apples = [];
        const originalAppleTree = {apples: 0, branches: 7, trunk: 1, leafs: 1000};

        const appleTree = _(apples).reduce((appleTree, apple) => {
            appleTree.apples = appleTree.apples + 1;
            return appleTree;
        }, _.clone(originalAppleTree));

        expect(originalAppleTree).toEqual({apples: 0, branches: 7, trunk: 1, leafs: 1000});
        expect(appleTree).toEqual({apples: 0, branches: 7, trunk: 1, leafs: 1000});
    });


    it("build an apple tree", function () {
        const apples = ["apple", "apple", "apple", "apple"];
        const originalAppleTree = {apples: 0, branches: 7, trunk: 1, leafs: 1000};

        const appleTree = _(apples).reduce((appleTree, apple) => {
            appleTree.apples = appleTree.apples + 1;
            return appleTree;
        }, _.clone(originalAppleTree));

        expect(originalAppleTree).toEqual({apples: 0, branches: 7, trunk: 1, leafs: 1000});
        expect(appleTree).toEqual({apples: 4, branches: 7, trunk: 1, leafs: 1000});
    });


    //reduce assignaments
    it("sum of [] to equal 0", function () {
        // const numbers = [];
        //
        // const actual =
        //
        // expect(actual).toEqual(0);
    });

    it("sum of [1] to equal 1", function () {
        // const numbers = [1];
        //
        // const actual = _(numbers)
        //
        // expect(actual).toEqual(1);
    });

    it("sum of [1,2,3] to equal 6", function () {
        // const numbers = [1, 2, 3];
        //
        // const actual =
        //
        // expect(actual).toEqual(6);
    });


    /************************************More about lodash***********************/


    //map also works on string
    it("map letter + letter of 'hello' to equal 'hheelllloo'", function () {
        const word = 'hello';

        const actual = _(word).map(letter => letter + letter).join("");

        expect(actual).toEqual('hheelllloo');
    });


    //map also works on object
    it("map attribute + attribute of {one:1, two:'hello'} to equal [2, 'hellohello']", function () {
        const object = {one: 1, two: "hello"};

        const actual = _(object).map((attribute, key) => attribute + attribute).value();

        expect(actual).toEqual([2, "hellohello"]);
    });

    //map and filter also works on object
    it("map attribute + attribute of {one:1, two:'hello'} to equal [2, 'hellohello']", function () {
        const object = {one: 1, two: "hello"};

        const actual = _(object).filter((attribute, key) => key === "one").map(attribute => attribute + attribute).value();

        expect(actual).toEqual([2]);
    });


    const persons = [
        {id: 1, firstName: "Kalle", lastName: "Anka", age: 43, childs: [3, 4, 5], parents: [], spouses: []},
        {id: 2, firstName: "Musse", lastName: "Pigg", age: 57, childs: [], parents: [], spouses: []},
        {id: 3, firstName: "Knatte", lastName: "Anka", age: 8, childs: [], parents: [1], spouses: []},
        {id: 4, firstName: "Fnatte", lastName: "Anka", age: 8, childs: [], parents: [1], spouses: []},
        {id: 5, firstName: "Tjatte", lastName: "Anka", age: 8, childs: [], parents: [1], spouses: []},
        {id: 6, firstName: "Sune", lastName: "Andersson", age: 10, childs: [], parents: [7, 8]},
        {id: 7, firstName: "Rudolf", lastName: "Andersson", age: 44, childs: [6, 10, 11], parents: [], spouses: [8]},
        {id: 8, firstName: "Karin", lastName: "Andersson", age: 42, childs: [6, 10, 11], parents: [], spouses: [7]},
        {id: 9, firstName: "Mimmie", lastName: "Pigg", age: 42, childs: [], parents: [], spouses: []},
        {id: 10, firstName: "Anna", lastName: "Andersson", age: 13, childs: [], parents: [7, 8], spouses: []},
        {id: 11, firstName: "Håkan", lastName: "Andersson", age: 6, childs: [], parents: [7, 8], spouses: []}
    ];


    const fullName = person => person.firstName + " " + person.lastName;

    const isParent = person => person.childs.length > 0;

    //assignment filter, map
    it("find the first name of all parents", function () {
        // const parents =
        //
        // expect(parents).toEqual(['Kalle Anka', 'Rudolf Andersson', 'Karin Andersson']);
    });


    /***********************************join********************************/

    //join 
    it("join", function () {
        const actaul = _([1, 2, 3, 4]).join(";");

        expect(actaul).toEqual('1;2;3;4');
    });

    const renderPerson = person => `<tr><td>${person.firstName}</td><td>${person.lastName}</td><td>${person.age}</td></tr>`;

    //assignment
    it("show information about parents in a table", function () {
        //const parents =

        //expect(parents).toEqual('<tr><td>Kalle</td><td>Anka</td><td>43</td></tr><tr><td>Rudolf</td><td>Andersson</td><td>44</td></tr><tr><td>Karin</td><td>Andersson</td><td>42</td></tr>');
    });


    /**********************************sortBy**************************************/


    it("sortBy", function () {
        const actaul = _([4, 2, 3, 1]).sortBy().value();

        expect(actaul).toEqual([1, 2, 3, 4]);
    });

    //assignment
    it("show information about parents in a table sorted by age", function () {
        //const parents =

        //expect(parents).toEqual('<tr><td>Karin</td><td>Andersson</td><td>42</td></tr><tr><td>Kalle</td><td>Anka</td><td>43</td></tr><tr><td>Rudolf</td><td>Andersson</td><td>44</td></tr>');
    });

    /***********************************orderBy & first**************************************/

    it("orderBy", function () {
        const actaul = _([{value: 1}, {value: 2}, {value: 3}, {value: 4}]).orderBy('value', 'desc').value();

        expect(actaul).toEqual([{value: 4}, {value: 3}, {value: 2}, {value: 1}]);
    });

    it("first", function () {
        const actaul = _([{value: 1}, {value: 2}, {value: 3}, {value: 4}]).first();

        expect(actaul).toEqual({value: 1});
    });

    //assignment
    it("name of oldest person", function () {
        //const oldestPerson =

        //expect(oldestPerson).toEqual('Musse Pigg');
    });


    /**************************************size***********************************************/

    it("size", function () {
        const actaul = _([1, 2, 3, 4]).size();

        expect(actaul).toEqual(4);
    });

    const isChild = person => person.parents.length > 0;

    ////assignment
    it("number of childrens", function () {
        //const numberOfChildren =

        //expect(numberOfChildren).toEqual(6);
    });


    /********************************not*****************************************************/

    const not = fun => (...args) => !fun(...args);

    it("not", function () {
        const isBlack = color => color === 'black';

        expect(isBlack('black')).toEqual(true);
        expect(not(isBlack)('black')).toEqual(false);
    });

    const olderThen = age => person => person.age > age;

    it("olderThen", function () {
        const olderThen30 = olderThen(30);

        expect(olderThen30({age: 30})).toEqual(false);
        expect(olderThen30({age: 31})).toEqual(true);
    });


    //assignment: try to use not and olderThen
    it("name of first person older than 30 in the list that does not have any children", function () {
        //const actual =

        //expect(actual).toEqual('Musse Pigg');
    });

    /************************************every*****************************/

    it("every", function () {
        expect(_([1, 2, 3, 4]).every(value => value < 5)).toEqual(true);
        expect(_([1, 2, 3, 4]).every(value => value < 4)).toEqual(false);
    });

    it("is all personons older then 7?", function () {
        const actual = _(persons)
            .every(olderThen(7));

        expect(actual).toEqual(false);
    });

    //assignment
    it("is all personons older then 3?", function () {
        //const actual =

        //expect(actual).toEqual(true);
    });

    /****************************groupBy******************************/

    it("groupBy", function () {
        const actual = _([1, 2, 3, 2])
            .groupBy()
            .value();

        const expected = {
            1: [1],
            2: [2, 2],
            3: [3],
        }

        expect(actual).toEqual(expected);
    });

    it("groupBy", function () {
        const actual = _([])
            .groupBy()
            .value();

        const expected = {}

        expect(actual).toEqual(expected);
    });

    //assignment
    it("group all persons together on last name", function () {
        // const actual =
        //
        // const expected = [
        //     ['Kalle Anka', 'Knatte Anka', 'Fnatte Anka', 'Tjatte Anka'],
        //     ['Musse Pigg', 'Mimmie Pigg'],
        //     ['Sune Andersson', 'Rudolf Andersson', 'Karin Andersson', 'Anna Andersson', 'Håkan Andersson']
        // ]
        //
        // expect(actual).toEqual(expected);
    });

    //assignment
    it("group all persons together on last name, only return the youngest person", function () {
        // const actual =
        //
        // const expected = ['Knatte Anka', 'Mimmie Pigg', 'Håkan Andersson'];
        //
        // expect(actual).toEqual(expected);
    });


    /********************************partition**********************************/

    const or = (fun1, fun2) => (...args) => fun1(...args) || fun2(...args);

    const parentOrChild = or(isChild, isParent);

    it("partition", function () {
        const actual = _([1, 2, 3, 2])
            .partition(isEven)
            .value();

        const expected = [[2, 2], [1, 3]]

        expect(actual).toEqual(expected);
    });

    it("partition", function () {
        const actual = _([])
            .partition(isEven)
            .value();

        const expected = [[], []];

        expect(actual).toEqual(expected);
    });

    //assignment
    it("partition the persons in children and parents", function () {
        // const actual =
        //
        // const expected = [
        //     ['Kalle Anka', 'Rudolf Andersson', 'Karin Andersson'],
        //     ['Knatte Anka', 'Fnatte Anka', 'Tjatte Anka', 'Sune Andersson', 'Anna Andersson', 'Håkan Andersson']
        // ];
        // expect(actual).toEqual(expected);
    });

    //assignment
    it("find youngest child and parent", function () {
        // const actual =
        //
        // const expected = ['Karin Andersson', 'Håkan Andersson'];
        //
        // expect(actual).toEqual(expected);
    });

    /**********************************permutations***********************/

    const permutations = array => _(array).flatMap(v1 => array.map(v2 => [v1, v2]))
    //Same as: const permutations = array => _(array).map(v1 => array.map(v2 => [v1,v2])).flatten()

    it("permutations", function () {
        const actual = permutations([0, 1]).value();

        const expected = [[0, 0], [0, 1], [1, 0], [1, 1]];

        expect(actual).toEqual(expected);
    });

    const ageDifference = (person1, person2) => Math.abs(person1.age - person2.age);

    //assignment
    it("find ", function () {
        // const actual =
        //
        // const expected = [
        //     {person1: 'Anna Andersson', person2: 'Håkan Andersson', difference: 7},
        //     {person1: 'Håkan Andersson', person2: 'Anna Andersson', difference: 7}
        // ];
        //
        // expect(actual).toEqual(expected);
    });


});
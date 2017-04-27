describe('array', function () {


    /********************Motivation SRP************************************/


    const slowFibonacci = number => {
        if (number === 1) return 0;
        if (number === 2) return 1;
        return slowFibonacci(number - 1) + slowFibonacci(number - 2)
    };


    it("test fibonacci", function () {
        var startTime = new Date().getTime();
        expect(slowFibonacci(1)).toEqual(0);
        console.log("Completed in : " + (new Date().getTime() - startTime));

        startTime = new Date().getTime();
        expect(slowFibonacci(2)).toEqual(1);
        console.log("Completed in : " + (new Date().getTime() - startTime));

        startTime = new Date().getTime();
        expect(slowFibonacci(3)).toEqual(1);
        console.log("Completed in : " + (new Date().getTime() - startTime));

        startTime = new Date().getTime();
        expect(slowFibonacci(4)).toEqual(2);
        console.log("Completed in : " + (new Date().getTime() - startTime));

        startTime = new Date().getTime();
        expect(slowFibonacci(5)).toEqual(3);
        console.log("Completed in : " + (new Date().getTime() - startTime));

        startTime = new Date().getTime();
        expect(slowFibonacci(6)).toEqual(5);
        console.log("Completed in : " + (new Date().getTime() - startTime));

        startTime = new Date().getTime();
        expect(slowFibonacci(7)).toEqual(8);
        console.log("Completed in : " + (new Date().getTime() - startTime));

        startTime = new Date().getTime();
        expect(slowFibonacci(8)).toEqual(13);
        console.log("Completed in : " + (new Date().getTime() - startTime));

        startTime = new Date().getTime();
        expect(slowFibonacci(9)).toEqual(21);
        console.log("Completed in : " + (new Date().getTime() - startTime));

        startTime = new Date().getTime();
        expect(slowFibonacci(10)).toEqual(34);
        console.log("Completed in : " + (new Date().getTime() - startTime));

        //startTime = new Date().getTime();
        //expect(slowFibonacci(40)).toEqual(63245986);
        //console.log("Completed in : " + (new Date().getTime() - startTime));

        //startTime = new Date().getTime();
        //expect(slowFibonacci(42)).toEqual(165580141);
        //console.log("Completed in : " + (new Date().getTime() - startTime));

        //startTime = new Date().getTime();
        //expect(slowFibonacci(43)).toEqual(267914296);
        //console.log("Completed in : " + (new Date().getTime() - startTime));
    });

    const timed = fun => (...args) => {
        const startTime = new Date().getTime();
        const result = fun(...args);
        console.log("Function competed in " + (new Date().getTime() - startTime) + " ms!!!");
        return result;
    }

    const timedSlowFibonacci = timed(slowFibonacci);


    it("test fibonacci", function () {
        expect(timedSlowFibonacci(1)).toEqual(0);
        expect(timedSlowFibonacci(2)).toEqual(1);
        expect(timedSlowFibonacci(3)).toEqual(1);
        expect(timedSlowFibonacci(4)).toEqual(2);
        expect(timedSlowFibonacci(5)).toEqual(3);
        expect(timedSlowFibonacci(6)).toEqual(5);
        expect(timedSlowFibonacci(7)).toEqual(8);
        expect(timedSlowFibonacci(8)).toEqual(13);
        expect(timedSlowFibonacci(9)).toEqual(21);
        expect(timedSlowFibonacci(10)).toEqual(34);
        //expect(timedSlowFibonacci(40)).toEqual(63245986);
        //expect(timedSlowFibonacci(42)).toEqual(165580141);
        //expect(timedSlowFibonacci(43)).toEqual(267914296);
    });


    const fastFibonacci = (() => {
        const cache = {};
        return number => {
            if (cache[number]) return cache[number];

            if (number === 1) {
                cache[number] = 0;
                return 0;
            }
            if (number === 2) {
                cache[number] = 1;
                return 1;
            }

            const result = fastFibonacci(number - 1) + fastFibonacci(number - 2);
            cache[number] = result;
            return result;
        }
    })();


    it("test fast fibonacci", function () {
        var startTime = new Date().getTime();
        expect(fastFibonacci(1)).toEqual(0);
        console.log("Completed in : " + (new Date().getTime() - startTime));

        startTime = new Date().getTime();
        expect(fastFibonacci(2)).toEqual(1);
        console.log("Completed in : " + (new Date().getTime() - startTime));

        startTime = new Date().getTime();
        expect(fastFibonacci(3)).toEqual(1);
        console.log("Completed in : " + (new Date().getTime() - startTime));

        startTime = new Date().getTime();
        expect(fastFibonacci(4)).toEqual(2);
        console.log("Completed in : " + (new Date().getTime() - startTime));

        startTime = new Date().getTime();
        expect(fastFibonacci(5)).toEqual(3);
        console.log("Completed in : " + (new Date().getTime() - startTime));

        startTime = new Date().getTime();
        expect(fastFibonacci(6)).toEqual(5);
        console.log("Completed in : " + (new Date().getTime() - startTime));

        startTime = new Date().getTime();
        expect(fastFibonacci(7)).toEqual(8);
        console.log("Completed in : " + (new Date().getTime() - startTime));

        startTime = new Date().getTime();
        expect(fastFibonacci(8)).toEqual(13);
        console.log("Completed in : " + (new Date().getTime() - startTime));

        startTime = new Date().getTime();
        expect(fastFibonacci(9)).toEqual(21);
        console.log("Completed in : " + (new Date().getTime() - startTime));

        startTime = new Date().getTime();
        expect(fastFibonacci(10)).toEqual(34);
        console.log("Completed in : " + (new Date().getTime() - startTime));

        startTime = new Date().getTime();
        expect(fastFibonacci(40)).toEqual(63245986);
        console.log("Completed in : " + (new Date().getTime() - startTime));

        startTime = new Date().getTime();
        expect(fastFibonacci(42)).toEqual(165580141);
        console.log("Completed in : " + (new Date().getTime() - startTime));

        startTime = new Date().getTime();
        expect(fastFibonacci(43)).toEqual(267914296);
        console.log("Completed in : " + (new Date().getTime() - startTime));
    });


    const memoized = fun => {
        const cache = {};
        return (...args) => {
            const key = args.join("");
            if (cache[key]) return cache[key];
            const result = fun(...args);
            cache[key] = result;
            return result;
        }
    }

    const fibonacci = memoized(number => {
        if (number === 1) return 0;
        if (number === 2) return 1;
        return fibonacci(number - 1) + fibonacci(number - 2)
    });

    const timedFibonacci = timed(fibonacci);

    it("test fibonacci fast", function () {
        expect(timedFibonacci(1)).toEqual(0);
        expect(timedFibonacci(2)).toEqual(1);
        expect(timedFibonacci(3)).toEqual(1);
        expect(timedFibonacci(4)).toEqual(2);
        expect(timedFibonacci(5)).toEqual(3);
        expect(timedFibonacci(6)).toEqual(5);
        expect(timedFibonacci(7)).toEqual(8);
        expect(timedFibonacci(8)).toEqual(13);
        expect(timedFibonacci(9)).toEqual(21);
        expect(timedFibonacci(10)).toEqual(34);
        expect(timedFibonacci(40)).toEqual(63245986);
        expect(timedFibonacci(42)).toEqual(165580141);
        expect(timedFibonacci(43)).toEqual(267914296);
    });


    /**************Motivation**********************/


    class LimitedResource {

        constructor() {
            this.counter = 0;
        }

        get getResource() {
            if (this.counter === 0) {
                this.counter++;
                return "Safe"
            }
            throw "Resource depleted"
        }

        get releaseResource() {
            this.counter = 0;
        }
    }

    let resourceHolder = new LimitedResource();

    const resourceUser = () => {
        let counter = 0;
        return resource => {
            if (counter === 0) {
                counter++;
            } else {
                counter = 0;
                throw "Ojsan, tänkte inte på det..."
            }
        }
    };

    it("test1", function () {
        let resource = resourceHolder.getResource;
        let userOfResource = resourceUser();
        userOfResource(resource);
        userOfResource(resource);
        resourceHolder.releaseResource
    });

    it("test2", function () {
        let resource = resourceHolder.getResource;
        let userOfResource = resourceUser();
        userOfResource(resource);
        resourceHolder.releaseResource
    });

    class SafeLimitedResource {
        constructor(limitedResource) {
            this.limitedResource = limitedResource;
        }

        useResource(fun) {
            try {
                fun(this.limitedResource.getResource);
            } finally {
                this.limitedResource.releaseResource;
            }
        }

    }

    const safeResourceHolder = new SafeLimitedResource(new LimitedResource());

    it("test3", function () {
        let userOfResource = resourceUser();
        safeResourceHolder.useResource(userOfResource)
        safeResourceHolder.useResource(userOfResource)
    });

    it("test4", function () {
        let userOfResource = resourceUser();
        safeResourceHolder.useResource(userOfResource)
    });

    /*****Assignments********/


});
const delayTime = 500 // miliseconds

const canvas = (p: p5) => {
    p.setup = async function() {
        p.createP("hello");
        p.createP("world");
        const era = new Sieve(100);
        await era.calculate();

        const bru = new Brute(100);
        await bru.calculate();
    }

    p.draw = function() {
    }
}


new p5(canvas);

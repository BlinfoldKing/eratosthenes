const delayTime = 100 // miliseconds

const canvas = (p: p5) => {
    p.setup = async function() {
        p.createCanvas(p.windowWidth, p.windowHeight);
        const era = new Sieve(100, p);
        await era.calculate();

        const bru = new Brute(100);
        await bru.calculate();
    }

    p.draw = function() {
    }
}


new p5(canvas);

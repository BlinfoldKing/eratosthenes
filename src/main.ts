const delayTime = 0 // miliseconds

const canvas = (p: p5) => {
    p.setup = async function() {
        p.createCanvas(p.windowWidth, p.windowHeight);
        const era = new Sieve(100, p);
        era.calculate();

        const bru = new Brute(100, p);
        bru.calculate();
    }

    p.draw = function() {
    }
}


new p5(canvas);

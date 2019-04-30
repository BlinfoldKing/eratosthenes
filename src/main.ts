let delayTime = 0 // miliseconds

const canvas = (p: p5) => {
    let input: any = p.createInput();
    function visualize() {
        p.clear();
        p.text('Upper bound: ', 1100, input.y - 160);


        let val = input.value();
        const era = new Sieve(val);
        era.visualize(p);

        const bru = new Brute(val);
        bru.visualize(p);
    }


    p.setup = function() {
        p.createCanvas(p.windowWidth, p.windowHeight * 2);
        
        input.position(1100, p.windowHeight/2);
        p.text('Upper bound: ', 1100, input.y - 160);

        let button = p.createButton('start');
        button.position(1200, p.windowHeight / 2 + 30);
        button.mouseClicked(visualize);

    }

    p.draw = function() {


    }
}

class Main {
    static visualize(): void {
        new p5(canvas)
    }

    static async calculateBrute(i: number): Promise<number[]> {
        const bru = new Brute(i);

        let t0 = performance.now()
        await bru.calculate();
        let t1 = performance.now()

        return [i, bru.proccess_counter, t1 - t0]
    }

    static async calculateSieve(i: number): Promise<number[]> {
        const era = new Sieve(i);

        let t0 = performance.now()
        await era.calculate();
        let t1 = performance.now()

        return [i, era.proccess_counter, t1 - t0]
    }
}

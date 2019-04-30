let delayTime = 0 // miliseconds

const canvas = (p: p5) => {
    let input_html = p.createInput();
    function visualize() {
        let input: any = input_html;
        p.clear();

        let val = input.value();
        const era = new Sieve(val);
        era.visualize(p);

        const bru = new Brute(val);
        bru.visualize(p);
    }


    p.setup = function() {
        p.createCanvas(p.windowWidth, p.windowHeight * 2);
        let input: any = input_html;
        input.position(1100, p.windowHeight/2);
        input_html.addClass('input');
        input_html.attribute('type', 'number');
        input_html.attribute('placeholder', 'Enter Upper bound (2..300)');

        let button = p.createButton('Start Simulation');
        button.position(1200, p.windowHeight / 2 + 30 + input.height);
        button.mouseClicked(visualize);
        button.addClass('button')
        button.addClass('is-info')

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

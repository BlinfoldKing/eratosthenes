let delayTime = 0 // miliseconds

const canvas = (p: p5) => {
    let slider: any = p.createSlider(2, 300, 100);
    function visualize() {
        p.clear();
        p.text('Test Case', 1100, slider.y - 160);
        p.text('2', 1080, slider.y - 140);
        p.text('300', slider.width + 1120, slider.y - 140);

        let val = slider.value();
        const era = new Sieve(val);
        era.visualize(p);

        const bru = new Brute(val);
        bru.visualize(p);
    }


    p.setup = function() {
        p.createCanvas(p.windowWidth, p.windowHeight * 2);

        slider.position(1100, p.windowHeight/2);
        p.text('Test Case', 1100, slider.y - 160);
        p.text('2', 1080, slider.y - 140);
        p.text('300', slider.width + 1120, slider.y - 140);

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

    static calculate(): void {
        // time complexity counter
    }
}

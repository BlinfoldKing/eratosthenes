const canvas = (p: p5) => {
    p.setup = function() {
    }

    p.draw = function() {
        // p.noLoop();
        let i = 0;
        // while(i < 100) {
            setInterval(() => {
                p.createP("Hello World")
            }, 5000);
        // }
    }
}


new p5(canvas);

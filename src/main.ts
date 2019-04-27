const canvas = (p: p5) => {
    p.setup = async function() {
        p.createP("hello");
        await sleep(1000);
        p.createP("world");
    }

    p.draw = function() {
    }
}


new p5(canvas);

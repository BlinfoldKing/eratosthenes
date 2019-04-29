type position = {
    x: number,
    y: number
}

class Sieve extends Primality {
    private prime: boolean[];
    private table: position[];

    constructor (n: number) {
        super(n);
        this.upperBound = n;
    }

    // An utility method to build the sieve of eratosthenes algorithm
    public async visualize(canvas: p5): Promise<void> {

        // Create a boolean array prime[0..N] and 
        // initialize all entries it as true 
        this.prime = new Array<boolean>(this.upperBound+1);
        this.table = new Array<position>(this.upperBound+1);
        let y = 0;
        let x = 0;
        for (let i: number = 0; i <= this.upperBound; i++) {
            this.prime[i] = true;

            // draw start
            if (i !== 0) {
                if (i > 1) {
                    this.table[i] = {x: x * 50, y: y * 50};
                    canvas.rect(x * 50, y * 50, 50, 50);
                    canvas.textAlign(canvas.CENTER, canvas.CENTER);
                    canvas.text(i, 25 + x * 50, 25 + y * 50);
                }
                if (i % 20 == 0) {
                    x = 0;
                    y++;
                } else {
                    x++;
                }
            }
            // draw end
        }

        // Changes the value in prime[i]
        // The value will finally be false if i is not prime, else true
        for (let i: number = 2; (i*i) <= this.upperBound; i++) {

            // If prime[i] is not changed, then it is a prime
            if(this.prime[i] == true) {
                // draw start
                let pos: position = this.table[i];
                canvas.fill('#3300ff');
                canvas.rect(pos.x, pos.y, 50, 50);
                canvas.textAlign(canvas.CENTER, canvas.CENTER);
                canvas.fill('#000');
                canvas.text(i, 25 + pos.x, 25 + pos.y);
                // draw end


                // Update all multiples of i to false
                for (let j: number = (i*i); j <= this.upperBound; j += i) {
                    this.prime[j] = false;

                    // draw start
                    let pos: position = this.table[j];
                    canvas.fill('#ff0033');
                    canvas.rect(pos.x, pos.y, 50, 50);
                    canvas.textAlign(canvas.CENTER, canvas.CENTER);
                    canvas.fill('#fff');
                    canvas.text(j, 25 + pos.x, 25 + pos.y);
                    // draw end

                    await sleep(delayTime);
                }
            }
        }

        for (let i: number = 2; i < this.prime.length; i++) {
            if (this.prime[i]) {
                // draw start
                let pos: position = this.table[i];
                canvas.fill('#00ff33');
                canvas.rect(pos.x, pos.y, 50, 50);
                canvas.textAlign(canvas.CENTER, canvas.CENTER);
                canvas.fill('#000');
                canvas.text(i, 25 + pos.x, 25 + pos.y);
                // draw end
            }
        }
    }

    public async calculate(): Promise<boolean[]> {
        return [false];
    }

}

type position = {
    x: number,
    y: number
}

class Sieve {
    private upperBound: number;
    private prime: boolean[];
    private table: position[];
    private canvas: p5;

    constructor (n: number, p: p5) {
        this.upperBound = n;
        this.canvas = p;
    }

    // An utility method to build the sieve of eratosthenes algorithm
    public async calculate(): Promise<void> {

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
                    this.canvas.rect(x * 50, y * 50, 50, 50);
                    this.canvas.textAlign(this.canvas.CENTER, this.canvas.CENTER);
                    this.canvas.text(i, 25 + x * 50, 25 + y * 50);
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
                this.canvas.fill('#3300ff');
                this.canvas.rect(pos.x, pos.y, 50, 50);
                this.canvas.textAlign(this.canvas.CENTER, this.canvas.CENTER);
                this.canvas.fill('#000');
                this.canvas.text(i, 25 + pos.x, 25 + pos.y);
                // draw end


                // Update all multiples of i to false
                for (let j: number = (i*i); j <= this.upperBound; j += i) {
                    this.prime[j] = false;

                    // draw start
                    let pos: position = this.table[j];
                    this.canvas.fill('#ff0033');
                    this.canvas.rect(pos.x, pos.y, 50, 50);
                    this.canvas.textAlign(this.canvas.CENTER, this.canvas.CENTER);
                    this.canvas.fill('#fff');
                    this.canvas.text(j, 25 + pos.x, 25 + pos.y);
                    // draw end

                    await sleep(delayTime);
                }
            }
        }

        for (let i: number = 2; i < this.prime.length; i++) {
            if (this.prime[i]) {
                // draw start
                let pos: position = this.table[i];
                this.canvas.fill('#00ff33');
                this.canvas.rect(pos.x, pos.y, 50, 50);
                this.canvas.textAlign(this.canvas.CENTER, this.canvas.CENTER);
                this.canvas.fill('#000');
                this.canvas.text(i, 25 + pos.x, 25 + pos.y);
                // draw end
            }
        }
    }

}

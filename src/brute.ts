class Brute {

    private upperBound: number;
    private canvas: p5;

    constructor(n: number, p: p5) {
        this.upperBound = n;
        this.canvas = p;
    }

    // An utility method to check wheter a number
    // is prime or not
    private async isPrime(n: number): Promise<boolean> {

        // Corner case
        if (n <= 1) return false;

        // Check from 2 to n-1
        for (let i: number = 2; i < n; i++) {

            // If n divisible by i, return false
            if (n % i == 0) return false;
            await sleep(delayTime);
        }

        // N is a prime number, return true
        return true;
    }

    // Method to print all prime numbers
    public async calculate(): Promise<void> {
        // draw start
        let y = 0;
        let x = 0;
        let base_height = (this.upperBound / 20) * 50 + 100 
        for (let i: number = 0; i <= this.upperBound; i++) {

            if (await this.isPrime(i)) {
                this.canvas.fill('#00ff33');
            } else {
                this.canvas.fill('#ff0033');
            }

            if (i !== 0) {
                if (i > 1) {
                    this.canvas.rect(x * 50, base_height + y * 50, 50, 50);
                    this.canvas.textAlign(this.canvas.CENTER, this.canvas.CENTER);
                    this.canvas.fill('#000');
                    this.canvas.text(i, 25 + x * 50, 25 + base_height + y * 50);
                }

                if (x % 20 == 0) {
                    x = 0;
                    y++;
                } else {
                    x++;
                }
            }
        }
    }
}

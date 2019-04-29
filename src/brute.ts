class Brute extends Primality {

    constructor(n: number) {
        super(n)
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
            this.proccess_counter++;
        }

        // N is a prime number, return true
        return true;
    }

    // Method to print all prime numbers
    public async visualize(canvas: p5): Promise<void> {
        // draw start
        let y = 0;
        let x = 0;
        let base_height = (this.upperBound / 20) * 50 + 100 
        for (let i: number = 0; i <= this.upperBound; i++) {

            if (await this.isPrime(i)) {
                canvas.fill('#00ff33');
            } else {
                canvas.fill('#ff0033');
            }


            if (i !== 0) {
                if (i > 1) {
                    canvas.rect(x * 50, base_height + y * 50, 50, 50);
                    canvas.textAlign(canvas.CENTER, canvas.CENTER);
                    canvas.fill('#000');
                    canvas.text(i, 25 + x * 50, 25 + base_height + y * 50);
                }

                if (x % 19 == 0 && x > 0) {
                    x = 0;
                    y++;
                } else {
                    x++;
                }
            }
        }
    }

    public async calculate(): Promise<boolean[]> {
        // draw start
        let result: boolean[] = Array<boolean>(this.upperBound);
        
        let y = 0;
        let x = 0;
        let base_height = (this.upperBound / 20) * 50 + 100 
        for (let i: number = 0; i <= this.upperBound; i++) {

            if (await this.isPrime(i)) {
                result[i] = true;
            } else {
                result[i] = false;
            }


        }
        return result;
    }
}

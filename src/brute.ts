class Brute {

    private upperBound: number;

    constructor(n: number) {
        this.upperBound = n;
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
        for (let i: number = 2; i <= this.upperBound; i++) {
            if (await this.isPrime(i))
                console.log(i);
        }
    }
}

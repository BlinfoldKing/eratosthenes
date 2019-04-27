class Brute {

    private upperBound: number;

    constructor(n: number) {
        this.upperBound = n;
    }
    
    // An utility method to check wheter a number
    // is prime or not
    private isPrime(n: number): boolean {

        // Corner case
        if (n <= 1) return false;

        // Check from 2 to n-1
        for (let i: number = 2; i < n; i++) {
            
            // If n divisible by i, return false
            if (n % i == 0) return false;
        }

        // N is a prime number, return true
        return true;
    }

    // Method to print all prime numbers
    print(): void {
        for (let i: number = 2; i <= this.upperBound; i++) {
            if (this.isPrime(i))
                console.log(i);
        }
    }
}
class Brute {

    private upperBound: number;

    constructor(n: number) {
        this.upperBound = n;
    }
    
    private isPrime(n: number): boolean {

        if (n <= 1) return false;

        for (let i: number = 2; i < n; i++) {
            if (n % i == 0)
                return false;
        }

        return true;
    }

    print(): void {

        for (let i: number = 2; i <= this.upperBound; i++) {
            if (this.isPrime(i))
                console.log(i);
        }
    }
}
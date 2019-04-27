class Sieve {

    private upperBound: number;
    private prime: boolean[];

    constructor (n: number) {
        this.upperBound = n;
    }

    // An utility method to build the sieve of eratosthenes algorithm
    public async calculate(): Promise<void> {

        // Create a boolean array prime[0..N] and 
        // initialize all entries it as true 
        this.prime = new Array<boolean>(this.upperBound+1);
        for (let i: number = 0; i <= this.upperBound; i++) {
            this.prime[i] = true;
        }

        // Changes the value in prime[i]
        // The value will finally be false if i is not prime, else true
        for (let i: number = 2; (i*i) <= this.upperBound; i++) {

            // If prime[i] is not changed, then it is a prime
            if(this.prime[i] == true) {

                // Update all multiples of i to false
                for (let j: number = (i*i); j <= this.upperBound; j += i) {
                    this.prime[j] = false;
                    await sleep(delayTime);
                }
            }

            console.log(i*i);

        }
    }

}

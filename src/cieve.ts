class Cieve {

    private upperBound: number;
    private prime: boolean[];

    constructor (n: number) {
        this.upperBound = n;
        this.build(this.upperBound);
    }

    private build(n: number): void {
        this.prime = new Array<boolean>(this.upperBound+1);
        for (let i: number = 0; i <= this.upperBound; i++) {
            this.prime[i] = true;
        }

        for (let i: number = 2; (i*i) <= this.upperBound; i++) {
            if(this.prime[i] == true) {
                for (let j: number = (i*i); j <= this.upperBound; j += i) {
                    this.prime[j] = false;
                }
            }
        }
    }

    public print(): void {
        for (let i: number = 2; i <= this.upperBound; i++) {
            if (this.prime[i] == true) {
                console.log(i);
            }
        }
    }
}
abstract class Primality {

    protected proccess_counter: number;
    protected upperBound: number;

    constructor(n: number) {
        this.proccess_counter = 0;
        this.upperBound = n;
    }

    abstract async visualize(p: p5): Promise<void>;
    abstract async calculate(): Promise<boolean[]>;
}

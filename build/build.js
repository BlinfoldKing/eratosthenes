var Brute = (function () {
    function Brute(n) {
        this.upperBound = n;
    }
    Brute.prototype.isPrime = function (n) {
        if (n <= 1)
            return false;
        for (var i = 2; i < n; i++) {
            if (n % i == 0)
                return false;
        }
        return true;
    };
    Brute.prototype.print = function () {
        for (var i = 2; i <= this.upperBound; i++) {
            if (this.isPrime(i))
                console.log(i);
        }
    };
    return Brute;
}());
var Cieve = (function () {
    function Cieve(n) {
        this.upperBound = n;
    }
    Cieve.prototype.build = function (n) {
        this.prime = new Array(this.upperBound + 1);
        for (var i = 0; i <= this.upperBound; i++) {
            this.prime[i] = true;
        }
        for (var i = 2; (i * i) <= this.upperBound; i++) {
            if (this.prime[i] == true) {
                for (var j = (i * i); j <= this.upperBound; j += i) {
                    this.prime[j] = false;
                }
            }
        }
    };
    Cieve.prototype.print = function () {
        this.build(this.upperBound);
        for (var i = 2; i <= this.upperBound; i++) {
            if (this.prime[i] == true) {
                console.log(i);
            }
        }
    };
    return Cieve;
}());
var canvas = function (p) {
    p.setup = function () {
    };
    p.draw = function () {
        var i = 0;
        setInterval(function () {
            p.createP("Hello World");
        }, 5000);
    };
};
new p5(canvas);
//# sourceMappingURL=build.js.map
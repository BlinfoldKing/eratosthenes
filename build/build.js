var Primality = (function () {
    function Primality(n) {
        this.proccess_counter = 0;
        this.upperBound = n;
    }
    return Primality;
}());
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var Brute = (function (_super) {
    __extends(Brute, _super);
    function Brute(n) {
        return _super.call(this, n) || this;
    }
    Brute.prototype.isPrime = function (n) {
        return __awaiter(this, void 0, void 0, function () {
            var i;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (n <= 1)
                            return [2, false];
                        i = 2;
                        _a.label = 1;
                    case 1:
                        if (!(i < n)) return [3, 4];
                        if (n % i == 0)
                            return [2, false];
                        return [4, sleep(delayTime)];
                    case 2:
                        _a.sent();
                        this.proccess_counter++;
                        _a.label = 3;
                    case 3:
                        i++;
                        return [3, 1];
                    case 4: return [2, true];
                }
            });
        });
    };
    Brute.prototype.visualize = function (canvas) {
        return __awaiter(this, void 0, void 0, function () {
            var y, x, base_height, i;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        y = 0;
                        x = 0;
                        base_height = (this.upperBound / 20) * 50 + 100;
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(i <= this.upperBound)) return [3, 4];
                        return [4, this.isPrime(i)];
                    case 2:
                        if (_a.sent()) {
                            canvas.fill('#00ff33');
                        }
                        else {
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
                            }
                            else {
                                x++;
                            }
                        }
                        _a.label = 3;
                    case 3:
                        i++;
                        return [3, 1];
                    case 4: return [2];
                }
            });
        });
    };
    Brute.prototype.calculate = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result, y, x, base_height, i;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        result = Array(this.upperBound);
                        y = 0;
                        x = 0;
                        base_height = (this.upperBound / 20) * 50 + 100;
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(i <= this.upperBound)) return [3, 4];
                        return [4, this.isPrime(i)];
                    case 2:
                        if (_a.sent()) {
                            result[i] = true;
                        }
                        else {
                            result[i] = false;
                        }
                        _a.label = 3;
                    case 3:
                        i++;
                        return [3, 1];
                    case 4: return [2, result];
                }
            });
        });
    };
    return Brute;
}(Primality));
function sleep(miliseconds) {
    return new Promise(function (resolve, reject) {
        return setTimeout(resolve, miliseconds);
    });
}
var delayTime = 0;
var canvas = function (p) {
    var input_html = p.createInput();
    function visualize() {
        var input = input_html;
        p.clear();
        var val = input.value();
        var era = new Sieve(val);
        era.visualize(p);
        var bru = new Brute(val);
        bru.visualize(p);
    }
    p.setup = function () {
        p.createCanvas(p.windowWidth, p.windowHeight * 2);
        var input = input_html;
        input.position(1100, p.windowHeight / 2);
        input_html.addClass('input');
        input_html.attribute('type', 'number');
        input_html.attribute('placeholder', 'Enter Upper bound (2..300)');
        var button = p.createButton('Start Simulation');
        button.position(1200, p.windowHeight / 2 + 30 + input.height);
        button.mouseClicked(visualize);
        button.addClass('button');
        button.addClass('is-info');
    };
    p.draw = function () {
    };
};
var Main = (function () {
    function Main() {
    }
    Main.visualize = function () {
        new p5(canvas);
    };
    Main.calculateBrute = function (i) {
        return __awaiter(this, void 0, void 0, function () {
            var bru, t0, t1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        bru = new Brute(i);
                        t0 = performance.now();
                        return [4, bru.calculate()];
                    case 1:
                        _a.sent();
                        t1 = performance.now();
                        return [2, [i, bru.proccess_counter, t1 - t0]];
                }
            });
        });
    };
    Main.calculateSieve = function (i) {
        return __awaiter(this, void 0, void 0, function () {
            var era, t0, t1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        era = new Sieve(i);
                        t0 = performance.now();
                        return [4, era.calculate()];
                    case 1:
                        _a.sent();
                        t1 = performance.now();
                        return [2, [i, era.proccess_counter, t1 - t0]];
                }
            });
        });
    };
    return Main;
}());
var Sieve = (function (_super) {
    __extends(Sieve, _super);
    function Sieve(n) {
        return _super.call(this, n) || this;
    }
    Sieve.prototype.visualize = function (canvas) {
        return __awaiter(this, void 0, void 0, function () {
            var y, x, i, i, pos, j, pos_1, i, pos;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.prime = new Array(this.upperBound + 1);
                        this.table = new Array(this.upperBound + 1);
                        y = 0;
                        x = 0;
                        for (i = 0; i <= this.upperBound; i++) {
                            this.prime[i] = true;
                            if (i !== 0) {
                                if (i > 1) {
                                    this.table[i] = { x: x * 50, y: y * 50 };
                                    canvas.rect(x * 50, y * 50, 50, 50);
                                    canvas.textAlign(canvas.CENTER, canvas.CENTER);
                                    canvas.text(i, 25 + x * 50, 25 + y * 50);
                                }
                                if (i % 20 == 0) {
                                    x = 0;
                                    y++;
                                }
                                else {
                                    x++;
                                }
                            }
                        }
                        i = 2;
                        _a.label = 1;
                    case 1:
                        if (!((i * i) <= this.upperBound)) return [3, 6];
                        if (!(this.prime[i] == true)) return [3, 5];
                        pos = this.table[i];
                        canvas.fill('#3300ff');
                        canvas.rect(pos.x, pos.y, 50, 50);
                        canvas.textAlign(canvas.CENTER, canvas.CENTER);
                        canvas.fill('#000');
                        canvas.text(i, 25 + pos.x, 25 + pos.y);
                        j = (i * i);
                        _a.label = 2;
                    case 2:
                        if (!(j <= this.upperBound)) return [3, 5];
                        this.prime[j] = false;
                        pos_1 = this.table[j];
                        canvas.fill('#ff0033');
                        canvas.rect(pos_1.x, pos_1.y, 50, 50);
                        canvas.textAlign(canvas.CENTER, canvas.CENTER);
                        canvas.fill('#fff');
                        canvas.text(j, 25 + pos_1.x, 25 + pos_1.y);
                        return [4, sleep(delayTime)];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4:
                        j += i;
                        return [3, 2];
                    case 5:
                        i++;
                        return [3, 1];
                    case 6:
                        for (i = 2; i < this.prime.length; i++) {
                            if (this.prime[i]) {
                                pos = this.table[i];
                                canvas.fill('#00ff33');
                                canvas.rect(pos.x, pos.y, 50, 50);
                                canvas.textAlign(canvas.CENTER, canvas.CENTER);
                                canvas.fill('#000');
                                canvas.text(i, 25 + pos.x, 25 + pos.y);
                            }
                        }
                        return [2];
                }
            });
        });
    };
    Sieve.prototype.calculate = function () {
        return __awaiter(this, void 0, void 0, function () {
            var y, x, i, i, j;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.prime = new Array(this.upperBound + 1);
                        y = 0;
                        x = 0;
                        for (i = 0; i <= this.upperBound; i++) {
                            this.prime[i] = true;
                        }
                        i = 2;
                        _a.label = 1;
                    case 1:
                        if (!((i * i) <= this.upperBound)) return [3, 6];
                        if (!(this.prime[i] == true)) return [3, 5];
                        j = (i * i);
                        _a.label = 2;
                    case 2:
                        if (!(j <= this.upperBound)) return [3, 5];
                        this.prime[j] = false;
                        return [4, sleep(delayTime)];
                    case 3:
                        _a.sent();
                        this.proccess_counter++;
                        _a.label = 4;
                    case 4:
                        j += i;
                        return [3, 2];
                    case 5:
                        i++;
                        return [3, 1];
                    case 6: return [2, this.prime];
                }
            });
        });
    };
    return Sieve;
}(Primality));
//# sourceMappingURL=build.js.map
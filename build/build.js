var canvas = function (p) {
    var maze;
    var solver;
    p.preload = function () {
    };
    p.setup = function () {
        p.createCanvas(p.windowWidth, p.windowHeight);
        maze = new Maze(p, 20, 20, 1);
        maze.setScale(3);
        solver = new Solver(maze, 'a*');
    };
    p.windowResized = function () {
        p.createCanvas(p.windowWidth, p.windowHeight);
    };
    p.draw = function () {
        p.background(100);
        maze.render();
        solver.solve();
    };
};
new p5(canvas);
var Maze = (function () {
    function Maze(p, width, height, density) {
        this.scale = 1;
        this.p = p;
        this.width = width;
        this.height = height;
        this.density = density;
        this.map = [];
        for (var i = 0; i < height; i++) {
            var row = [];
            for (var j = 0; j < width; j++) {
                row.push(1);
            }
            this.map.push(row);
        }
        this.generate();
    }
    Maze.prototype.setScale = function (scale) {
        this.scale = scale;
    };
    Maze.prototype.generate = function () {
        var startingLocation = [
            this.p.floor(this.p.random(this.width)),
            this.p.floor(this.p.random(this.height))
        ];
        var endX = this.p.floor(this.p.random(this.width));
        while (endX === startingLocation[0]) {
            endX = this.p.floor(this.p.random(this.width));
        }
        var endY = this.p.floor(this.p.random(this.height));
        while (endY === startingLocation[1]) {
            endY = this.p.floor(this.p.random(this.height));
        }
        var goalLocation = [endX, endY];
        this.startingLocation = startingLocation;
        this.goalLocation = goalLocation;
        this.map[startingLocation[1]][startingLocation[0]] = 2;
        this.map[goalLocation[1]][goalLocation[0]] = 3;
        var obstacleCount = this.p.floor(this.density * this.width * this.height);
        var totalTile = this.width * this.height;
        var center = [
            this.width / 2,
            this.height / 2
        ];
        for (var i = 0; i < obstacleCount; i++) {
            var x = this.p.floor(this.p.random(this.width));
            var y = this.p.floor(this.p.random(this.height));
            while (this.map[y][x] !== 1) {
                x = this.p.floor(this.p.random(this.width));
                y = this.p.floor(this.p.random(this.height));
            }
            this.map[y][x] = 0;
            var tileCount = floatFillCount(this.map, center);
            if (tileCount < totalTile - 1) {
                this.map[y][x] = 1;
            }
            else {
                totalTile--;
            }
        }
        this.originalMap = this.map;
    };
    Maze.prototype.getMap = function () {
        return this.map;
    };
    Maze.prototype.render = function () {
        for (var i = 0; i < this.height; i++) {
            for (var j = 0; j < this.width; j++) {
                this.p.push();
                switch (this.map[i][j]) {
                    case 0:
                        this.p.fill('#3e363F');
                        break;
                    case 1:
                        this.p.fill('#FFFCE8');
                        break;
                    case 2:
                        this.p.fill('#00FFFF');
                        break;
                    case 3:
                        this.p.fill('#B8B42D');
                        break;
                    case 4:
                        this.p.fill('#6974A2');
                        break;
                    case 5:
                        this.p.fill('#63A088');
                        break;
                    case 6:
                        this.p.fill('#ff0033');
                        break;
                }
                this.p.rect(j * 10 * this.scale, i * 10 * this.scale, 10 * this.scale, 10 * this.scale);
                this.p.pop();
            }
        }
    };
    Maze.prototype.resetMapState = function () {
        this.map = this.originalMap;
    };
    Maze.prototype.setTileState = function (x, y, state) {
        if (this.map[y][x] === 1 || this.map[y][x] === 5 || this.map[y][x] === 6)
            this.map[y][x] = state;
    };
    return Maze;
}());
function floatFillCount(map, start) {
    var height = map.length;
    var width = map.length > 0 ? map[0].length : 0;
    var toBeVisit = [];
    var visited = [];
    var current = start;
    current = start;
    if (current[0] - 1 >= 0) {
        var newX = current[0] - 1;
        if (map[current[1]][newX] != 0) {
            toBeVisit.push([newX, current[1]]);
        }
    }
    if (current[1] - 1 >= 0) {
        var newY = current[1] - 1;
        if (map[newY][current[0]] != 0) {
            toBeVisit.push([current[0], newY]);
        }
    }
    if (current[0] + 1 < width) {
        var newX = current[0] + 1;
        if (map[current[1]][newX] != 0) {
            toBeVisit.push([newX, current[1]]);
        }
    }
    if (current[1] + 1 < height) {
        var newY = current[1] + 1;
        if (map[newY][current[0]] != 0) {
            toBeVisit.push([current[0], newY]);
        }
    }
    visited.push(current);
    while (toBeVisit.length > 0) {
        current = toBeVisit.pop();
        if (checkTileExisted(current, visited)) {
            current = toBeVisit.pop();
            continue;
        }
        if (current[0] - 1 >= 0) {
            var newX = current[0] - 1;
            if (map[current[1]][newX] != 0
                && !checkTileExisted([newX, current[1]], visited)) {
                toBeVisit.push([newX, current[1]]);
            }
        }
        if (current[1] - 1 >= 0) {
            var newY = current[1] - 1;
            if (map[newY][current[0]] != 0
                && !checkTileExisted([current[0], newY], visited)) {
                toBeVisit.push([current[0], newY]);
            }
        }
        if (current[0] + 1 < width) {
            var newX = current[0] + 1;
            if (map[current[1]][newX] != 0
                && !checkTileExisted([newX, current[1]], visited)) {
                toBeVisit.push([newX, current[1]]);
            }
        }
        if (current[1] + 1 < height) {
            var newY = current[1] + 1;
            if (map[newY][current[0]] != 0
                && !checkTileExisted([current[0], newY], visited)) {
                toBeVisit.push([current[0], newY]);
            }
        }
        visited.push(current);
    }
    return visited.length;
}
function checkTileExisted(current, list) {
    for (var _i = 0, list_1 = list; _i < list_1.length; _i++) {
        var l = list_1[_i];
        if (l[0] === current[0] && l[1] === current[1]) {
            return true;
        }
    }
    return false;
}
var Solver = (function () {
    function Solver(maze, solution) {
        this.maze = maze;
        this.solution = solution;
        this.open_list = [];
        this.closed_list = [];
        var start = new Path(this.maze.startingLocation);
        start.h_value = this.getDistance(start.position, this.maze.goalLocation);
        this.open_list.push(start);
    }
    Solver.prototype.solve = function () {
        if (this.solution === 'a*') {
            this.aStarSolve();
        }
        else if (this.solution === 'bfs') {
        }
    };
    Solver.prototype.aStarSolve = function () {
        var _a;
        if (this.open_list.length > 0 && !this.solution_path) {
            var current = this.open_list.pop();
            var _b = current.position, x = _b[0], y = _b[1];
            if (x === this.maze.goalLocation[0]
                && y === this.maze.goalLocation[1]) {
                this.solution_path = current;
                return;
            }
            if (x - 1 >= 0) {
                if (this.maze.originalMap[y][x - 1] !== 0) {
                    var newPath = new Path([x - 1, y], current);
                    newPath.g_value = 1 + current.g_value;
                    newPath.h_value = this.getDistance(newPath.position, this.maze.goalLocation);
                    this.maze.setTileState(x - 1, y, 5);
                    this.evaluate(newPath);
                }
            }
            if (y - 1 >= 0) {
                if (this.maze.originalMap[y - 1][x] !== 0) {
                    var newPath = new Path([x, y - 1], current);
                    newPath.g_value = 1 + current.g_value;
                    newPath.h_value = this.getDistance(newPath.position, this.maze.goalLocation);
                    this.maze.setTileState(x, y - 1, 5);
                    this.evaluate(newPath);
                }
            }
            if (x + 1 < this.maze.width) {
                if (this.maze.originalMap[y][x + 1] !== 0) {
                    var newPath = new Path([x + 1, y], current);
                    newPath.g_value = 1 + current.g_value;
                    newPath.h_value = this.getDistance(newPath.position, this.maze.goalLocation);
                    this.maze.setTileState(x + 1, y, 5);
                    this.evaluate(newPath);
                }
            }
            if (y + 1 < this.maze.height) {
                if (this.maze.originalMap[y + 1][x] !== 0) {
                    var newPath = new Path([x, y + 1], current);
                    newPath.g_value = 1 + current.g_value;
                    newPath.h_value = this.getDistance(newPath.position, this.maze.goalLocation);
                    this.maze.setTileState(x, y + 1, 5);
                    this.evaluate(newPath);
                }
            }
            this.maze.setTileState(x, y, 6);
            this.closed_list.push(current);
            this.open_list.sort(function (a, b) { return b.getFValue() - a.getFValue(); });
        }
        else if (this.solution_path) {
            var current = this.solution_path;
            var _c = current.position, x = _c[0], y = _c[1];
            this.maze.setTileState(x, y, 1);
            while (current.prev) {
                current = current.prev;
                _a = current.position, x = _a[0], y = _a[1];
                this.maze.setTileState(x, y, 4);
            }
        }
    };
    Solver.prototype.getDistance = function (a, b, method) {
        if (method === void 0) { method = 'euclid'; }
        if (method === 'euclid') {
            return Math.sqrt(Math.pow(b[0] - a[0], 2) + Math.pow(b[0] - a[0], 2));
        }
    };
    Solver.prototype.evaluate = function (path) {
        var existedPath = -1;
        for (var i = 0; i < this.closed_list.length; i++) {
            if (this.closed_list[i].position[0] === path.position[0]
                && this.closed_list[i].position[1] === path.position[1]) {
                existedPath = i;
            }
        }
        if (existedPath > 0) {
            if (this.closed_list[existedPath].getFValue() > path.getFValue()) {
                this.open_list.push(path);
            }
        }
        else {
            this.open_list.push(path);
        }
    };
    return Solver;
}());
var Path = (function () {
    function Path(position, prev) {
        if (prev === void 0) { prev = undefined; }
        this.g_value = 0;
        this.h_value = 0;
        this.position = position;
        this.prev = prev;
    }
    Path.prototype.getFValue = function () {
        this.g_value + this.h_value;
    };
    return Path;
}());
//# sourceMappingURL=build.js.map
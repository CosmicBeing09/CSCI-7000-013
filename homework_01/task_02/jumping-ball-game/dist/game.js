import { Ball } from './ball';
var Game = /** @class */ (function () {
    function Game(ctx, width, height) {
        this.ctx = ctx;
        this.width = width;
        this.height = height;
        this.balls = this.createBalls(10); // Create 10 balls for example
    }
    Game.prototype.createBalls = function (count) {
        var balls = [];
        for (var i = 0; i < count; i++) {
            var radius = 20;
            var x = Math.random() * (this.width - radius * 2) + radius;
            var y = Math.random() * (this.height - radius * 2) + radius;
            var color = "#".concat(Math.floor(Math.random() * 16777215).toString(16));
            balls.push(new Ball(x, y, radius, color));
        }
        return balls;
    };
    Game.prototype.start = function () {
        this.update();
    };
    Game.prototype.update = function () {
        var _this = this;
        this.ctx.clearRect(0, 0, this.width, this.height);
        this.balls.forEach(function (ball) {
            ball.update(_this.ctx.canvas);
            ball.draw(_this.ctx);
        });
        requestAnimationFrame(this.update.bind(this));
    };
    Game.prototype.handleClick = function (x, y) {
        this.balls.forEach(function (ball) {
            if (ball.isClicked(x, y)) {
                ball.changeDirection();
            }
        });
    };
    return Game;
}());
export { Game };

var Ball = /** @class */ (function () {
    function Ball(x, y, radius, color) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.velocityX = Math.random() * 2 - 1;
        this.velocityY = Math.random() * 2 - 1;
    }
    Ball.prototype.draw = function (context) {
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        context.fillStyle = this.color;
        context.fill();
        context.closePath();
    };
    Ball.prototype.update = function (canvas) {
        this.x += this.velocityX;
        this.y += this.velocityY;
        // Check for collision with canvas boundaries
        if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
            this.velocityX = -this.velocityX;
        }
        if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {
            this.velocityY = -this.velocityY;
        }
    };
    Ball.prototype.isClicked = function (mouseX, mouseY) {
        var dx = this.x - mouseX;
        var dy = this.y - mouseY;
        var distance = Math.sqrt(dx * dy + dy * dy);
        return distance < this.radius;
    };
    Ball.prototype.changeDirection = function () {
        this.velocityX = Math.random() * 2 - 1;
        this.velocityY = Math.random() * 2 - 1;
    };
    return Ball;
}());
export { Ball };

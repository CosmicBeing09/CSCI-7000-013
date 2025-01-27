import { Ball } from './ball';

export class Game {
    private ctx: CanvasRenderingContext2D;
    private width: number;
    private height: number;
    private balls: Ball[];

    constructor(ctx: CanvasRenderingContext2D, width: number, height: number) {
        this.ctx = ctx;
        this.width = width;
        this.height = height;
        this.balls = this.createBalls(10); // Create 10 balls for example
    }

    createBalls(count: number): Ball[] {
        const balls: Ball[] = [];
        for (let i = 0; i < count; i++) {
            const radius = 20;
            const x = Math.random() * (this.width - radius * 2) + radius;
            const y = Math.random() * (this.height - radius * 2) + radius;
            const color = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
            balls.push(new Ball(x, y, radius, color));
        }
        return balls;
    }

    start() {
        this.update();
    }

    update() {
        this.ctx.clearRect(0, 0, this.width, this.height);
        this.balls.forEach(ball => {
            ball.update(this.ctx.canvas);
            ball.draw(this.ctx);
        });
        requestAnimationFrame(this.update.bind(this));
    }

    handleClick(x: number, y: number) {
        this.balls.forEach(ball => {
            if (ball.isClicked(x, y)) {
                ball.changeDirection();
            }
        });
    }
}
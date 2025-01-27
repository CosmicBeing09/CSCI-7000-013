var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');
document.body.appendChild(canvas);
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
import { Game } from './game';
var game = null;
if (ctx) {
    game = new Game(ctx, canvas.width, canvas.height);
    game.start();
}
else {
    console.error('Failed to get 2D context');
}
canvas.addEventListener('click', function (event) {
    if (game) {
        var rect = canvas.getBoundingClientRect();
        var x = event.clientX - rect.left;
        var y = event.clientY - rect.top;
        game.handleClick(x, y);
    }
});

const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');
document.body.appendChild(canvas);

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

import { Game } from './game';

let game: Game | null = null;

if (ctx) {
    game = new Game(ctx, canvas.width, canvas.height);
    game.start();
} else {
    console.error('Failed to get 2D context');
}

canvas.addEventListener('click', (event) => {
    if (game) {
        const rect = canvas.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        game.handleClick(x, y);
    }
});
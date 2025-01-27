(()=>{"use strict";var t=function(){function t(t,i,h,e){this.x=t,this.y=i,this.radius=h,this.color=e,this.velocityX=2*Math.random()-1,this.velocityY=2*Math.random()-1}return t.prototype.draw=function(t){t.beginPath(),t.arc(this.x,this.y,this.radius,0,2*Math.PI),t.fillStyle=this.color,t.fill(),t.closePath()},t.prototype.update=function(t){this.x+=this.velocityX,this.y+=this.velocityY,(this.x+this.radius>t.width||this.x-this.radius<0)&&(this.velocityX=-this.velocityX),(this.y+this.radius>t.height||this.y-this.radius<0)&&(this.velocityY=-this.velocityY)},t.prototype.isClicked=function(t,i){var h=this.x-t,e=this.y-i;return Math.sqrt(h*e+e*e)<this.radius},t.prototype.changeDirection=function(){this.velocityX=2*Math.random()-1,this.velocityY=2*Math.random()-1},t}(),i=function(){function i(t,i,h){this.ctx=t,this.width=i,this.height=h,this.balls=this.createBalls(10)}return i.prototype.createBalls=function(i){for(var h=[],e=0;e<i;e++){var n=Math.random()*(this.width-40)+20,o=Math.random()*(this.height-40)+20,s="#".concat(Math.floor(16777215*Math.random()).toString(16));h.push(new t(n,o,20,s))}return h},i.prototype.start=function(){this.update()},i.prototype.update=function(){var t=this;this.ctx.clearRect(0,0,this.width,this.height),this.balls.forEach((function(i){i.update(t.ctx.canvas),i.draw(t.ctx)})),requestAnimationFrame(this.update.bind(this))},i.prototype.handleClick=function(t,i){this.balls.forEach((function(h){h.isClicked(t,i)&&h.changeDirection()}))},i}(),h=document.createElement("canvas"),e=h.getContext("2d");document.body.appendChild(h),h.width=window.innerWidth,h.height=window.innerHeight;var n=null;e?(n=new i(e,h.width,h.height)).start():console.error("Failed to get 2D context"),h.addEventListener("click",(function(t){if(n){var i=h.getBoundingClientRect(),e=t.clientX-i.left,o=t.clientY-i.top;n.handleClick(e,o)}}))})();
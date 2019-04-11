/**
 * Created by nhatnk on 4/26/17.
 */

function Hero(image, top, left, size){
  this.image = image;
  this.top = top;
  this.left = left;
  this.size = size;

  this.getImageElement = function(){
    return '<img width="'+ this.size + '"' +
      ' height="'+ this.size + '"' +
      ' src="' + this.image +'"' +
      ' style="top: '+this.top+'px; left:'+this.left+'px;position:absolute;" />';
  };

  this.moveRight = function(){
    this.left += 25;
    console.log('ok: ' + this.left + ' window.innerWidth ' + window.innerWidth);
  };
  this.moveDown = function () {
    this.top +=25;
    console.log('top ' + this.top + ' left ' + this.left + ' window.innerHeight ' + window.innerHeight + ' window.innerWidth ' + window.innerWidth)
  };
  this.moveLeft = function () {
    this.left -= 25;
  };
  this.moveUp = function () {
    this.top -= 25;
  }
}

var nobita = new Hero('nobita.jpg', 25, 25, 200);

function start(){
  if(nobita.left < window.innerWidth - nobita.size && nobita.top <= 25){
    nobita.moveRight();
  }else if (nobita.top>=25 && nobita.left >= (window.innerWidth - (nobita.size +25)) && nobita.top <=(window.innerHeight- (nobita.size + 25))){
    nobita.moveDown();
  }else if (nobita.left>=25 && nobita.top>=(window.innerHeight- (nobita.size + 25))){
    nobita.moveLeft();
  }else if (nobita.top<=window.innerHeight-(nobita.size) && nobita.left <= 25 && nobita.top >= 25){
    nobita.moveUp();
  }
  document.getElementById('game').innerHTML = nobita.getImageElement();
}

setInterval(start,50);

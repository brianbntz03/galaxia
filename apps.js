function initcanvas() {
    var ctx = document.getElementById('my_canvas').getcontext('2d');
    var backgroundImage    = new Image();
    var naveimage          = new Image();
    var enemiespic1        = new Image();
    var enemiespic2        = new Image();

    backgroundImage.src = "images/background-pic.jpg";
    naveimage.src = "images/spaceship-pic.png";
    
    enemiespic1.src = "images/enemigo1.png";
    enemiespic2.src = "images/enemigo2.png";

    var cW = ctx.canvas.width;
    var cH = ctx.canvas.height;
    
    var enemyTemplate = function(options){
        return {
            id: options.id || '',
            x: options.x || '',
            y: options.y || '',
            w: options.w || '',
            h: options.h || '',
            image: options.image || enemiespic1
        }
    }

   var enemies = [
        new enemyTemplate ({id :     "enemy1", x : 100, y : 20, w : 50, h: 30}),
   ];
   
   var renderEnemies = function(enemyList){

        for(var i = 0; i < enemyList.length; i++){
            var enemy = enemyList[i];
            ctx.drawImage(enemy.image, enemy.x, enemy.y, enemy.w, enemy.h); 
        }
    }

function animate(){
        ctx.clearRect(0, 0, cW, cH);
        launcher.render();
        renderEnemies(enemies);
    }

    var animateInterval = setInterval(animate, 6);

}

window.addEventListener('load', function(event) {
    initcanvas();
}); 

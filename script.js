// let rockHealth = 100;
// let characterPosition = 0;

// // Agregar evento de teclado para mover al personaje
// document.addEventListener('keydown', (event) => {
//     const key = event.key;
//     if (key === 'ArrowRight') {
//         characterPosition += 10; // Mover hacia la derecha
//     } else if (key === 'ArrowLeft') {
//         characterPosition -= 10; // Mover hacia la izquierda
//     }
//     document.querySelector('.character').style.left = characterPosition + 'px';
// });

// // Agregar evento de clic para golpear la roca
// document.querySelector('.character').addEventListener('click', () => {
//     if (rockHealth > 0) {
//         rockHealth -= 10; // Reducir la vida de la roca al golpearla
//         console.log('Vida de la roca:', rockHealth);
//         if (rockHealth <= 0) {
//             document.querySelector('.rock').style.display = 'none'; // Desaparecer la roca
//             console.log('¡La roca ha desaparecido!');
//         }
//     }
// });

let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
var ballRadius = 30;
var x = canvas.width/2;
var y = canvas.height-30;
var dx = 2;
var dy = -2;

function drawBall(){
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

function draw(){
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    drawBall();
    if (x + dx > canvas.width - ballRadius|| x + dx < ballRadius) {
        dx = -dx;
        
      }
    if(y + dy > canvas.height - ballRadius || y + dy < ballRadius){
        dy = -dy;
    }
    x += dx;
    y += dy;
    
    
}

setInterval(draw, 10);

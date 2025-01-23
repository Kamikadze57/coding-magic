document.addEventListener('DOMContentLoaded', () => {
  const field = document.getElementById('field');
  const ball = document.getElementById('ball');

  const centerBall = () => {
    const fieldRect = field.getBoundingClientRect();
    const ballRect = ball.getBoundingClientRect();

    const centerX = (fieldRect.width - ballRect.width) / 2;
    const centerY = (fieldRect.height - ballRect.height) / 2;

    ball.style.left = `${centerX}px`;
    ball.style.top = `${centerY}px`;
  };

  centerBall();

  field.addEventListener('click', event => {
    const fieldRect = field.getBoundingClientRect();
    const ballRect = ball.getBoundingClientRect();

    const ballRadius = ballRect.width / 2;

    let clickX = event.clientX - fieldRect.left;
    let clickY = event.clientY - fieldRect.top;

    const maxX = fieldRect.width - ballRadius;
    const maxY = fieldRect.height - ballRadius;
    const minX = ballRadius;
    const minY = ballRadius;

    const targetX = Math.min(Math.max(clickX, minX), maxX);
    const targetY = Math.min(Math.max(clickY, minY), maxY);

    ball.style.transition = 'left 0.5s ease, top 0.5s ease';
    ball.style.left = `${targetX - ballRadius}px`;
    ball.style.top = `${targetY - ballRadius}px`;
  });
});

const style = document.createElement('style');
style.textContent = `
    #field {
    position: relative;
    width: 720px;
    height: 220px;
    background: #228B22; 
    border: 5px solid white;
    border-radius: 20px;
    margin: 20px auto;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    overflow: hidden;
    }
    
    #ball {
    position: absolute;
    width: 50px;
    height: 50px;
    background: url("../ball.jpg") no-repeat center center;
    background-size: cover;
    border-radius: 50%;
     box-shadow: 0 4px 8px rgba(0, 0, 0, 0);
    }
    `;

document.head.appendChild(style);

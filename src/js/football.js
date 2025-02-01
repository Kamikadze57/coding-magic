document.addEventListener('DOMContentLoaded', () => {
  const field = document.querySelector('[data-field]');
  const ball = document.querySelector('[data-ball]');

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
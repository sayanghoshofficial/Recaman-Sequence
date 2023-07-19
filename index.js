const scale = 10;
const canvas = document.querySelector("#canvas");
const rangeInput = document.querySelector("#rangeInput");
const rangeValueDiv = document.querySelector("#rangeValue");
const CANVAS_DIMENSIONS = { height: canvas.height, width: canvas.width };
const ctx = canvas.getContext("2d");

const sequence = [
  0, 1, 3, 6, 2, 7, 13, 20, 12, 21, 11, 22, 10, 23, 9, 24, 8, 25, 43, 62, 42,
  63, 41, 18, 42, 17, 43, 16, 44, 15, 45, 14, 46, 79, 113, 78, 114, 77, 39, 78,
  38, 79, 37, 80, 36, 81, 35, 82, 34, 83, 33, 84, 32, 85, 31, 86, 30, 87, 29,
  88, 28, 89, 27, 90, 26, 91,
].map((item) => item * scale);

function drawRecaman() {
  ctx.clearRect(0, 0, CANVAS_DIMENSIONS.width, CANVAS_DIMENSIONS.height);

  const currentIndex = Number(rangeInput.value);
  const radius = scale / 2;

  const middleY = CANVAS_DIMENSIONS.height / 2;
  const centerX = CANVAS_DIMENSIONS.width / 2;

  ctx.beginPath();
  ctx.moveTo(0, middleY);
  ctx.lineTo(CANVAS_DIMENSIONS.width, middleY);
  ctx.stroke();

  let direction = 1; // Start with upward direction

  for (let i = 0; i < currentIndex; i++) {
    const currentX = sequence[i];
    const nextX = sequence[i + 1];

    // Calculate the radius of the half circle based on the difference between currentX and nextX
    const halfCircleRadius = Math.abs(nextX - currentX) / 2;

    // Calculate the center point's X coordinate as halfway between currentX and nextX
    const centerX = currentX + (nextX - currentX) / 2;

    // Determine the center point's Y coordinate based on the current index and direction
    const centerY = middleY + direction * halfCircleRadius;

    // Start drawing the half circle
    ctx.beginPath();

    if (direction === 1) {
      // Draw upward-facing half circle
      ctx.arc(centerX, centerY - halfCircleRadius, halfCircleRadius, Math.PI, 0, true);
    } else {
      // Draw downward-facing half circle
      ctx.arc(centerX, centerY + halfCircleRadius, halfCircleRadius, 0, Math.PI, true);
    }

    ctx.stroke();

    direction *= -1; // Toggle the direction for the next iteration
  }
}



rangeInput.addEventListener("input", () => {
  rangeValueDiv.textContent = rangeInput.value;
  drawRecaman();
});

drawRecaman();

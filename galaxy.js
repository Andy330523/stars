// ====== Galaxy Background: Bright Moving Stars Only ======
const canvas = document.getElementById("galaxy-bg");
const ctx = canvas.getContext("2d");

function resize() {
  canvas.width = innerWidth;
  canvas.height = innerHeight;
}
resize();
addEventListener("resize", resize);

const STAR_COUNT = 150;
const stars = [];

function initStars() {
  stars.length = 0;
  for (let i = 0; i < STAR_COUNT; i++) {
    stars.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 2 + 0.8,
      alpha: Math.random() * 0.6 + 0.4,
      speed: Math.random() * 0.3 + 0.05
    });
  }
}
initStars();

function drawStars() {
  stars.forEach(s => {
    s.x += s.speed * 0.25;
    s.y -= s.speed * 0.18;

    if (s.x > canvas.width) s.x = 0;
    if (s.y < 0) s.y = canvas.height;

    const twinkle = 0.5 + 0.5 * Math.sin(Date.now() * 0.005 + s.x);
    ctx.globalAlpha = s.alpha * twinkle;

    ctx.fillStyle = "#ffffff";
    ctx.fillRect(s.x, s.y, s.size, s.size);
  });
}

function draw() {
  ctx.fillStyle = "#050712";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  drawStars();

  requestAnimationFrame(draw);
}

draw();

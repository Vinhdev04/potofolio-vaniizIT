// Dark Mode Toggle
const toggleButton = document.querySelector(".dark-mode-toggle");
const body = document.body;

toggleButton.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  const icon = toggleButton.querySelector("i");

  if (body.classList.contains("dark-mode")) {
    icon.className = "fas fa-sun";
  } else {
    icon.className = "fas fa-moon";
  }
});

// Add some interactive particles on mouse move
document.addEventListener("mousemove", (e) => {
  const particle = document.createElement("div");
  particle.style.position = "absolute";
  particle.style.left = e.clientX + "px";
  particle.style.top = e.clientY + "px";
  particle.style.width = "4px";
  particle.style.height = "4px";
  particle.style.background = "rgba(255, 255, 255, 0.6)";
  particle.style.borderRadius = "50%";
  particle.style.pointerEvents = "none";
  particle.style.animation = "fadeOut 1s ease-out forwards";
  particle.style.zIndex = "1000";

  document.body.appendChild(particle);

  setTimeout(() => {
    particle.remove();
  }, 1000);
});

// Add CSS animation for mouse particles
const style = document.createElement("style");
style.textContent = `
            @keyframes fadeOut {
                0% { opacity: 1; transform: scale(1); }
                100% { opacity: 0; transform: scale(0); }
            }
        `;
document.head.appendChild(style);

// Add sparkle effect on button hover
const buttons = document.querySelectorAll(".btn");
buttons.forEach((btn) => {
  btn.addEventListener("mouseenter", () => {
    for (let i = 0; i < 5; i++) {
      setTimeout(() => {
        const sparkle = document.createElement("div");
        sparkle.innerHTML = "✨";
        sparkle.style.position = "absolute";
        sparkle.style.left =
          btn.offsetLeft + Math.random() * btn.offsetWidth + "px";
        sparkle.style.top =
          btn.offsetTop + Math.random() * btn.offsetHeight + "px";
        sparkle.style.fontSize = "12px";
        sparkle.style.pointerEvents = "none";
        sparkle.style.animation = "sparkle 0.8s ease-out forwards";
        sparkle.style.zIndex = "1001";

        document.body.appendChild(sparkle);

        setTimeout(() => {
          sparkle.remove();
        }, 800);
      }, i * 100);
    }
  });
});

// Add sparkle animation
const sparkleStyle = document.createElement("style");
sparkleStyle.textContent = `
            @keyframes sparkle {
                0% { opacity: 0; transform: scale(0) rotate(0deg); }
                50% { opacity: 1; transform: scale(1) rotate(180deg); }
                100% { opacity: 0; transform: scale(0) rotate(360deg); }
            }
        `;
document.head.appendChild(sparkleStyle);

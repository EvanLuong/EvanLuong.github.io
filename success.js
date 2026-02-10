// Confetti effect
function createConfetti() {
  const colors = ['#ff1493', '#ff69b4', '#ffc0cb', '#ff6b9d', '#c71585'];
  
  for (let i = 0; i < 100; i++) {
    setTimeout(() => {
      const confetti = document.createElement('div');
      confetti.style.position = 'fixed';
      confetti.style.width = '10px';
      confetti.style.height = '10px';
      confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      confetti.style.left = Math.random() * 100 + '%';
      confetti.style.top = '-10px';
      confetti.style.borderRadius = '50%';
      confetti.style.pointerEvents = 'none';
      confetti.style.zIndex = '1000';
      
      document.body.appendChild(confetti);
      
      const duration = Math.random() * 3 + 2;
      const xMovement = (Math.random() - 0.5) * 400;
      
      confetti.animate([
        { transform: 'translateY(0px) translateX(0px) rotate(0deg)', opacity: 1 },
        { transform: `translateY(${window.innerHeight + 50}px) translateX(${xMovement}px) rotate(${Math.random() * 720}deg)`, opacity: 0 }
      ], {
        duration: duration * 1000,
        easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
      });
      
      setTimeout(() => confetti.remove(), duration * 1000);
    }, i * 30);
  }
}

// Start confetti when page loads
window.addEventListener('load', () => {
  createConfetti();
  // Repeat confetti every 3 seconds
  setInterval(createConfetti, 3000);
});

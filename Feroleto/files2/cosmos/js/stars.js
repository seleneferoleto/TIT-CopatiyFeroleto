
document.addEventListener('DOMContentLoaded', function () {
  const container = document.getElementById('cont-estrellas');
  if (!container) return;

  for (let i = 0; i < 80; i++) {
    const s = document.createElement('div');
    s.className = 'estrella';
    s.style.cssText = `
      left: ${Math.random() * 100}%;
      top: ${Math.random() * 100}%;
      --dur: ${2 + Math.random() * 4}s;
      --delay: ${Math.random() * 5}s;
    `;
    container.appendChild(s);
  }
});

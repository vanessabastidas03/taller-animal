// --- Modo oscuro/claro ---
function toggleTheme() {
  document.body.classList.toggle('dark-mode');
  const btn = document.getElementById('theme-btn');
  btn.textContent = document.body.classList.contains('dark-mode')
    ? '☀️ Modo claro'
    : '🌙 Modo oscuro';
}

// --- Mostrar/ocultar sección ---
function toggleInfo() {
  const section = document.getElementById('info');
  section.style.display = 
    section.style.display === 'none' ? 'block' : 'none';
}


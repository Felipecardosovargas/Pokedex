// Seleciona o botão de modo escuro
const darkModeButton = document.querySelector('#darkModeButton');

if (darkModeButton) {
  // Adiciona um ouvinte de evento para o botão de modo escuro
  darkModeButton.addEventListener('click', () => {
    // Seleciona o elemento body
    const body = document.body;

    // Alternar entre o modo claro e o modo escuro
    body.classList.toggle('dark-mode');
  });
}
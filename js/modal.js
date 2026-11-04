export function populateModal(game) {
    const modal = document.getElementById(game.id);

    if (!modal) return;

    const titulo = modal.querySelector('.modal-title'), corpo = modal.querySelector('.modal-body');

    if (titulo) titulo.textContent = game.name;
    if (!corpo) return;

    const subtitle = corpo.querySelector('h3'), paragraphs = corpo.querySelectorAll('p');

    if (subtitle) subtitle.textContent = game.subtitle;

    game.description.forEach((text, i) => {
        if (paragraphs[i]) paragraphs[i].textContent = text;
    }); 
    
    if (corpo.classList.contains('game-modal-body')) return; 
    
    corpo.innerHTML = `
    <h3>${game.subtitle}</h3>
    ${game.description.map(text => `<p>${text}</p>`).join('')}
    <h4>Informações do jogo</h4>
    <ul>
        <li><strong>Gênero:</strong> ${game.information[0]}</li>
        <li><strong>Estilo:</strong> ${game.information[1]}</li>
        <li><strong>Plataforma:</strong> ${game.information[2]}</li>
        <li><strong>Status:</strong> ${game.information[3]}</li>
        <li><strong>Classificação indicativa sugerida:</strong> ${game.classification}</li>
        <li><strong>Avaliação:</strong> ${game.rating}</li>
    </ul>
    <small>${game.observation}</small>`;
}
export function openModalFromUrl() {
    const id = new URLSearchParams(window.location.search).get('modal');

    if (!id || !window.bootstrap) return;

    const element = document.getElementById(id);

    if (element) new bootstrap.Modal(element).show();
}










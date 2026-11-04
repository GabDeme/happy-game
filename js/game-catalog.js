export const games = [
    {
        id: 'modalLumenfall',
        name: 'Lumenfall',
        image: '../images/game-images/lumenfall.jpg',
        logo: '../images/game-logos/lumenfall-logo.png',
        alt: 'Imagem do jogo Lumenfall',
        genre: 'Aventura / Exploração',
        style: '3D',
        platform: 'PC',
        status: 'Em desenvolvimento',
        subtitle: 'Uma jornada onde cada luz importa',
        description: [
            'Em Lumenfall, um pequeno viajante desperta em um mundo misterioso, onde a luz está desaparecendo lentamente e antigas construções escondem histórias esquecidas. Sem saber exatamente como chegou até ali, ele precisa explorar florestas luminosas, atravessar pontes antigas e descobrir o que aconteceu com aquele lugar.',
            'Durante sua aventura, o jogador encontrará ambientes repletos de detalhes, criaturas inesperadas e enigmas que exigem observação e criatividade. Cada região apresenta novos desafios e pistas sobre o passado desse universo, incentivando a exploração e a descoberta de caminhos alternativos.',
            'Com uma atmosfera envolvente e uma narrativa construída por meio dos cenários, Lumenfall é uma experiência voltada para quem gosta de aventuras contemplativas, descobertas e histórias cheias de mistério.'
        ],
        information: ['Aventura / Exploração', '3D', 'PC', 'Em desenvolvimento'],
        classification: '10 anos — mistério, fantasia e momentos de tensão leve.',
        observation: 'A classificação indicativa apresentada é uma sugestão baseada na temática do jogo, não sendo uma classificação oficial.'
    },
    {
        id: 'modalMossMischief',
        name: 'Moss & Mischief',
        image: '../images/game-images/moss-mischief.jpg',
        logo: '../images/game-logos/moss-mischief-logo.png',
        alt: 'Imagem do jogo Moss & Mischief',
        genre: 'Puzzle / Plataforma',
        style: '3D',
        platform: 'PC',
        status: 'Lançado',
        subtitle: 'Uma pequena aventura, uma grande confusão',
        description: [
            'Moss & Mischief acompanha um sapo curioso que precisa recuperar sua floresta depois que acontecimentos misteriosos começam a transformar o ambiente. Para restaurar o equilíbrio da natureza, ele embarca em uma jornada por cenários coloridos, plataformas desafiadoras e lugares escondidos entre cogumelos gigantes e antigas construções.',
            'O jogador deverá explorar diferentes áreas, resolver quebra-cabeças e descobrir maneiras criativas de superar obstáculos. Saltos precisos, mecanismos interativos e caminhos secretos fazem parte da aventura, incentivando a experimentação e a curiosidade ao longo de cada fase.',
            'Com uma proposta divertida e acessível, o jogo combina desafios de plataforma com momentos de humor e exploração. Seu universo encantador convida jogadores de diferentes idades a descobrir os segredos da floresta e acompanhar as travessuras de um protagonista pequeno no tamanho, mas enorme na determinação.'
        ],
        information: ['Puzzle / Plataforma', '3D', 'PC', 'Lançado'],
        classification: 'Livre — aventura fantástica, humor leve e desafios.',
        observation: 'A classificação indicativa é sugerida e não oficial. A rating apresentada é ilustrativa e deverá ser substituída por uma avaliação real.'
    },
    {
        id: 'modalPebbleTide',
        name: 'Pebble & Tide',
        image: '../images/game-images/pebble-tide.jpg',
        logo: '../images/game-logos/pebble-tide-logo.png',
        alt: 'Imagem do jogo Pebble & Tide',
        genre: 'Puzzle / Quebra-cabeça',
        style: '2D',
        platform: 'PC',
        status: 'Lançado',
        subtitle: 'O oceano guarda mais caminhos do que parece',
        description: [
            'Em Pebble & Tide, uma pequena criatura aventureira explora um arquipélago misterioso, formado por ilhas, cavernas e passagens escondidas. Entretanto, o oceano não é apenas parte do cenário: suas marés determinam quais caminhos estarão disponíveis e quais segredos poderão ser descobertos.',
            'O jogador precisa observar o movimento da água e utilizar as mudanças de maré para solucionar enigmas, alcançar novas regiões e atravessar obstáculos. Lugares aparentemente inacessíveis podem se tornar passagens quando o nível do mar diminui, enquanto outras situações exigem a elevação da água para permitir o avanço.',
            'Com uma apresentação em 2D e uma experiência focada em raciocínio e exploração, Pebble & Tide transforma o ambiente em parte fundamental dos desafios. Cada descoberta oferece uma nova perspectiva sobre as ilhas, incentivando o jogador a experimentar, observar e encontrar soluções inesperadas.'
        ],
        information: ['Puzzle / Quebra-cabeça', '2D', 'PC', 'Lançado'],
        classification: 'Livre — exploração e desafios de raciocínio.',
        observation: 'A classificação indicativa é sugerida e não oficial. A rating apresentada é ilustrativa e deverá ser substituída por uma avaliação real.'
    }
];

export function renderGames(populateModal) {
    const catalog = document.querySelector('.games-catalog');

    if (!catalog) return;

    catalog.querySelectorAll('.game-entry').forEach(card => card.remove());

    const listElement = document.createElement('div'); listElement.className = 'rendered-games';

    games.forEach(game => {
        const card = document.createElement('article');
        const status = game.status === 'Em desenvolvimento' ? 'game-status--development' : 'game-status--released';

        card.className = 'game-entry card';
        card.innerHTML = `
        <div class="game-entry-image-container">
            <img class="game-entry-image img-fluid" src="${game.image}" alt="${game.alt}">
        </div>
            
        <div class="game-entry-content">
            <div class="game-entry-header">
                <img class="home-highlighted-logo" src="${game.logo}" alt="Logo ${game.name}">
                <h3 class="visually-hidden">${game.name}</h3>
                <ul class="game-specs">
                    <li><strong>Gênero:</strong> ${game.genre}</li>
                    <li><strong>Estilo:</strong> ${game.style}</li>
                    <li><strong>Plataforma:</strong> ${game.platform}</li>
                </ul>
                <span class="game-status ${status}">${game.status}</span>
                <div class="game-entry-actions">
                    <button type="button" class="btn btn-secondary games-button" data-bs-toggle="modal" data-bs-target="#${game.id}">
                        +
                    </button>
                </div>
            </div>
            <p>${game.description[0]}</p>
        </div>`;
        card.querySelector('[data-bs-toggle="modal"]').addEventListener('click', () => populateModal(game));
        listElement.appendChild(card);
    });
    catalog.appendChild(listElement);
}










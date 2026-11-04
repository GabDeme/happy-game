// Black Friday 2026 cai em 27/11. Meses em JS começam em 0 (10 = novembro).
const BLACK_FRIDAY = {
    inicio: new Date(2026, 10, 23),
    fim: new Date(2026, 10, 30, 23, 59, 59),
    fator: 0.5
};

// Função de 1º grau: preço = a · basePrice + b  (a = fator, b = 0)
function calculateSalePrice(basePrice, date) {
    const isOnSale = date >= BLACK_FRIDAY.inicio && date <= BLACK_FRIDAY.fim;
    return isOnSale ? BLACK_FRIDAY.fator * basePrice : basePrice;
}

// demanda: quantity vendida cai com o preço   q(p) = a − b·p
// lucro:    L(p) = (p − cost) · q(p)           → parábola (2º grau)
function calculateProfit(price, a, b, cost) {
    return (price - cost) * (a - b * price);
}

// preço que dá o lucro máximo = vértice da parábola
function getMaxProfitPrice(a, b, cost) {
    return (a + b * cost) / (2 * b);
}

const IDEAL_PRICE = getMaxProfitPrice(1000, 10, 0) - 0.10;


const form = document.querySelector('#contactForm');

function markCurrentPage() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';

    document.querySelectorAll('a[href]').forEach(function (link) {
        const destino = link.getAttribute('href').split('#')[0].split('?')[0];
        const targetPage = destino.split('/').pop();

        if (targetPage === currentPage) {
            link.classList.add('pagina-atual');
            link.setAttribute('aria-current', 'page');
        }
    });
}

markCurrentPage();

const games = [
    {
        id: 'modalLumenfall',
        slug: 'lumenfall',
        name: 'Lumenfall',
        image: '../images/game-images/lumenfall.jpg',
        logo: '../images/game-logos/lumenfall-logo.png',
        hero: '../images/heros/lumenfall-hero.jpg',
        alt: 'Imagem do jogo Lumenfall',
        genre: 'Aventura / Exploração',
        style: '3D',
        platform: 'PC',
        status: 'Em desenvolvimento',
        subtitle: 'Uma jornada onde cada luz importa',
        shortDescription: ['Explore um mundo esquecido onde a luz está desaparecendo lentamente. Guie um pequeno viajante em busca por um caminho de volta para casa.'],
        longDescription: [
            'Em Lumenfall, um pequeno viajante desperta em um mundo misterioso, onde a luz está desaparecendo lentamente e antigas construções escondem histórias esquecidas. Sem saber exatamente como chegou até ali, ele precisa explorar florestas luminosas, atravessar pontes antigas e descobrir o que aconteceu com aquele lugar.',
            'Durante sua aventura, o jogador encontrará ambientes repletos de detalhes, criaturas inesperadas e enigmas que exigem observação e criatividade. Cada região apresenta novos desafios e pistas sobre o passado desse universo, incentivando a exploração e a descoberta de caminhos alternativos.',
            'Com uma atmosfera envolvente e uma narrativa construída por meio dos cenários, Lumenfall é uma experiência voltada para quem gosta de aventuras contemplativas, descobertas e histórias cheias de mistério.'
        ],
        information: ['Aventura / Exploração', '3D', 'PC', 'Em desenvolvimento'],
        classification: '10 anos — mistério, fantasia e momentos de tensão leve.',
        age: 10,
        classificationSummary: 'Mistério, fantasia e momentos de tensão leve.',
        detailAlt: 'Imagem do jogo Lumenfall', // mudar depois 
        observation: 'A classificação indicativa apresentada é uma sugestão baseada na temática do jogo, não sendo uma classificação oficial.',
        price: IDEAL_PRICE,
        rating: null
    },
    {
        id: 'modalMossMischief',
        slug: 'moss-mischief',
        name: 'Moss & Mischief',
        image: '../images/game-images/moss-mischief.jpg',
        logo: '../images/game-logos/moss-mischief-logo.png',
        hero: '../images/heros/moss-mischief-hero.png',
        alt: 'Imagem do jogo Moss & Mischief',
        genre: 'Puzzle / Plataforma',
        style: '3D',
        platform: 'PC',
        status: 'Lançado',
        subtitle: 'Uma pequena aventura, uma grande confusão',
        shortDescription: ['Ajude um sapo curioso a recuperar sua floresta resolvendo enigmas, descobrindo caminhos secretos e causando a quantity certa de confusão.'],
        longDescription: [
            'Moss & Mischief acompanha um sapo curioso que precisa recuperar sua floresta depois que acontecimentos misteriosos começam a transformar o ambiente. Para restaurar o equilíbrio da natureza, ele embarca em uma jornada por cenários coloridos, plataformas desafiadoras e lugares escondidos entre cogumelos gigantes e antigas construções.',
            'O jogador deverá explorar diferentes áreas, resolver quebra-cabeças e descobrir maneiras criativas de superar obstáculos. Saltos precisos, mecanismos interativos e caminhos secretos fazem parte da aventura, incentivando a experimentação e a curiosidade ao longo de cada fase.',
            'Com uma proposta divertida e acessível, o jogo combina desafios de plataforma com momentos de humor e exploração. Seu universo encantador convida jogadores de diferentes idades a descobrir os segredos da floresta e acompanhar as travessuras de um protagonista pequeno no tamanho, mas enorme na determinação.'
        ],
        information: ['Puzzle / Plataforma', '3D', 'PC', 'Lançado'],
        classification: 'Livre — aventura fantástica, humor leve e desafios.',
        age: 0,
        classificationSummary: 'Aventura fantástica, humor leve e desafios.',
        detailAlt: 'Imagem do jogo Moss & Mischief', // mudar depois 
        observation: 'A classificação indicativa é sugerida e não oficial. A rating apresentada é ilustrativa e deverá ser substituída por uma avaliação real.',
        price: IDEAL_PRICE,
        rating: 4
    },
    {
        id: 'modalPebbleTide',
        slug: 'pebble-tide',
        name: 'Pebble & Tide',
        image: '../images/game-images/pebble-tide.jpg',
        logo: '../images/game-logos/pebble-tide-logo.png',
        hero: '../images/heros/pebble-tide-hero.png',
        alt: 'Imagem do jogo Pebble & Tide',
        genre: 'Puzzle / Quebra-cabeça',
        style: '2D',
        platform: 'PC',
        status: 'Lançado',
        subtitle: 'O oceano guarda mais caminhos do que parece',
        shortDescription: ['Explore um mundo misterioso onde a luz está desaparecendo. Pule, explore e descubra os segredos escondidos além do caminho.'],
        longDescription: [
            'Em Pebble & Tide, uma pequena criatura aventureira explora um arquipélago misterioso, formado por ilhas, cavernas e passagens escondidas. Entretanto, o oceano não é apenas parte do cenário: suas marés determinam quais caminhos estarão disponíveis e quais segredos poderão ser descobertos.',
            'O jogador precisa observar o movimento da água e utilizar as mudanças de maré para solucionar enigmas, alcançar novas regiões e atravessar obstáculos. Lugares aparentemente inacessíveis podem se tornar passagens quando o nível do mar diminui, enquanto outras situações exigem a elevação da água para permitir o avanço.',
            'Com uma apresentação em 2D e uma experiência focada em raciocínio e exploração, Pebble & Tide transforma o ambiente em parte fundamental dos desafios. Cada descoberta oferece uma nova perspectiva sobre as ilhas, incentivando o jogador a experimentar, observar e encontrar soluções inesperadas.'
        ],
        information: ['Puzzle / Quebra-cabeça', '2D', 'PC', 'Lançado'],
        classification: 'Livre — exploração e desafios de raciocínio.',
        age: 0,
        classificationSummary: 'Exploração e desafios de raciocínio.',
        detailAlt: 'Imagem do jogo Pebble & Tide', // mudar depois 
        observation: 'A classificação indicativa é sugerida e não oficial. A rating apresentada é ilustrativa e deverá ser substituída por uma avaliação real.',
        price: IDEAL_PRICE,
        rating: 5
    }
];

function populateModal(game) {
    const modal = document.getElementById(game.id);

    if (!modal) return;

    const titulo = modal.querySelector('.modal-title');
    const corpo = modal.querySelector('.modal-body');

    if (titulo) titulo.textContent = game.name;

    if (corpo) {
        const subtitle = corpo.querySelector('h3');
        const paragraphs = corpo.querySelectorAll('p');

        if (subtitle) subtitle.textContent = game.subtitle;

        game.longDescription.forEach(function (text, index) {
            if (paragraphs[index]) paragraphs[index].textContent = text;
        });

        if (corpo.classList.contains('game-modal-body')) return;

        corpo.innerHTML = `
            <h3>${game.subtitle}</h3>
            ${game.longDescription.map(function (paragraph) {
            return `<p>${paragraph}</p>`;
        }).join('')}
            <h4>Informações do jogo</h4>
            <ul>
                <li><strong>Gênero:</strong> ${game.information[0]}</li>
                <li><strong>Estilo:</strong> ${game.information[1]}</li>
                <li><strong>Plataforma:</strong> ${game.information[2]}</li>
                <li><strong>Status:</strong> ${game.information[3]}</li>
            </ul>
            <small>${game.observation}</small>
        `;
    }
}

function renderGames(gameList = games) {
    const catalog = document.querySelector('.games-catalog');
    if (!catalog) return;

    catalog.querySelectorAll('.game-entry, .rendered-games').forEach(function (el) {
        el.remove();
    });

    const listElement = document.createElement('div');
    listElement.className = 'rendered-games';

    gameList.forEach(function (game) {
        const card = document.createElement('article');
        const statusClass = game.status === 'Em desenvolvimento'
            ? 'game-status--development'
            : 'game-status--released';
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
                    <span class="game-status ${statusClass}">${game.status}</span>
                    <div class="game-entry-actions">
                        <a class="btn btn-secondary games-button"
                           href="../html/game-information.html?id=${game.slug}"
                           aria-label="Ver detalhes de ${game.name}">+</a>
                    </div>
                </div>
                <p>${game.longDescription[0]}</p>
            </div>
        `;

        // card.querySelector('[data-bs-toggle="modal"]').addEventListener('click', function () {
        //     populateModal(game);
        // });

        listElement.appendChild(card);
    });

    catalog.appendChild(listElement);
}

renderGames();

function renderHomeGames() {
    const grid = document.querySelector('#homeGamesGrid');
    if (!grid) return;

    games.forEach(function (game) {
        const card = document.createElement('article');
        card.className = 'home-game-card';
        card.innerHTML = `
            <img class="home-game-card-image" src="${game.image}" alt="${game.alt}">
            <div class="home-game-card-content">
                <h3>${game.name}</h3>
                <span>${game.style} - ${game.status}</span>
                <p>${game.shortDescription[0]}</p>
                <button type="button" class="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#${game.id}">Ver jogo</button>
            </div>
        `;
        card.querySelector('[data-bs-toggle="modal"]').addEventListener('click', function () {
            populateModal(game);
        });
        grid.appendChild(card);
    });
}

renderHomeGames();

function validateField(field) {
    const preenchido = field.value.trim() !== '';
    const valido = preenchido && field.checkValidity();

    field.classList.toggle('is-valid', valido);
    field.classList.toggle('is-invalid', !valido);

    return valido;
}

if (form) {
    const fields = form.querySelectorAll('input, textarea');

    fields.forEach(function (field) {
        field.addEventListener('blur', function () {
            validateField(field);
        });

        field.addEventListener('input', function () {
            if (field.classList.contains('is-invalid')) {
                validateField(field);
            }
        });
    });

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        let isFormValid = true;

        fields.forEach(function (field) {
            if (!validateField(field)) {
                isFormValid = false;
            }
        });

        if (isFormValid) {
            form.submit();
        }
    });
}

const params = new URLSearchParams(window.location.search);
const modalId = params.get('modal');

if (modalId && window.bootstrap) {
    const modalElement = document.getElementById(modalId);

    if (modalElement) {
        const modal = new bootstrap.Modal(modalElement);
        modal.show();
    }
}










// Lê ?id=... da URL e devolve o jogo correspondente (ou undefined)
function getGameFromUrl() {
    const slug = new URLSearchParams(window.location.search).get('id');
    return games.find(function (game) { return game.slug === slug; });
}

// switch: escolhe o rating e o text da classificação indicativa
function getAgeRating(age) {
    switch (age) {
        case 0: return { image: '../images/indications/indication-livre.webp', alt: 'Livre para todos os públicos' };
        case 10: return { image: '../images/indications/indication-10.webp', alt: 'Não recomendado para menores de 10 anos' };
        default: return { image: '', alt: '' };
    }
}

function formatPrice(value) {
    return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

function field(name) {
    return document.querySelector('[data-field="' + name + '"]');
}

function populateGameDetails(game) {
    const released = game.status === 'Lançado';
    const ageRatingData = getAgeRating(game.age);

    document.title = game.name + ' - Little Comet Studio';
    field('pageTitle').textContent = game.name;
    field('heroSubtitle').textContent = game.subtitle;
    const hero = document.querySelector('.hero');
    if (hero) hero.style.backgroundImage = `url("${game.hero}")`;
    const logo = field('gameLogo');
    logo.src = game.logo;
    logo.alt = 'Logo do jogo ' + game.name;
    field('breadcrumbName').textContent = game.name;

    const status = field('status');
    status.textContent = game.status;
    status.classList.add(released ? 'bg-success' : 'bg-warning');

    const ageImage = field('ageRating');
    ageImage.src = ageRatingData.image;
    ageImage.alt = ageRatingData.alt;
    field('ratingSummary').textContent = game.classificationSummary;

    field('subtitle').textContent = game.subtitle;
    const longDescription = field('longDescription');
    game.longDescription.forEach(function (text) {
        const p = document.createElement('p');
        p.textContent = text;
        longDescription.appendChild(p);
    });

    const specs = field('specifications');
    [['Gênero', game.genre], ['Estilo', game.style], ['Plataforma', game.platform]]
        .forEach(function (par) {
            const li = document.createElement('li');
            li.innerHTML = '<strong>' + par[0] + ':</strong> ';
            li.append(par[1]);
            specs.appendChild(li);
        });
    field('observation').textContent = game.observation;

    const image = field('image');
    image.src = game.image;
    image.alt = game.detailAlt;

    // field('price').textContent = formatPrice(game.price);

    const currentDate = new Date();   // para o vídeo: new Date(2026, 10, 27)
    const finalPrice = calculateSalePrice(game.price, currentDate);
    const isOnSale = finalPrice < game.price;

    field('price').innerHTML = isOnSale
        ? '<s class="text-secondary fs-6">' + formatPrice(game.price) + '</s> ' + formatPrice(finalPrice)
        : formatPrice(finalPrice);


    // Compra só é possível para jogos lançados; o modal pede a confirmação
    const button = field('buyButton');
    if (released) {
        field('gameModalName').textContent = game.name;
        field('gameModalPrice').textContent = formatPrice(finalPrice);
        field('confirmPurchase').href = '../html/thanks.html?id=' + game.slug;
    } else {
        button.textContent = 'Em breve';
        button.disabled = true;
        button.removeAttribute('data-bs-toggle');
        button.removeAttribute('data-bs-target');
    }

    const gameRating = field('stars');
    if (game.rating) {
        gameRating.innerHTML = generateStars(game.rating);
        gameRating.setAttribute('aria-label', game.rating + ' de 5 estrelas');
    } else {
        gameRating.textContent = 'Ainda sem avaliações';
    }
}

function initializeGamePage() {
    if (!document.getElementById('game-detail')) return;

    const game = getGameFromUrl();

    if (!game) {
        document.getElementById('game-detail').hidden = true;
        document.getElementById('game-not-found').hidden = false;
        return;
    }
    populateGameDetails(game);
}

initializeGamePage();



// Lista "Você também pode gostar": todos os jogos, menos o que está em destaque
function renderOtherGames() {
    const grid = document.querySelector('#otherGamesGrid');
    if (!grid) return;

    const currentGame = getGameFromUrl();

    games
        .filter(function (game) {
            return !currentGame || game.slug !== currentGame.slug;
        })
        .forEach(function (game) {
            const card = document.createElement('article');
            card.className = 'home-game-card';
            card.innerHTML = `
                <img class="home-game-card-image" src="${game.image}" alt="${game.alt}">
                <div class="home-game-card-content">
                    <h3>${game.name}</h3>
                    <span>${game.style} - ${game.status}</span>
                    <p>${game.shortDescription[0]}</p>
                    <a class="btn btn-secondary" href="../html/game-information.html?id=${game.slug}">Ver jogo</a>
                </div>
            `;
            grid.appendChild(card);
        });
}

renderOtherGames();


function generateStars(rating, maximum = 5) {
    let starsString = '';
    for (let i = 1; i <= maximum; i++) {
        starsString += i <= rating
            ? '<span class="text-warning game-modal-rating-star" aria-hidden="true">★</span>'
            : '<span class="text-secondary game-modal-rating-star" aria-hidden="true">☆</span>';
    }
    return starsString;
}

function sortByRating(gamesList) {
    return [...gamesList].sort(function (firstGame, secondGame) {
        return (secondGame.rating ?? -1) - (firstGame.rating ?? -1);
    });
}

const sortButton = document.getElementById('sortButton');
let isSortedByRating = false;

if (sortButton) {
    sortButton.addEventListener('click', function () {
        isSortedByRating = !isSortedByRating;
        renderGames(isSortedByRating ? sortByRating(games) : games);
        sortButton.textContent = isSortedByRating
            ? 'Voltar à ordem original'
            : 'Ordenar por avaliação';
    });
}











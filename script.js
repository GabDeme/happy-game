const formulario = document.querySelector('#formContato');

// Fase 2: identifica a página atual para destacar sua opção na topbar e no footer.
function marcarPaginaAtual() {
    const paginaAtual = window.location.pathname.split('/').pop() || 'index.html';

    document.querySelectorAll('a[href]').forEach(function (link) {
        const destino = link.getAttribute('href').split('#')[0].split('?')[0];
        const paginaDestino = destino.split('/').pop();

        if (paginaDestino === paginaAtual) {
            link.classList.add('pagina-atual');
            link.setAttribute('aria-current', 'page');
        }
    });
}

marcarPaginaAtual();

const jogos = [
    // Fase 2: array centralizado para organizar os dados usados nos cards e nos modais.
    {
        id: 'modalLumenfall',
        nome: 'Lumenfall',
        imagem: 'imagens/game-images/lumenfall.jpg',
        logo: 'imagens/game-logos/lumenfall-logo.png',
        alt: 'Imagem do jogo Lumenfall',
        genero: 'Aventura / Exploração',
        estilo: '3D',
        plataforma: 'PC',
        status: 'Em desenvolvimento',
        subtitulo: 'Uma jornada onde cada luz importa',
        descricao: [
            'Em Lumenfall, um pequeno viajante desperta em um mundo misterioso, onde a luz está desaparecendo lentamente e antigas construções escondem histórias esquecidas. Sem saber exatamente como chegou até ali, ele precisa explorar florestas luminosas, atravessar pontes antigas e descobrir o que aconteceu com aquele lugar.',
            'Durante sua aventura, o jogador encontrará ambientes repletos de detalhes, criaturas inesperadas e enigmas que exigem observação e criatividade. Cada região apresenta novos desafios e pistas sobre o passado desse universo, incentivando a exploração e a descoberta de caminhos alternativos.',
            'Com uma atmosfera envolvente e uma narrativa construída por meio dos cenários, Lumenfall é uma experiência voltada para quem gosta de aventuras contemplativas, descobertas e histórias cheias de mistério.'
        ],
        informacoes: ['Aventura / Exploração', '3D', 'PC', 'Em desenvolvimento'],
        classificacao: '10 anos — mistério, fantasia e momentos de tensão leve.',
        nota: 'Ainda não disponível, pois o jogo não foi lançado.',
        observacao: 'A classificação indicativa apresentada é uma sugestão baseada na temática do jogo, não sendo uma classificação oficial.'
    },
    {
        id: 'modalMossMischief',
        nome: 'Moss & Mischief',
        imagem: 'imagens/game-images/moss-mischief.jpg',
        logo: 'imagens/game-logos/moss-mischief-logo.png',
        alt: 'Imagem do jogo Moss & Mischief',
        genero: 'Puzzle / Plataforma',
        estilo: '3D',
        plataforma: 'PC',
        status: 'Lançado',
        subtitulo: 'Uma pequena aventura, uma grande confusão',
        descricao: [
            'Moss & Mischief acompanha um sapo curioso que precisa recuperar sua floresta depois que acontecimentos misteriosos começam a transformar o ambiente. Para restaurar o equilíbrio da natureza, ele embarca em uma jornada por cenários coloridos, plataformas desafiadoras e lugares escondidos entre cogumelos gigantes e antigas construções.',
            'O jogador deverá explorar diferentes áreas, resolver quebra-cabeças e descobrir maneiras criativas de superar obstáculos. Saltos precisos, mecanismos interativos e caminhos secretos fazem parte da aventura, incentivando a experimentação e a curiosidade ao longo de cada fase.',
            'Com uma proposta divertida e acessível, o jogo combina desafios de plataforma com momentos de humor e exploração. Seu universo encantador convida jogadores de diferentes idades a descobrir os segredos da floresta e acompanhar as travessuras de um protagonista pequeno no tamanho, mas enorme na determinação.'
        ],
        informacoes: ['Puzzle / Plataforma', '3D', 'PC', 'Lançado'],
        classificacao: 'Livre — aventura fantástica, humor leve e desafios.',
        nota: '8,7/10',
        observacao: 'A classificação indicativa é sugerida e não oficial. A nota apresentada é ilustrativa e deverá ser substituída por uma avaliação real.'
    },
    {
        id: 'modalPebbleTide',
        nome: 'Pebble & Tide',
        imagem: 'imagens/game-images/pebble-tide.jpg',
        logo: 'imagens/game-logos/pebble-tide-logo.png',
        alt: 'Imagem do jogo Pebble & Tide',
        genero: 'Puzzle / Quebra-cabeça',
        estilo: '2D',
        plataforma: 'PC',
        status: 'Lançado',
        subtitulo: 'O oceano guarda mais caminhos do que parece',
        descricao: [
            'Em Pebble & Tide, uma pequena criatura aventureira explora um arquipélago misterioso, formado por ilhas, cavernas e passagens escondidas. Entretanto, o oceano não é apenas parte do cenário: suas marés determinam quais caminhos estarão disponíveis e quais segredos poderão ser descobertos.',
            'O jogador precisa observar o movimento da água e utilizar as mudanças de maré para solucionar enigmas, alcançar novas regiões e atravessar obstáculos. Lugares aparentemente inacessíveis podem se tornar passagens quando o nível do mar diminui, enquanto outras situações exigem a elevação da água para permitir o avanço.',
            'Com uma apresentação em 2D e uma experiência focada em raciocínio e exploração, Pebble & Tide transforma o ambiente em parte fundamental dos desafios. Cada descoberta oferece uma nova perspectiva sobre as ilhas, incentivando o jogador a experimentar, observar e encontrar soluções inesperadas.'
        ],
        informacoes: ['Puzzle / Quebra-cabeça', '2D', 'PC', 'Lançado'],
        classificacao: 'Livre — exploração e desafios de raciocínio.',
        nota: '9,0/10',
        observacao: 'A classificação indicativa é sugerida e não oficial. A nota apresentada é ilustrativa e deverá ser substituída por uma avaliação real.'
    }
];

function preencherModal(jogo) {
    // Fase 2: manipulação do DOM para preencher o modal com os dados do jogo selecionado.
    const modal = document.getElementById(jogo.id);

    if (!modal) return;

    const titulo = modal.querySelector('.modal-title');
    const corpo = modal.querySelector('.modal-body');

    if (titulo) titulo.textContent = jogo.nome;

    if (corpo) {
        // Fase 2: preserva a estrutura e o estilo do modal e altera apenas seus textos.
        const subtitulo = corpo.querySelector('h3');
        const paragrafos = corpo.querySelectorAll('p');

        if (subtitulo) subtitulo.textContent = jogo.subtitulo;

        jogo.descricao.forEach(function (texto, indice) {
            if (paragrafos[indice]) paragrafos[indice].textContent = texto;
        });

        if (corpo.classList.contains('game-modal-body')) return;

        corpo.innerHTML = `
            <h3>${jogo.subtitulo}</h3>
            ${jogo.descricao.map(function (paragrafo) {
                return `<p>${paragrafo}</p>`;
            }).join('')}
            <h4>Informações do jogo</h4>
            <ul>
                <li><strong>Gênero:</strong> ${jogo.informacoes[0]}</li>
                <li><strong>Estilo:</strong> ${jogo.informacoes[1]}</li>
                <li><strong>Plataforma:</strong> ${jogo.informacoes[2]}</li>
                <li><strong>Status:</strong> ${jogo.informacoes[3]}</li>
                <li><strong>Classificação indicativa sugerida:</strong> ${jogo.classificacao}</li>
                <li><strong>Avaliação:</strong> ${jogo.nota}</li>
            </ul>
            <small>${jogo.observacao}</small>
        `;
    }
}

function renderizarJogos() {
    // Fase 2: cria os cards dinamicamente para evitar repetir a estrutura no HTML.
    const catalogo = document.querySelector('.games-catalog');

    if (!catalogo) return;

    catalogo.querySelectorAll('.game-entry').forEach(function (card) {
        card.remove();
    });

    const lista = document.createElement('div');
    lista.className = 'jogos-renderizados';

    // Fase 2: percorre o array com forEach e cria um card para cada jogo.
    jogos.forEach(function (jogo) {
        const card = document.createElement('article');
        const classeStatus = jogo.status === 'Em desenvolvimento'
            ? 'game-status--dev'
            : 'game-status--released';
        card.className = 'game-entry card';
        card.innerHTML = `
            <div class="game-entry-image-container">
                <img class="game-entry-image img-fluid" src="${jogo.imagem}" alt="${jogo.alt}">
            </div>
            <div class="game-entry-content">
                <div class="game-entry-header">
                    <img class="home-highlighted-logo" src="${jogo.logo}" alt="Logo ${jogo.nome}">
                    <h3 class="visually-hidden">${jogo.nome}</h3>
                    <ul class="game-specs">
                        <li><strong>Gênero:</strong> ${jogo.genero}</li>
                        <li><strong>Estilo:</strong> ${jogo.estilo}</li>
                        <li><strong>Plataforma:</strong> ${jogo.plataforma}</li>
                    </ul>
                    <span class="game-status ${classeStatus}">${jogo.status}</span>
                    <div class="game-entry-actions">
                        <button type="button" class="btn btn-secondary btn-jogos" data-bs-toggle="modal" data-bs-target="#${jogo.id}">
                            +
                        </button>
                    </div>
                </div>
                <p>${jogo.descricao[0]}</p>
            </div>
        `;

        // Fase 2: evento click atualiza o conteúdo do modal antes de sua abertura.
        card.querySelector('[data-bs-toggle="modal"]').addEventListener('click', function () {
            preencherModal(jogo);
        });

        lista.appendChild(card);
    });

    catalogo.appendChild(lista);
}

renderizarJogos();

// Fase 2: cria os cards resumidos da home a partir do mesmo array de jogos.
function renderizarJogosNaHome() {
    const grade = document.querySelector('#homeGamesGrid');
    if (!grade) return;

    jogos.forEach(function (jogo) {
        const card = document.createElement('article');
        card.className = 'home-game-card';
        card.innerHTML = `
            <img class="home-game-card-image" src="${jogo.imagem}" alt="${jogo.alt}">
            <div class="home-game-card-content">
                <h3>${jogo.nome}</h3>
                <span>${jogo.estilo} - ${jogo.status}</span>
                <p>${jogo.descricao[0]}</p>
                <button type="button" class="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#${jogo.id}">Ver jogo</button>
            </div>
        `;
        card.querySelector('[data-bs-toggle="modal"]').addEventListener('click', function () {
            preencherModal(jogo);
        });
        grade.appendChild(card);
    });
}

renderizarJogosNaHome();

function validarCampo(campo) {
    // Fase 2: valida um campo individual e aplica o feedback visual do Bootstrap.
    const preenchido = campo.value.trim() !== '';
    const valido = preenchido && campo.checkValidity();

    campo.classList.toggle('is-valid', valido);
    campo.classList.toggle('is-invalid', !valido);

    return valido;
}

if (formulario) {
    const campos = formulario.querySelectorAll('input, textarea');

    campos.forEach(function (campo) {
        // Fase 2: blur valida o campo quando o usuário sai dele.
        campo.addEventListener('blur', function () {
            validarCampo(campo);
        });

        // Fase 2: input atualiza o feedback enquanto o usuário corrige o campo.
        campo.addEventListener('input', function () {
            if (campo.classList.contains('is-invalid')) {
                validarCampo(campo);
            }
        });
    });

    // Fase 2: submit valida todos os campos antes de permitir o envio.
    formulario.addEventListener('submit', function (evento) {
        evento.preventDefault();

        let formularioValido = true;

        campos.forEach(function (campo) {
            if (!validarCampo(campo)) {
                formularioValido = false;
            }
        });

        if (formularioValido) {
            formulario.submit();
        }
    });
}

const parametros = new URLSearchParams(window.location.search);
const modalId = parametros.get('modal');

// Fase 2: abre automaticamente o modal solicitado por outra página através da URL.
if (modalId && window.bootstrap) {
    const modalElemento = document.getElementById(modalId);

    if (modalElemento) {
        const modal = new bootstrap.Modal(modalElemento);
        modal.show();
    }
}

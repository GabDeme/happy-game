// Black Friday 2026 cai em 27/11. Meses em JS começam em 0 (10 = novembro).
const BLACK_FRIDAY = {
    inicio: new Date(2026, 10, 23),
    fim: new Date(2026, 10, 30, 23, 59, 59),
    fator: 0.5
};

// Função de 1º grau: preço = a · precoBase + b  (a = fator, b = 0)
function calcularPrecoComPromocao(precoBase, data) {
    const emPromocao = data >= BLACK_FRIDAY.inicio && data <= BLACK_FRIDAY.fim;
    return emPromocao ? BLACK_FRIDAY.fator * precoBase : precoBase;
}

// demanda: quantidade vendida cai com o preço   q(p) = a − b·p
// lucro:    L(p) = (p − custo) · q(p)           → parábola (2º grau)
function calcularLucro(preco, a, b, custo) {
    return (preco - custo) * (a - b * preco);
}

// preço que dá o lucro máximo = vértice da parábola
function precoDeLucroMaximo(a, b, custo) {
    return (a + b * custo) / (2 * b);
}

const PRECO_IDEAL = precoDeLucroMaximo(1000, 10, 0) - 0.10; 


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
        slug: 'lumenfall',
        nome: 'Lumenfall',
        imagem: 'imagens/game-images/lumenfall.jpg',
        logo: 'imagens/game-logos/lumenfall-logo.png',
        alt: 'Imagem do jogo Lumenfall',
        genero: 'Aventura / Exploração',
        estilo: '3D',
        plataforma: 'PC',
        status: 'Em desenvolvimento',
        subtitulo: 'Uma jornada onde cada luz importa',
        descricaoCurta: ['Explore um mundo esquecido onde a luz está desaparecendo lentamente. Guie um pequeno viajante em busca por um caminho de volta para casa.'],
        descricaoLonga: [
            'Em Lumenfall, um pequeno viajante desperta em um mundo misterioso, onde a luz está desaparecendo lentamente e antigas construções escondem histórias esquecidas. Sem saber exatamente como chegou até ali, ele precisa explorar florestas luminosas, atravessar pontes antigas e descobrir o que aconteceu com aquele lugar.',
            'Durante sua aventura, o jogador encontrará ambientes repletos de detalhes, criaturas inesperadas e enigmas que exigem observação e criatividade. Cada região apresenta novos desafios e pistas sobre o passado desse universo, incentivando a exploração e a descoberta de caminhos alternativos.',
            'Com uma atmosfera envolvente e uma narrativa construída por meio dos cenários, Lumenfall é uma experiência voltada para quem gosta de aventuras contemplativas, descobertas e histórias cheias de mistério.'
        ],
        informacoes: ['Aventura / Exploração', '3D', 'PC', 'Em desenvolvimento'],
        classificacao: '10 anos — mistério, fantasia e momentos de tensão leve.',
        idade: 10,
        resumoClassificacao: 'Mistério, fantasia e momentos de tensão leve.',
        altDetalhe: 'dsadasss', // mudar depois 
        observacao: 'A classificação indicativa apresentada é uma sugestão baseada na temática do jogo, não sendo uma classificação oficial.',
        preco: PRECO_IDEAL,
        estrelas: null
    },
    {
        id: 'modalMossMischief',
        slug: 'moss-mischief',
        nome: 'Moss & Mischief',
        imagem: 'imagens/game-images/moss-mischief.jpg',
        logo: 'imagens/game-logos/moss-mischief-logo.png',
        alt: 'Imagem do jogo Moss & Mischief',
        genero: 'Puzzle / Plataforma',
        estilo: '3D',
        plataforma: 'PC',
        status: 'Lançado',
        subtitulo: 'Uma pequena aventura, uma grande confusão',
        descricaoCurta: ['Ajude um sapo curioso a recuperar sua floresta resolvendo enigmas, descobrindo caminhos secretos e causando a quantidade certa de confusão.'],
        descricaoLonga: [
            'Moss & Mischief acompanha um sapo curioso que precisa recuperar sua floresta depois que acontecimentos misteriosos começam a transformar o ambiente. Para restaurar o equilíbrio da natureza, ele embarca em uma jornada por cenários coloridos, plataformas desafiadoras e lugares escondidos entre cogumelos gigantes e antigas construções.',
            'O jogador deverá explorar diferentes áreas, resolver quebra-cabeças e descobrir maneiras criativas de superar obstáculos. Saltos precisos, mecanismos interativos e caminhos secretos fazem parte da aventura, incentivando a experimentação e a curiosidade ao longo de cada fase.',
            'Com uma proposta divertida e acessível, o jogo combina desafios de plataforma com momentos de humor e exploração. Seu universo encantador convida jogadores de diferentes idades a descobrir os segredos da floresta e acompanhar as travessuras de um protagonista pequeno no tamanho, mas enorme na determinação.'
        ],
        informacoes: ['Puzzle / Plataforma', '3D', 'PC', 'Lançado'],
        classificacao: 'Livre — aventura fantástica, humor leve e desafios.',
        idade: 0,
        resumoClassificacao: 'Aventura fantástica, humor leve e desafios.',
        altDetalhe: 'dsadasss', // mudar depois 
        observacao: 'A classificação indicativa é sugerida e não oficial. A nota apresentada é ilustrativa e deverá ser substituída por uma avaliação real.',
        preco: PRECO_IDEAL,
        estrelas: 4
    },
    {
        id: 'modalPebbleTide',
        slug: 'pebble-tide',
        nome: 'Pebble & Tide',
        imagem: 'imagens/game-images/pebble-tide.jpg',
        logo: 'imagens/game-logos/pebble-tide-logo.png',
        alt: 'Imagem do jogo Pebble & Tide',
        genero: 'Puzzle / Quebra-cabeça',
        estilo: '2D',
        plataforma: 'PC',
        status: 'Lançado',
        subtitulo: 'O oceano guarda mais caminhos do que parece',
        descricaoCurta: ['Explore um mundo misterioso onde a luz está desaparecendo. Pule, explore e descubra os segredos escondidos além do caminho.'],
        descricaoLonga: [
            'Em Pebble & Tide, uma pequena criatura aventureira explora um arquipélago misterioso, formado por ilhas, cavernas e passagens escondidas. Entretanto, o oceano não é apenas parte do cenário: suas marés determinam quais caminhos estarão disponíveis e quais segredos poderão ser descobertos.',
            'O jogador precisa observar o movimento da água e utilizar as mudanças de maré para solucionar enigmas, alcançar novas regiões e atravessar obstáculos. Lugares aparentemente inacessíveis podem se tornar passagens quando o nível do mar diminui, enquanto outras situações exigem a elevação da água para permitir o avanço.',
            'Com uma apresentação em 2D e uma experiência focada em raciocínio e exploração, Pebble & Tide transforma o ambiente em parte fundamental dos desafios. Cada descoberta oferece uma nova perspectiva sobre as ilhas, incentivando o jogador a experimentar, observar e encontrar soluções inesperadas.'
        ],
        informacoes: ['Puzzle / Quebra-cabeça', '2D', 'PC', 'Lançado'],
        classificacao: 'Livre — exploração e desafios de raciocínio.',
        idade: 0,
        resumoClassificacao: 'Exploração e desafios de raciocínio.',
        altDetalhe: 'dsadasss', // mudar depois 
        observacao: 'A classificação indicativa é sugerida e não oficial. A nota apresentada é ilustrativa e deverá ser substituída por uma avaliação real.',
        preco: PRECO_IDEAL,
        estrelas: 5
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

        jogo.descricaoLonga.forEach(function (texto, indice) {
            if (paragrafos[indice]) paragrafos[indice].textContent = texto;
        });

        if (corpo.classList.contains('game-modal-body')) return;

        corpo.innerHTML = `
            <h3>${jogo.subtitulo}</h3>
            ${jogo.descricaoLonga.map(function (paragrafo) {
            return `<p>${paragrafo}</p>`;
        }).join('')}
            <h4>Informações do jogo</h4>
            <ul>
                <li><strong>Gênero:</strong> ${jogo.informacoes[0]}</li>
                <li><strong>Estilo:</strong> ${jogo.informacoes[1]}</li>
                <li><strong>Plataforma:</strong> ${jogo.informacoes[2]}</li>
                <li><strong>Status:</strong> ${jogo.informacoes[3]}</li>
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
                        <a class="btn btn-secondary btn-jogos"
                           href="informacao-jogo.html?id=${jogo.slug}"
                           aria-label="Ver detalhes de ${jogo.nome}">+</a>
                    </div>
                </div>
                <p>${jogo.descricaoLonga[0]}</p>
            </div>
        `;

        // Fase 2: evento click atualiza o conteúdo do modal antes de sua abertura.
        // card.querySelector('[data-bs-toggle="modal"]').addEventListener('click', function () {
        //     preencherModal(jogo);
        // });

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
                <p>${jogo.descricaoCurta[0]}</p>
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










// Lê ?id=... da URL e devolve o jogo correspondente (ou undefined)
function obterJogoDaURL() {
    const slug = new URLSearchParams(window.location.search).get('id');
    return jogos.find(function (jogo) { return jogo.slug === slug; });
}

// switch: escolhe o selo e o texto da classificação indicativa
function obterSeloIdade(idade) {
    switch (idade) {
        case 0: return { imagem: 'imagens/indications/indication-livre.webp', alt: 'Livre para todos os públicos' };
        case 10: return { imagem: 'imagens/indications/indication-10.webp', alt: 'Não recomendado para menores de 10 anos' };
        default: return { imagem: '', alt: '' };
    }
}

function formatarPreco(valor) {
    return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

function campo(nome) {
    return document.querySelector('[data-campo="' + nome + '"]');
}

function preencherDetalhes(jogo) {
    const lancado = jogo.status === 'Lançado';
    const selo = obterSeloIdade(jogo.idade);

    document.title = jogo.nome + ' - Little Comet Studio';
    campo('titulo-pagina').textContent = jogo.nome;
    campo('subtitulo-hero').textContent = jogo.subtitulo;
    campo('nome-breadcrumb').textContent = jogo.nome;

    const status = campo('status');
    status.textContent = jogo.status;
    status.classList.add(lancado ? 'bg-success' : 'bg-warning');

    const imgSelo = campo('selo-idade');
    imgSelo.src = selo.imagem;
    imgSelo.alt = selo.alt;
    campo('resumo-classificacao').textContent = jogo.resumoClassificacao;

    campo('subtitulo').textContent = jogo.subtitulo;
    const descricaoLonga = campo('descricaoLonga');
    jogo.descricaoLonga.forEach(function (texto) {
        const p = document.createElement('p');
        p.textContent = texto;
        descricaoLonga.appendChild(p);
    });

    const specs = campo('especificacoes');
    [['Gênero', jogo.genero], ['Estilo', jogo.estilo], ['Plataforma', jogo.plataforma]]
        .forEach(function (par) {
            const li = document.createElement('li');
            li.innerHTML = '<strong>' + par[0] + ':</strong> ';
            li.append(par[1]);
            specs.appendChild(li);
        });
    campo('observacao').textContent = jogo.observacao;

    const imagem = campo('imagem');
    imagem.src = jogo.imagem;
    imagem.alt = jogo.altDetalhe;

    // campo('preco').textContent = formatarPreco(jogo.preco);

    const hoje = new Date();   // para o vídeo: new Date(2026, 10, 27)
    const precoFinal = calcularPrecoComPromocao(jogo.preco, hoje);
    const emPromocao = precoFinal < jogo.preco;

    campo('preco').innerHTML = emPromocao
        ? '<s class="text-secondary fs-6">' + formatarPreco(jogo.preco) + '</s> ' + formatarPreco(precoFinal)
        : formatarPreco(precoFinal);


    // Compra só é possível para jogos lançados; o modal pede a confirmação
    const botao = campo('botao-comprar');
    if (lancado) {
        campo('modal-nome-jogo').textContent = jogo.nome;
        campo('modal-preco-jogo').textContent = formatarPreco(precoFinal);
        campo('confirmar-compra').href = 'agradecimento.html?id=' + jogo.slug;
    } else {
        botao.textContent = 'Em breve';
        botao.disabled = true;
        botao.removeAttribute('data-bs-toggle');
        botao.removeAttribute('data-bs-target');
    }

    const estrelas = campo('estrelas');
    if (jogo.estrelas) {
        estrelas.innerHTML = gerarEstrelas(jogo.estrelas);
        estrelas.setAttribute('aria-label', jogo.estrelas + ' de 5 estrelas');
    } else {
        estrelas.textContent = 'Ainda sem avaliações';
    }
}

function iniciarPaginaDoJogo() {
    if (!document.getElementById('detalhe-jogo')) return;

    const jogo = obterJogoDaURL();

    if (!jogo) {
        document.getElementById('detalhe-jogo').hidden = true;
        document.getElementById('jogo-nao-encontrado').hidden = false;
        return;
    }
    preencherDetalhes(jogo);
}

iniciarPaginaDoJogo();



// Lista "Você também pode gostar": todos os jogos, menos o que está em destaque
function renderizarOutrosJogos() {
    const grade = document.querySelector('#outrosJogosGrid');
    if (!grade) return;

    const jogoAtual = obterJogoDaURL();

    jogos
        .filter(function (jogo) {
            return !jogoAtual || jogo.slug !== jogoAtual.slug;
        })
        .forEach(function (jogo) {
            const card = document.createElement('article');
            card.className = 'home-game-card';
            card.innerHTML = `
                <img class="home-game-card-image" src="${jogo.imagem}" alt="${jogo.alt}">
                <div class="home-game-card-content">
                    <h3>${jogo.nome}</h3>
                    <span>${jogo.estilo} - ${jogo.status}</span>
                    <p>${jogo.descricaoCurta[0]}</p>
                    <a class="btn btn-secondary" href="informacao-jogo.html?id=${jogo.slug}">Ver jogo</a>
                </div>
            `;
            grade.appendChild(card);
        });
}


function gerarEstrelas(nota, maximo = 5) {
    let estrelas = '';
    for (let i = 1; i <= maximo; i++) {
        estrelas += i <= nota
            ? '<span class="text-warning game-modal-rating-star" aria-hidden="true">★</span>'
            : '<span class="text-secondary game-modal-rating-star" aria-hidden="true">☆</span>';
    }
    return estrelas;
}

function ordenarPorEstrelas(lista) {
    return [...lista].sort(function (a, b) {
        return (b.estrelas ?? -1) - (a.estrelas ?? -1);
    });
}



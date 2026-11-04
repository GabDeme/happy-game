# Happy Game

Projeto acadêmico da FIAP: website sobre uma desenvolvedora fictícia de jogos.

## Status

Projeto atualizado para a Fase 3, com Bootstrap 5, JavaScript modular, páginas individuais de jogos e experiência demonstrativa de compra e download.

## Estrutura de pastas

```
happy-game/
├── html/
│   ├── index.html
│   ├── project.html
│   ├── games.html
│   ├── contact.html
│   ├── game-information.html
│   ├── feedback.html
│   └── thanks.html
├── css/
│   ├── global.css
│   ├── home.css
│   ├── project.css
│   ├── games.css
│   ├── contact.css
│   ├── feedback.css
│   ├── thanks.css
│   └── game-details.css
├── js/
│   ├── app.js
│   ├── global.js
│   ├── home.js
│   ├── games.js
│   ├── contact.js
│   ├── game-details.js
│   ├── game-catalog.js
│   ├── form-validation.js
│   ├── modal.js
│   └── navigation.js
├── images/
├── videos/
└── README.md
```

## Tecnologias

- HTML5
- CSS3
- Bootstrap 5.3.3
- JavaScript

O Bootstrap é carregado por CDN nas páginas HTML. O CSS próprio do projeto foi mantido para preservar a identidade visual existente.

## Funcionalidades técnicas

- Navbar original para desktop;
- Menu hambúrguer responsivo para dispositivos móveis;
- Containers, linhas e colunas do Bootstrap;
- Cards para apresentação dos jogos;
- Modal com detalhes do jogo Lumenfall;
- Botões estilizados com Bootstrap;
- Formulário com componentes `form-control`;
- Validação de campos com JavaScript;
- Feedback visual com `is-valid`, `is-invalid` e `invalid-feedback`;
- Página de confirmação após o envio do formulário;
- Imagens responsivas com `img-fluid`;
- Links entre as páginas do projeto.

## Páginas

- **index.html** — página inicial
- **project.html** — detalhamento do projeto
- **games.html** — catálogo de jogos
- **contact.html** — formulário de contato
- **game-information.html** — detalhes de cada jogo
- **feedback.html** — confirmação de envio do formulário
- **thanks.html** — agradecimento após a compra demonstrativa

## Como visualizar

Abra o arquivo `html/index.html` em um navegador.

Como o Bootstrap é carregado por CDN, é necessário estar conectado à internet para carregar os arquivos do Bootstrap. As imagens, páginas e estilos próprios permanecem no projeto local.

## JavaScript

O JavaScript é dividido entre `global.js` e os módulos específicos de cada página. A validação do formulário de contato fica no fluxo da página `contact.js`, enquanto o catálogo e os detalhes dos jogos possuem seus próprios pontos de entrada.



# Happy Game

Projeto acadêmico da FIAP: website sobre uma desenvolvedora fictícia de jogos.

## Status

Projeto atualizado para a Fase 2, com Bootstrap 5 e JavaScript aplicados às páginas existentes.

## Estrutura de pastas

```
happy-game/
├── index.html
├── projeto.html
├── jogos.html
├── contato.html
├── feedback.html
├── style.css
├── script.js
├── imagens/
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
- **projeto.html** — detalhamento do projeto
- **jogos.html** — catálogo de jogos
- **contato.html** — formulário de contato
- **feedback.html** — confirmação de envio do formulário

## Como visualizar

Abra o arquivo `index.html` em um navegador.

Como o Bootstrap é carregado por CDN, é necessário estar conectado à internet para carregar os arquivos do Bootstrap. As imagens, páginas e estilos próprios permanecem no projeto local.

## JavaScript

O arquivo `script.js` realiza a validação do formulário de contato. Ele verifica os campos durante a interação e no envio, aplica feedback visual e permite o redirecionamento para `feedback.html` somente quando os dados são válidos.

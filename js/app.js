import { renderizarJogos } from './jogos.js';
import { preencherModal, abrirModalPelaURL } from './modais.js';
import { marcarPaginaAtual } from './navegacao.js';
import { inicializarFormulario } from './formulario.js';

marcarPaginaAtual(); renderizarJogos(preencherModal); inicializarFormulario(); abrirModalPelaURL();

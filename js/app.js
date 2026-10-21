import {renderizarJogos} from './jogos.js';
import {preencherModal,abrirModalPelaURL} from './modais.js';
import {marcarPaginaAtual} from './navegacao.js';
import {inicializarFormulario} from './formulario.js';
// Fase 2: ponto de entrada das funcionalidades separadas.
marcarPaginaAtual();renderizarJogos(preencherModal);inicializarFormulario();abrirModalPelaURL();

import { renderGames } from './game-catalog.js';
import { populateModal, openModalFromUrl } from './modal.js';
import { markCurrentPage } from './navigation.js';
import { initializeForm } from './form-validation.js';

markCurrentPage(); renderGames(populateModal); initializeForm(); openModalFromUrl();










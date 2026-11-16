/* Page 404 aux couleurs du client, avec son image. Une seule version (langue par défaut). */
import { html } from '../../outils/gabarit.mjs';
import { surtitre } from '../gabarits/composants.mjs';

export const page = { cle: '404', fichier: '404', langues: ['fr'], partage: false };

export default (c) => html`
<section class="ouv-courte introuvable" id="debut">
  <div class="conteneur ouv-courte-grille">
    <div>
      <p class="introuvable-code" data-anime="gsap">404</p>
      <h1 class="ouv-titre" data-anime="gsap">${c.tb('introuvable.titre')}</h1>
      <p class="ouv-intro" data-anime="gsap">${c.t('introuvable.texte')}</p>
      <p class="ouv-actions" data-anime="gsap">${c.lien('accueil', { classe: 'bouton', texte: c.t('introuvable.retour'), attrs: 'data-action-principale' })}<span class="hero-info" data-info-cle><span class="led" aria-hidden="true"></span>${c.t('commun.reponse')}</span></p>
    </div>
    ${c.media({ nom: 'grok/page-404', alt: c.s('introuvable.alt'), cadrage: '50% 50%', priorite: true, classe: 'ouv-courte-media', sizes: '(max-width: 760px) 100vw, 44vw', attrs: 'data-fx="parallaxe" data-fx-force="6" data-iris-centre' })}
  </div>
</section>
`;

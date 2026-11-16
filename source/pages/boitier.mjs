/* Le boîtier : ouverture « prix en très grand », le boîtier qui tourne, où il se pose, le configurateur complet,
   ce qui est compris, appel. */
import { html, brut } from '../../outils/gabarit.mjs';

/* Icônes dessinées pour « Ce qui est compris » : boîtier, maison, prise en main, suivi. */
const ICONES = [
  '<svg viewBox="0 0 32 32" aria-hidden="true"><path d="M5 12l11-5 11 5v9l-11 5-11-5z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><path d="M5 12l11 5 11-5M16 17v9" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><circle cx="22" cy="18" r="1.6" fill="#F59E0B"/></svg>',
  '<svg viewBox="0 0 32 32" aria-hidden="true"><path d="M5 15L16 6l11 9" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M8 13v13h16V13" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><rect x="13" y="18" width="6" height="8" rx="1" fill="#F59E0B"/></svg>',
  '<svg viewBox="0 0 32 32" aria-hidden="true"><rect x="4" y="7" width="24" height="15" rx="2" fill="none" stroke="currentColor" stroke-width="2"/><path d="M12 26h8M16 22v4" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><path d="M14 11.5v6l5-3z" fill="#F59E0B"/></svg>',
  '<svg viewBox="0 0 32 32" aria-hidden="true"><path d="M20.5 5.5a6 6 0 0 0-7.6 7.6L5.5 20.5a2.1 2.1 0 0 0 3 3l7.4-7.4a6 6 0 0 0 7.6-7.6l-3.6 3.6-3-3z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><circle cx="7" cy="22" r="1.4" fill="#F59E0B"/></svg>'
];
import { surtitre, titre, boitier, configurateur, appel } from '../gabarits/composants.mjs';

export const page = { cle: 'boitier', fichier: 'boitier', imagePartage: 'grok/boitier-etagere-1280.webp' };

export default (c) => html`
<section class="ouv-prix" id="debut">
  <div class="conteneur ouv-prix-grille">
    <div class="ouv-prix-texte">
      ${surtitre(c, 'boitierPage.hero.surtitre', 'data-anime="gsap"')}
      <p class="ouv-prix-chiffre" data-anime="gsap" data-prix>${c.t('boitierPage.hero.prix')}</p>
      <h1 class="ouv-titre" data-anime="gsap">${c.tb('boitierPage.hero.titre')}</h1>
      <p class="ouv-intro" data-anime="gsap">${c.t('boitierPage.hero.texte')}</p>
      <p class="ouv-actions" data-anime="gsap">${c.lien('boitier', { ancre: 'configurateur', classe: 'bouton', texte: c.t('boitierPage.hero.action'), attrs: 'data-action-principale data-survol="magnetique"' })}<span class="hero-info" data-info-cle><span class="led" aria-hidden="true"></span>${c.t('boitierPage.hero.info')}</span></p>
    </div>
    <div class="ouv-prix-visuel" data-effet="socle-boitier">
      <div class="socle-cercle" aria-hidden="true"></div>
      ${boitier(c, { classe: 'boitier--ouverture', attrs: 'data-iris-centre' })}
    </div>
  </div>
</section>

<section class="detail bande bande--lin" id="detail">
  <div class="conteneur detail-grille">
    <div class="detail-scene" data-detail>
      ${boitier(c, { classe: 'boitier--detail', attrs: 'data-effet="boitier"' })}
      <p class="materiel-legende">${c.t('commun.illustratif')}</p>
    </div>
    <div>
      ${surtitre(c, 'boitierPage.detail.surtitre')}
      ${titre(c, 'boitierPage.detail.titre')}
      <p data-anime>${c.t('boitierPage.detail.texte')}</p>
      <dl class="fiche" data-anime="cascade">${c.a('boitierPage.detail.specs').map((x) => html`<div><dt>${x.t}</dt><dd>${x.d}</dd></div>`)}</dl>
    </div>
  </div>
</section>

<section class="pose bande" id="pose">
  <div class="pose-cadre conteneur">
    <div class="pose-image" data-grok>
      ${c.media({ nom: 'grok/boitier-etagere', alt: c.s('boitierPage.pose.alt'), cadrage: '50% 55%', classe: 'pose-media', sizes: '(max-width: 760px) 100vw, 90vw' })}
      ${boitier(c, { classe: 'boitier--pose', attrs: 'data-superpose' })}
    </div>
    <div class="pose-texte">
      ${surtitre(c, 'boitierPage.pose.surtitre')}
      ${titre(c, 'boitierPage.pose.titre')}
      <p data-anime>${c.t('boitierPage.pose.texte')}</p>
    </div>
  </div>
</section>

<section class="configuration bande bande--lin" id="configurateur">
  <div class="conteneur">
    <div class="tarif-tete">
      ${surtitre(c, 'boitierPage.configurateur.surtitre')}
      ${titre(c, 'boitierPage.configurateur.titre')}
      <p data-anime>${c.t('boitierPage.configurateur.texte')}</p>
    </div>
    ${configurateur(c, { id: 'cfg-boitier', complet: true })}
  </div>
</section>

<section class="compris bande" id="compris">
  <div class="conteneur">
    ${surtitre(c, 'boitierPage.compris.surtitre')}
    ${titre(c, 'boitierPage.compris.titre')}
    <ol class="compris-liste" data-anime="cascade">${c.a('boitierPage.compris.items').map((x, i) => html`<li><span class="compris-icone" aria-hidden="true">${brut(ICONES[i])}</span><h3>${x.t}</h3><p>${x.d}</p></li>`)}</ol>
  </div>
</section>

${appel(c)}
`;

/* Services : ouverture « grand titre puis bandeau » (salon au crépuscule), la télé, les fichiers partagés par lien,
   tous les écrans, abonnement ou boîtier, questions, appel. */
import { html, brut } from '../../outils/gabarit.mjs';
import { surtitre, titre, appel } from '../gabarits/composants.mjs';

export const page = { cle: 'services', fichier: 'services', imagePartage: 'grok/services-ouverture-1280.webp' };

export default (c) => {
  const s = c.donnees.souvenirs;
  return html`
<section class="ouv-bandeau" id="debut">
  <div class="conteneur ouv-bandeau-tete">
    ${surtitre(c, 'services.hero.surtitre', 'data-anime="gsap"')}
    <h1 class="ouv-titre" data-anime="gsap">${c.tb('services.hero.titre')}</h1>
    <div class="ouv-bandeau-ligne" data-anime="gsap">
      <p class="ouv-intro">${c.t('services.hero.texte')}</p>
      <p class="ouv-actions">${c.lien('boitier', { ancre: 'configurateur', classe: 'bouton', texte: c.t('services.hero.action'), attrs: 'data-action-principale data-survol="magnetique"' })}<span class="hero-info" data-info-cle><span class="led" aria-hidden="true"></span>${c.t('services.hero.info')}</span></p>
    </div>
  </div>
  <div class="ouv-bandeau-image">
    ${c.media({ nom: 'grok/services-ouverture', alt: c.s('services.hero.alt'), cadrage: '50% 42%', priorite: true, classe: 'ouv-bandeau-media', sizes: '100vw', attrs: 'data-fx="zoom" data-fx-force="10" data-iris-centre' })}
    <ul class="appareils" data-anime="cascade">${c.a('services.hero.appareils').map((a, i) => html`<li style="--i:${i}">${a}</li>`)}</ul>
  </div>
</section>

<section class="tele bande" id="tele">
  <div class="conteneur tele-grille">
    <div class="tele-ecran-bloc" data-grok>
      <div class="tele" data-tele data-effet="tele" data-visuel>
        <div class="tele-cadre">${s.map((x, i) => html`<img class="tele-diapo${i === 0 ? ' actif' : ''}" data-legende="${x.legende}" src="/assets/images/${x.nom}-960.webp" alt="${i === 0 ? x.alt : ''}" width="960" height="1280" loading="lazy" decoding="async"${brut(i ? ' aria-hidden="true"' : '')}>`)}<p class="tele-legende" data-tele-legende>${s[0].legende}</p></div>
        <div class="tele-pied" aria-hidden="true"></div>
      </div>
      <p class="tele-bas"><button type="button" class="tele-pause" data-tele-pause data-libelle-pause="${c.s('commun.pause')}" data-libelle-lecture="${c.s('commun.lecture')}" aria-pressed="false">${c.t('commun.pause')}</button><span class="mention-ia">${c.t('commun.mentionIa')}</span></p>
    </div>
    <div>
      ${surtitre(c, 'services.tele.surtitre')}
      ${titre(c, 'services.tele.titre')}
      <p data-anime>${c.t('services.tele.texte')}</p>
      <ul class="coches" data-anime="cascade">${c.a('services.tele.points').map((t) => html`<li>${t}</li>`)}</ul>
      <p class="propulse">${c.t('commun.propulse')} <strong>${c.t('services.tele.outil')}</strong></p>
    </div>
  </div>
</section>

<section class="partage bande bande--lin" id="fichiers">
  <div class="conteneur partage-grille">
    <div>
      ${surtitre(c, 'services.fichiers.surtitre')}
      ${titre(c, 'services.fichiers.titre')}
      <p data-anime>${c.t('services.fichiers.texte')}</p>
      <div class="lien-demo" data-lien-demo>
        <p class="lien-demo-dossier"><span class="synchro-icone synchro-icone--0" aria-hidden="true"></span>${c.t('services.fichiers.dossier')}</p>
        <button type="button" class="bouton bouton--petit" data-lien-creer>${c.t('services.fichiers.lien')}</button>
        <div class="lien-demo-place" aria-live="polite"><p class="lien-demo-resultat" data-lien-resultat hidden><code data-typo-ignorer>${c.t('services.fichiers.lienExemple')}</code><span>${c.t('services.fichiers.lienCree')}</span></p></div>
        <p class="config-note">${c.t('commun.illustratif')}</p>
      </div>
      <ul class="coches" data-anime="cascade">${c.a('services.fichiers.points').map((t) => html`<li>${t}</li>`)}</ul>
      <p class="propulse">${c.t('commun.propulse')} <strong>${c.t('services.fichiers.outil')}</strong></p>
    </div>
    ${c.media({ nom: 'grok/services-bureau', alt: c.s('services.fichiers.alt'), cadrage: '62% 50%', classe: 'partage-media', sizes: '(max-width: 760px) 100vw, 46vw', attrs: 'data-fx="parallaxe"' })}
  </div>
</section>

<section class="ecrans bande" id="ecrans">
  <div class="conteneur">
    ${surtitre(c, 'services.ecrans.surtitre')}
    ${titre(c, 'services.ecrans.titre', { classe: 'titre--grand' })}
    <ul class="ecrans-liste" data-anime="cascade">${c.a('services.ecrans.items').map((e, i) => html`<li class="ecran-carte"><span class="ecran-icone ecran-icone--${i}" aria-hidden="true"></span><h3>${e.t}</h3><p>${e.d}</p></li>`)}</ul>
  </div>
</section>

<section class="compare bande bande--nuit" id="comparer">
  <div class="conteneur">
    ${surtitre(c, 'services.compare.surtitre')}
    ${titre(c, 'services.compare.titre')}
    <div class="compare-table" data-anime="cascade" role="table" aria-label="${c.s('services.compare.surtitre')}">
      <div class="compare-ligne compare-ligne--tete" role="row">${c.a('services.compare.colonnes').map((t, i) => html`<span role="${i ? 'columnheader' : 'cell'}">${t}</span>`)}</div>
      ${c.a('services.compare.lignes').map((l) => html`<div class="compare-ligne" role="row"><span role="rowheader">${l[0]}</span><span role="cell" class="compare-avant">${l[1]}</span><span role="cell" class="compare-apres"><span class="led" aria-hidden="true"></span>${l[2]}</span></div>`)}
    </div>
    <p class="compare-note">${c.t('services.compare.note')}</p>
  </div>
</section>

<section class="faq bande" id="faq">
  <div class="conteneur faq-grille">
    <div class="faq-tete">
      ${surtitre(c, 'services.faq.surtitre')}
      ${titre(c, 'services.faq.titre')}
      ${c.media({ nom: 'grok/souvenir-mains', alt: c.donnees.souvenirs[1].alt, cadrage: '50% 50%', classe: 'faq-media', sizes: '(max-width: 760px) 100vw, 36vw', attrs: 'data-fx="parallaxe"' })}
    </div>
    <div class="faq-liste" data-anime="cascade">${c.donnees.faq.map((f) => html`<details class="faq-item"><summary>${f.q}</summary><p>${f.r}</p></details>`)}</div>
  </div>
</section>

${appel(c)}
`;
};

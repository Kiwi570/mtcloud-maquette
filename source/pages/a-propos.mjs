/* À propos : ouverture scindée (la côte), pourquoi MTCloud, chez vous et partout, engagements, la zone tracée, appel. */
import { html } from '../../outils/gabarit.mjs';
import { surtitre, titre, cote, appel } from '../gabarits/composants.mjs';

export const page = { cle: 'a-propos', fichier: 'a-propos', imagePartage: 'grok/apropos-ouverture-1280.webp' };

export default (c) => html`
<section class="ouv-scindee" id="debut">
  <div class="ouv-scindee-texte">
    ${surtitre(c, 'apropos.hero.surtitre', 'data-anime="gsap"')}
    <h1 class="ouv-titre" data-anime="gsap">${c.tb('apropos.hero.titre')}</h1>
    <p class="ouv-intro" data-anime="gsap">${c.t('apropos.hero.texte')}</p>
    <dl class="ouv-chiffres" data-anime="gsap">${c.a('apropos.hero.chiffres').map((x) => html`<div><dt><span data-compteur="${x.v}">${x.v}</span> <small>${x.u}</small></dt><dd>${x.t}</dd></div>`)}</dl>
    <p class="ouv-actions" data-anime="gsap">${c.lien('contact', { ancre: 'demande', classe: 'bouton', texte: c.t('apropos.hero.action'), attrs: 'data-action-principale data-survol="magnetique"' })}<span class="hero-info" data-info-cle><span class="led" aria-hidden="true"></span>${c.t('apropos.hero.info')}</span></p>
  </div>
  ${c.media({ nom: 'grok/apropos-ouverture', alt: c.s('apropos.hero.alt'), cadrage: '55% 50%', priorite: true, classe: 'ouv-scindee-media', sizes: '(max-width: 760px) 100vw, 50vw', attrs: 'data-fx="parallaxe" data-fx-force="6" data-iris-centre' })}
</section>

<section class="pourquoi bande" id="pourquoi">
  <div class="conteneur pourquoi-grille">
    <div>
      ${surtitre(c, 'apropos.pourquoi.surtitre')}
      ${titre(c, 'apropos.pourquoi.titre')}
      <p data-anime>${c.t('apropos.pourquoi.texte')}</p>
      <ul class="constats" data-anime="cascade">${c.a('apropos.pourquoi.constats').map((t, i) => html`<li style="--i:${i}">${t}</li>`)}</ul>
    </div>
    ${c.media({ nom: 'grok/apropos-atelier', alt: c.s('apropos.pourquoi.alt'), cadrage: '50% 50%', classe: 'pourquoi-media', sizes: '(max-width: 760px) 100vw, 38vw', attrs: 'data-anime="rideau"' })}
  </div>
</section>

<section class="citation bande bande--nuit" id="conviction">
  <div class="conteneur">
    <p class="citation-texte" data-anime="lignes">${c.tb('apropos.pourquoi.citation')}</p>
    <img class="citation-logo" src="/assets/images/logo-clair.svg" alt="" width="72" height="72" data-anime>
  </div>
</section>

<section class="partout bande" id="partout">
  <div class="conteneur">
    ${surtitre(c, 'apropos.partout.surtitre')}
    ${titre(c, 'apropos.partout.titre')}
    <ul class="ecrans-liste ecrans-liste--trois" data-anime="cascade">${c.a('apropos.partout.items').map((e, i) => html`<li class="ecran-carte"><span class="ecran-icone ecran-icone--${i}" aria-hidden="true"></span><h3>${e.t}</h3><p>${e.d}</p></li>`)}</ul>
  </div>
</section>

<section class="engagements bande bande--lin" id="engagements">
  <div class="conteneur engagements-grille">
    ${c.media({ nom: 'grok/apropos-visite', alt: c.s('apropos.engagements.alt'), cadrage: '50% 60%', classe: 'engagements-media', sizes: '(max-width: 760px) 100vw, 40vw', attrs: 'data-fx="zoom"' })}
    <div>
      ${surtitre(c, 'apropos.engagements.surtitre')}
      ${titre(c, 'apropos.engagements.titre')}
      <ol class="engagements-liste" data-anime="cascade">${c.a('apropos.engagements.items').map((e, i) => html`<li><span class="etape-num">${i + 1}</span><div><h3>${e.t}</h3><p>${e.d}</p></div></li>`)}</ol>
    </div>
  </div>
</section>

<section class="zone bande" id="zone">
  <div class="conteneur zone-grille">
    <div>
      ${surtitre(c, 'apropos.zone.surtitre')}
      ${titre(c, 'apropos.zone.titre')}
      <p data-anime>${c.t('apropos.zone.texte')}</p>
      <p class="zone-france" data-anime><span class="led" aria-hidden="true"></span>${c.t('apropos.zone.france')}</p>
    </div>
    ${cote(c)}
  </div>
</section>

${appel(c)}
`;

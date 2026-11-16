/* Accueil MTCloud : direction « Rentrer à la maison ». Ouverture (salon face à la mer, souvenirs qui rentrent dans le
   boîtier), le constat, Photos, Fichiers, trois promesses, le boîtier, le configurateur, l'artisan, les étapes, l'appel. */
import { html } from '../../outils/gabarit.mjs';
import { surtitre, titre, boitier, telephone, synchro, configurateur, appel } from '../gabarits/composants.mjs';

export const page = { cle: 'accueil', fichier: 'index', imagePartage: 'grok/accueil-ouverture-1280.webp' };

export default (c) => {
  const s = c.donnees.souvenirs;
  return html`
<section class="hero" id="debut">
  <div class="hero-texte">
    ${surtitre(c, 'accueil.hero.surtitre', 'data-anime="gsap"')}
    <h1 class="hero-titre" data-anime="gsap">${c.tb('accueil.hero.titre')}</h1>
    <p class="hero-intro" data-anime="gsap">${c.t('accueil.hero.texte')}</p>
    <p class="hero-actions" data-anime="gsap">
      ${c.lien('boitier', { ancre: 'configurateur', classe: 'bouton', texte: c.t('accueil.hero.action'), attrs: 'data-action-principale data-survol="magnetique"' })}
      <a class="lien-fleche" href="#constat" data-sans-transition>${c.t('accueil.hero.secondaire')}</a>
    </p>
    <p class="hero-info" data-info-cle data-anime="gsap"><span class="led" aria-hidden="true"></span>${c.t('accueil.hero.info')}</p>
  </div>
  <div class="hero-visuel" data-grok data-effet="souvenirs">
    ${c.media({ nom: 'grok/accueil-ouverture', alt: c.s('accueil.hero.alt'), cadrage: '60% 50%', priorite: true, classe: 'hero-photo', sizes: '(max-width: 760px) 100vw, 52vw' })}
    <div class="hero-souvenirs" aria-hidden="true">${s.slice(0, 6).map((x, i) => html`<img class="tuile" style="--i:${i}" src="/assets/images/${x.nom}-480.webp" alt="" width="480" height="640" decoding="async">`)}</div>
    ${boitier(c, { classe: 'boitier--hero', attrs: 'data-iris-centre' })}
    <p class="hero-toast" aria-hidden="true"><span class="hero-toast-coche"></span>${c.t('boitierObjet.sauvegarde')}</p>
  </div>
</section>

<section class="constat bande bande--lin" id="constat">
  <div class="conteneur constat-grille">
    <div class="constat-texte">
      ${surtitre(c, 'accueil.question.surtitre')}
      ${titre(c, 'accueil.question.titre', { classe: 'titre--grand' })}
      <p data-anime>${c.t('accueil.question.texte')}</p>
      <ul class="pastilles" data-anime="cascade">${c.a('accueil.question.tags').map((t) => html`<li>${t}</li>`)}</ul>
    </div>
    ${c.media({ nom: 'grok/accueil-boite-souvenirs', alt: c.s('accueil.question.alt'), cadrage: '62% 55%', classe: 'constat-media', sizes: '(max-width: 760px) 100vw, 46vw', attrs: 'data-fx="zoom"' })}
  </div>
</section>

<section class="photos bande" id="photos">
  <div class="conteneur photos-grille">
    ${telephone(c, { id: 'tel-accueil' })}
    <div class="photos-texte">
      ${surtitre(c, 'accueil.photos.surtitre')}
      ${titre(c, 'accueil.photos.titre')}
      <ul class="coches" data-anime="cascade">${c.a('accueil.photos.points').map((t) => html`<li>${t}</li>`)}</ul>
      <p class="adieu" data-anime>${c.t('accueil.photos.fin')}</p>
      <p class="propulse">${c.t('commun.propulse')} <strong>${c.t('accueil.photos.outil')}</strong></p>
    </div>
  </div>
</section>

<section class="fichiers bande bande--lin" id="fichiers">
  <div class="conteneur">
    <div class="fichiers-tete">
      ${surtitre(c, 'accueil.fichiers.surtitre')}
      ${titre(c, 'accueil.fichiers.titre')}
      <p data-anime>${c.t('accueil.fichiers.texte')}</p>
    </div>
    ${synchro(c)}
    <ul class="fichiers-points" data-anime="cascade">${c.a('accueil.fichiers.points').map((p) => html`<li><strong>${p.t}</strong><span>${p.d}</span></li>`)}</ul>
    <p class="fichiers-fin"><span class="adieu">${c.t('accueil.fichiers.fin')}</span> <span class="propulse">${c.t('commun.propulse')} <strong>${c.t('accueil.fichiers.outil')}</strong></span></p>
  </div>
</section>

<section class="promesses bande bande--nuit" id="promesses">
  <div class="promesses-ruban" data-fx="mots-geants" aria-hidden="true" data-ruban data-visuel>
    <p data-fx-rangee>${c.t('accueil.promesses.ruban')} ${c.t('accueil.promesses.ruban')} ${c.t('accueil.promesses.ruban')}</p>
  </div>
  <div class="conteneur">
    <h2 class="titre" data-anime="lignes">${c.t('accueil.promesses.titre')}</h2>
    <ol class="promesses-liste" data-anime="cascade">${c.a('accueil.promesses.items').map((p) => html`<li><p class="promesse-chiffre">${p.chiffre}</p><h3>${p.t}</h3><p>${p.d}</p></li>`)}</ol>
  </div>
</section>

<section class="materiel bande" id="boitier">
  <div class="conteneur materiel-grille">
    <div class="materiel-scene" data-materiel>
      ${boitier(c, { classe: 'boitier--grand', attrs: 'data-effet="boitier"' })}
      <p class="materiel-legende">${c.t('commun.illustratif')}</p>
    </div>
    <div class="materiel-texte">
      ${surtitre(c, 'accueil.boitier.surtitre')}
      ${titre(c, 'accueil.boitier.titre')}
      <p data-anime>${c.t('accueil.boitier.texte')}</p>
      <dl class="specs" data-anime="cascade">${c.a('accueil.boitier.specs').map((x) => html`<div><dt>${x.v ? html`<span data-compteur="${x.v}">${x.v}</span><small>${x.u}</small>` : x.u}</dt><dd>${x.t}</dd></div>`)}</dl>
      <p>${c.lien('boitier', { classe: 'lien-fleche', texte: c.t('accueil.boitier.lien') })}</p>
    </div>
  </div>
</section>

<section class="tarif bande bande--lin" id="tarif">
  <div class="conteneur">
    <div class="tarif-tete">
      ${surtitre(c, 'accueil.config.surtitre')}
      ${titre(c, 'accueil.config.titre')}
      <p data-anime>${c.t('accueil.config.texte')} ${c.lien('boitier', { ancre: 'configurateur', classe: 'lien-fleche', texte: c.t('accueil.config.detail') })}</p>
    </div>
    ${configurateur(c, { id: 'cfg-accueil' })}
  </div>
</section>

<section class="artisan bande" id="artisan">
  <div class="conteneur artisan-grille">
    ${c.media({ nom: 'grok/apropos-visite', alt: c.s('accueil.artisan.alt'), cadrage: '50% 60%', classe: 'artisan-media', sizes: '(max-width: 760px) 100vw, 42vw', attrs: 'data-anime="rideau"' })}
    <div class="artisan-texte">
      ${surtitre(c, 'accueil.artisan.surtitre')}
      ${titre(c, 'accueil.artisan.titre', { classe: 'titre--grand' })}
      <p data-anime>${c.t('accueil.artisan.texte')}</p>
      <ul class="formules" data-anime="cascade">${c.a('accueil.artisan.options').map((o, i) => html`<li class="formule formule--${i ? 'envoi' : 'domicile'}"><p class="formule-zone">${o.z}</p><h3>${o.t}</h3><p>${o.d}</p></li>`)}</ul>
      <p>${c.lien('a-propos', { classe: 'lien-fleche', texte: c.t('accueil.artisan.lien') })}</p>
    </div>
  </div>
</section>

<section class="etapes bande bande--lin" id="etapes">
  <div class="conteneur">
    ${surtitre(c, 'accueil.etapes.surtitre')}
    ${titre(c, 'accueil.etapes.titre')}
    <div class="etapes-piste">
      <svg class="etapes-trait" viewBox="0 0 1000 40" preserveAspectRatio="none" aria-hidden="true" data-fx="trace"><path d="M10 20 C 200 4, 300 36, 500 20 S 800 4, 990 20" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"/></svg>
      <ol class="etapes-liste" data-anime="cascade">${c.a('accueil.etapes.items').map((e, i) => html`<li><span class="etape-num">${i + 1}</span><h3>${e.t}</h3><p>${e.d}</p></li>`)}</ol>
    </div>
  </div>
</section>

${appel(c)}
`;
};

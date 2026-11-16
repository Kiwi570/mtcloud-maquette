/* Composants du site MTCloud, partagés par les pages : surtitre à la petite lumière, titres, boîtier dessiné en 3D,
   téléphone de démonstration, synchronisation des fichiers, configurateur, carte de la côte, appel final. */
import { html, brut } from '../../outils/gabarit.mjs';

export const surtitre = (c, cle, attrs = '') => html`<p class="surtitre"${brut(attrs ? ' ' + attrs : '')}><span class="led" aria-hidden="true"></span>${c.t(cle)}</p>`;

/* Titre de section : mot mis en valeur en italique (<em> dans les textes). */
export const titre = (c, cle, { classe = '', anime = 'lignes' } = {}) => html`<h2 class="titre ${classe}" data-anime="${anime}">${c.tb(cle)}</h2>`;

/* Le boîtier, dessiné en CSS 3D (six faces) : jamais une image de produit inventée. */
export const boitier = (c, { classe = '', attrs = '' } = {}) => html`<div class="boitier ${classe}" role="img" aria-label="${c.s('boitierObjet.alt')}" data-visuel${brut(attrs ? ' ' + attrs : '')}>
  <div class="boitier-ombre" aria-hidden="true"></div>
  <div class="boitier-corps" aria-hidden="true">
    <span class="face face--avant"><span class="boitier-fente"></span><span class="boitier-led"></span></span>
    <span class="face face--dessus"><span class="boitier-logo"></span></span>
    <span class="face face--droite"></span>
    <span class="face face--gauche"></span>
    <span class="face face--arriere" data-face="dos"></span>
    <span class="face face--dessous" data-face="dos"></span>
  </div>
</div>`;

const prix = (c, n, signe = '') => (c.l === 'fr' ? `${signe}${n} €` : `${signe}€${n}`);
export { prix };

/* Téléphone de démonstration : grille de souvenirs triée par personnes, lieux ou dates. */
export function telephone(c, { id = 'tel' } = {}) {
  const s = c.donnees.souvenirs;
  const tris = ['tout', 'personnes', 'lieux', 'dates'];
  return html`<div class="tel-bloc" data-grok>
  <div class="tel" data-tri data-effet="tri-photos" data-grille="manipuler" role="group" aria-label="${c.s('accueil.telephone.region')}">
    <div class="tel-ecran">
      <div class="tel-tete"><span class="tel-titre">${c.t('accueil.telephone.titre')}</span><img src="/assets/images/logo.svg" alt="" width="22" height="22"></div>
      <div class="tel-tris">${tris.map((t, i) => html`<button type="button" class="tel-tri" data-tri-choix="${t}" aria-pressed="${i === 0 ? 'true' : 'false'}" aria-controls="${id}-grille">${c.t('accueil.telephone.' + t)}</button>`)}</div>
      <p class="tel-compte" data-tri-compte="${c.s('accueil.telephone.compte')}">${c.t('accueil.telephone.compte', { n: s.length })}</p>
      <ul class="tel-grille" id="${id}-grille">${s.map((x) => html`<li class="tel-photo" data-tags="${x.tags.join(' ')}"><img src="/assets/images/${x.nom}-480.webp" alt="${x.alt}" width="480" height="640" loading="lazy" decoding="async"><span>${x.legende}</span></li>`)}</ul>
      <p class="tel-onglets" aria-hidden="true">${c.a('accueil.telephone.onglets').map((o, i) => html`<span class="${i ? '' : 'actif'}">${o}</span>`)}</p>
    </div>
  </div>
  <p class="tel-aide">${c.t('accueil.telephone.aide')}</p>
  <p class="mention-ia">${c.t('commun.mentionIa')}</p>
</div>`;
}

/* Synchronisation : chaque fichier part de l'ordinateur et arrive sur le téléphone, l'un après l'autre, au défilement. */
export function synchro(c) {
  const f = c.a('accueil.fichiers.demo');
  return html`<div class="synchro" data-synchro data-effet="synchro" data-visuel>
  <div class="synchro-appareil synchro-appareil--ordi" aria-hidden="true">
    <div class="ordi"><div class="ordi-ecran">${f.map((_, i) => html`<span class="synchro-icone synchro-icone--${i}"></span>`)}</div><div class="ordi-pied"></div></div>
    <p>${c.t('accueil.fichiers.ordinateur')}</p>
  </div>
  <ol class="synchro-fichiers">${f.map((n, i) => html`<li class="synchro-fichier" style="--i:${i}"><span class="synchro-icone synchro-icone--${i}" aria-hidden="true"></span><span class="synchro-nom">${n}</span><span class="synchro-barre" aria-hidden="true"><span class="synchro-plein"></span><span class="synchro-paquet synchro-icone synchro-icone--${i}"></span></span><span class="synchro-ok" aria-hidden="true"></span></li>`)}</ol>
  <div class="synchro-appareil synchro-appareil--tel" aria-hidden="true">
    <div class="mini-tel"><div class="mini-tel-ecran">${f.map((_, i) => html`<span class="synchro-icone synchro-icone--${i}"></span>`)}</div></div>
    <p>${c.t('accueil.fichiers.telephone')}</p>
  </div>
  <p class="synchro-etat"><span class="led" aria-hidden="true"></span><span data-synchro-etat data-fini="${c.s('accueil.fichiers.synchro')}" data-en-cours="${c.s('accueil.fichiers.enCours')}">${c.t('accueil.fichiers.synchro')}</span> · ${c.t('commun.illustratif')}</p>
</div>`;
}

/* Configurateur : variante « compacte » (accueil : stockage et accès) ou « complete » (page du boîtier). */
export function configurateur(c, { id = 'cfg', complet = false } = {}) {
  const d = c.donnees.config;
  const groupe = (nom, num, liste, aide) => html`<fieldset class="config-groupe">
    <legend><span class="config-num">${num}</span>${c.t('config.etape' + num)}</legend>
    <p class="config-aide">${c.t(aide)}</p>
    <div class="config-options config-options--${nom}">${liste.map((o) => html`<label class="config-option">
      <input type="radio" name="${id}-${nom}" value="${o.id}" data-prix="${o.prix}"${o.jauge ? brut(` data-jauge="${o.jauge}"`) : ''}${o.defaut ? brut(' checked') : ''}>
      <span class="config-option-corps"><span class="config-option-nom">${o.taille || o.nom}</span><span class="config-option-detail">${o.taille ? o.nom : o.detail}</span><span class="config-option-prix" data-prix>${o.prix ? prix(c, o.prix, '+') : prix(c, 0, '+')}</span></span>
    </label>`)}</div>
  </fieldset>`;
  const defauts = { memoire: d.memoire.find((o) => o.defaut), stockage: d.stockage.find((o) => o.defaut), acces: d.acces.find((o) => o.defaut) };
  const total = d.base + defauts.memoire.prix + defauts.stockage.prix + defauts.acces.prix;
  return html`<div class="config${complet ? ' config--complet' : ' config--compact'}" data-config data-base="${d.base}" data-langue="${c.l}" data-memoire-defaut="${defauts.memoire.prix}" data-effet="configurateur" role="group" aria-label="${c.s('config.region')}"
    data-noms='${brut(JSON.stringify({ memoire: Object.fromEntries(d.memoire.map((o) => [o.id, `${o.nom} ${o.detail.replace(/^.*?(\d+\s?\S+).*$/, '$1')}`])), stockage: Object.fromEntries(d.stockage.map((o) => [o.id, o.taille])), acces: Object.fromEntries(d.acces.map((o) => [o.id, o.nom])) }).replace(/'/g, '&#39;'))}'
    data-texte-rentable="${c.s('config.rentable')}" data-texte-vide="${c.s('config.rentableVide')}" data-texte-recap="${c.s('config.recap')}">
  <div class="config-choix">
    <p class="config-mini" aria-hidden="true" data-superpose><span>${c.t('config.totalCourt')}</span><strong data-config-mini>${prix(c, total)}</strong></p>
    ${complet ? groupe('memoire', 1, d.memoire, 'config.aide1') : ''}
    ${groupe('stockage', 2, d.stockage, 'config.aide2')}
    ${groupe('acces', 3, d.acces, 'config.aide3')}
  </div>
  <div class="config-recap" data-grille="retour">
    <div class="config-jauge" aria-hidden="true" data-visuel data-config-jauge>
      <div class="config-segments">${d.stockage.map((o, i) => html`<span class="config-segment${o.defaut ? ' plein' : ''}" data-segment="${o.id}" style="--i:${i}"><i></i><b>${o.taille}</b></span>`)}</div>
      <p>${c.t('config.jauge')}</p>
    </div>
    ${complet ? html`<ul class="config-lignes">
      <li><span>${c.t('config.base')}</span><span>${prix(c, d.base)}</span></li>
      <li><span>${c.t('config.etape1')}</span><span data-config-ligne="memoire">${prix(c, defauts.memoire.prix, '+')}</span></li>
      <li><span>${c.t('config.etape2')}</span><span data-config-ligne="stockage">${prix(c, defauts.stockage.prix, '+')}</span></li>
      <li><span>${c.t('config.etape3')}</span><span data-config-ligne="acces">${prix(c, defauts.acces.prix, '+')}</span></li>
    </ul>` : ''}
    <p class="config-total-libelle">${c.t('config.total')}</p>
    <p class="config-total" data-prix aria-live="polite">${c.l === 'fr' ? html`<span data-config-total>${total}</span> €` : html`€<span data-config-total>${total}</span>`}</p>
    <p class="config-unique">${c.t('config.unique')}</p>
    <div class="config-economie">
      <label for="${id}-mois">${c.t('config.economie')}</label>
      <span class="config-economie-champ"><input id="${id}-mois" type="number" inputmode="decimal" min="0" max="500" step="0.01" placeholder="0" data-config-mois><span>${c.t('config.parMois')}</span></span>
      <span class="config-raccourcis"><span>${c.t('config.raccourcis')}</span>${[5, 10, 20].map((n) => html`<button type="button" data-mois="${n}" aria-controls="${id}-mois">${prix(c, n)}</button>`)}</span>
      <p class="config-rentable" data-config-rentable aria-live="polite">${c.t('config.rentableVide')}</p>
      <p class="config-note">${c.t('config.rentableNote')}</p>
    </div>
    <a class="bouton bouton--ambre" href="${c.url('contact', 'demande')}" data-config-devis data-libelle="${c.libelle('contact')}" data-survol="magnetique">${c.t('config.devis')}</a>
    <p class="config-note">${c.t('config.illustratif')}</p>
  </div>
</div>`;
}

/* Carte de la côte, de Bandol à Menton, tracée au défilement ; l'atelier à Mandelieu-la-Napoule.
   Noms en HTML (jamais sous 12 px), placés en % du dessin, ancrés pour ne jamais se toucher. */
export function cote(c, { compacte = false } = {}) {
  const d = c.donnees.cote;
  const W = 1000, H = 720;
  const X = (lon) => Math.round((lon - 5.66) * 0.727 * 735);
  const Y = (lat) => Math.round((43.86 - lat) * 735 + 60);
  const pts = d.trace.map(([lo, la]) => [X(lo), Y(la)]);
  let chemin = `M${pts[0][0]} ${pts[0][1]}`;
  for (let i = 0; i < pts.length - 1; i++) {
    const p0 = pts[i - 1] || pts[i], p1 = pts[i], p2 = pts[i + 1], p3 = pts[i + 2] || p2;
    const c1 = [p1[0] + (p2[0] - p0[0]) / 6, p1[1] + (p2[1] - p0[1]) / 6], c2 = [p2[0] - (p3[0] - p1[0]) / 6, p2[1] - (p3[1] - p1[1]) / 6];
    chemin += ` C${c1[0].toFixed(1)} ${c1[1].toFixed(1)} ${c2[0].toFixed(1)} ${c2[1].toFixed(1)} ${p2[0]} ${p2[1]}`;
  }
  const terre = `${chemin} L${W} ${pts[pts.length - 1][1]} L${W} 0 L0 0 L0 ${pts[0][1]} Z`;
  return html`<figure class="cote${compacte ? ' cote--compacte' : ''}" data-cote data-effet="cote" data-visuel>
  <svg viewBox="0 0 ${W} ${H}" role="img" aria-label="${c.s('apropos.zone.carte')}">
    <path class="cote-terre" d="${terre}"/>
    <path class="cote-ligne" d="${chemin}" pathLength="1"/>
    ${d.villes.map((v, i) => html`<g class="cote-point${v.atelier ? ' cote-point--atelier' : ''}" style="--i:${i}">${v.atelier ? html`<circle class="cote-halo" cx="${X(v.lon)}" cy="${Y(v.lat)}" r="24"/>` : ''}<circle cx="${X(v.lon)}" cy="${Y(v.lat)}" r="${v.atelier ? 11 : 7}" data-repere/></g>`)}
  </svg>
  ${d.villes.map((v, i) => html`<span class="cote-nom cote-nom--${v.cote} cote-nom--${v.ancre}${v.secondaire ? ' cote-nom--secondaire' : ''}${v.atelier ? ' cote-nom--atelier' : ''}" style="--x:${(X(v.lon) / W * 100).toFixed(2)}%;--y:${(Y(v.lat) / H * 100).toFixed(2)}%;--i:${i}">${v.nom}${v.atelier ? html` · ${c.t('apropos.zone.atelier')}` : ''}</span>`)}
</figure>`;
}

/* Appel final, commun à toutes les pages : fond bleu nuit, village aux fenêtres allumées. */
export function appel(c) {
  return html`<section class="appel" id="appel">
  <div class="appel-grille conteneur">
    <div class="appel-texte">
      <h2 class="titre" data-anime="lignes">${c.tb('fin.titre')}</h2>
      <p data-anime>${c.t('fin.texte')}</p>
      <p class="appel-actions" data-anime>
        ${c.lien('contact', { ancre: 'demande', classe: 'bouton bouton--ambre', texte: c.t('fin.devis'), attrs: 'data-survol="magnetique"' })}
        <a class="bouton bouton--contour-clair" href="tel:${c.site.contact.telephoneLien}" data-survol="magnetique">${c.t('commun.appeler')} ${c.site.contact.telephone}</a>
      </p>
    </div>
    ${c.media({ nom: 'grok/appel-village', alt: c.s('fin.alt'), classe: 'appel-media', sizes: '(max-width: 760px) 100vw, 50vw', attrs: 'data-fx="zoom"' })}
  </div>
</section>`;
}

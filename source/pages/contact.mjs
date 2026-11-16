/* Contact : ouverture courte (terrasse), formulaire simulé prérempli par le configurateur, autres moyens, zone. */
import { html } from '../../outils/gabarit.mjs';
import { surtitre } from '../gabarits/composants.mjs';

export const page = { cle: 'contact', fichier: 'contact', imagePartage: 'grok/contact-ouverture-1280.webp' };

export default (c) => html`
<section class="ouv-courte" id="debut">
  <div class="conteneur ouv-courte-grille">
    <div>
      ${surtitre(c, 'contact.hero.surtitre', 'data-anime="gsap"')}
      <h1 class="ouv-titre" data-anime="gsap">${c.tb('contact.hero.titre')}</h1>
      <p class="ouv-intro" data-anime="gsap">${c.t('contact.hero.texte')}</p>
      <p class="ouv-actions" data-anime="gsap"><a class="bouton" href="#demande" data-action-principale data-sans-transition>${c.t('contact.form.titre')}</a><a class="bouton bouton--contour bouton--ordinateur" href="tel:${c.site.contact.telephoneLien}">${c.t('commun.appeler')} ${c.site.contact.telephone}</a></p>
      <p class="hero-info" data-info-cle data-anime="gsap"><span class="led" aria-hidden="true"></span>${c.t('contact.hero.info')} · ${c.t('commun.reponse')}</p>
    </div>
    ${c.media({ nom: 'grok/contact-ouverture', alt: c.s('contact.hero.alt'), cadrage: '50% 55%', priorite: true, classe: 'ouv-courte-media', sizes: '(max-width: 760px) 100vw, 44vw', attrs: 'data-fx="parallaxe" data-fx-force="6" data-iris-centre' })}
  </div>
</section>

<section class="demande bande bande--lin" id="demande">
  <div class="conteneur demande-grille">
    <form data-formulaire class="formulaire" action="#" novalidate>
      <h2 class="titre" data-anime="lignes">${c.t('contact.form.titre')}</h2>
      <div class="champs-deux">
        <div class="champ"><label for="f-nom">${c.t('contact.form.nom')}</label><input id="f-nom" name="nom" autocomplete="name" required></div>
        <div class="champ"><label for="f-email">${c.t('contact.form.email')}</label><input id="f-email" name="email" type="email" autocomplete="email" required></div>
      </div>
      <div class="champs-deux">
        <div class="champ"><label for="f-tel">${c.t('contact.form.tel')}</label><input id="f-tel" name="tel" type="tel" autocomplete="tel"></div>
        <div class="champ"><label for="f-formule">${c.t('contact.form.formule')}</label>
          <select id="f-formule" name="formule">
            <option value="domicile">${c.t('contact.form.formuleDomicile')}</option>
            <option value="envoi">${c.t('contact.form.formuleEnvoi')}</option>
            <option value="nsp" selected>${c.t('contact.form.formuleNsp')}</option>
          </select></div>
      </div>
      <div class="champ champ--config" data-champ-config><label for="f-config">${c.t('contact.form.config')}</label><input id="f-config" name="config" placeholder="${c.s('contact.form.configVide')}"><p class="champ-aide">${c.lien('boitier', { ancre: 'configurateur', classe: 'lien-fleche', texte: c.t('contact.form.configLien') })}</p></div>
      <div class="champ"><label for="f-message">${c.t('contact.form.message')}</label><textarea id="f-message" name="message" rows="5" required></textarea></div>
      <p class="mention-donnees">${c.t('contact.form.donnees')}</p>
      <button type="submit" class="bouton bouton--ambre">${c.t('contact.form.envoyer')}</button>
      <p class="config-note">${c.t('contact.form.simule')}</p>
      <p data-message-envoi role="status" tabindex="-1" hidden></p>
    </form>
    <aside class="infos">
      <h2 class="infos-titre">${c.t('contact.infos.titre')}</h2>
      <dl class="infos-liste" data-anime="cascade">
        <div><dt>${c.t('contact.infos.tel')}</dt><dd><a href="tel:${c.site.contact.telephoneLien}">${c.site.contact.telephone}</a></dd></div>
        <div><dt>${c.t('contact.infos.email')}</dt><dd class="email">${c.site.contact.email}</dd></div>
        <div><dt>${c.t('contact.infos.horaires')}</dt><dd>${c.t('commun.horaires')}<br>${c.t('commun.reponse')}</dd></div>
        <div><dt>${c.t('contact.infos.adresse')}</dt><dd>${c.site.contact.adresse}</dd></div>
        <div><dt>${c.t('contact.infos.zone')}</dt><dd>${c.t('apropos.zone.france')}</dd></div>
      </dl>
      <div class="apres">
        <h3 class="apres-titre">${c.t('contact.apres.titre')}</h3>
        <ol class="apres-liste" data-anime="cascade">${c.a('contact.apres.items').map((x, i) => html`<li><span class="etape-num">${i + 1}</span><div><strong>${x.t}</strong><p>${x.d}</p></div></li>`)}</ol>
      </div>
    </aside>
  </div>
</section>
`;

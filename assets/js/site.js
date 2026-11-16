/* Effets propres à MTCloud (le socle gère ouverture, voile, en-tête, menu, apparitions et bibliothèque d'effets).
   Effets du plan : souvenirs, tri-photos, synchro, boitier, socle-boitier, configurateur, cote, tele. */
import { demarrer, boucle, etat, versObjet, quand } from './socle/index.js?v=2';

const gsap = window.gsap;
const ST = window.ScrollTrigger;
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const retour = () => document.documentElement.dataset.arrivee === 'retour';
const fr = (document.documentElement.lang || 'fr').startsWith('fr');
const SOUVENIRS = ['plage', 'anniversaire', 'voilier', 'chien', 'village', 'repas'].map((n) => `/assets/images/grok/souvenir-${n}-480.webp`);

/* Observe l'entrée et la sortie d'un élément (sans lecture de mise en page pendant le défilement). */
function surVisible(el, fn, marge = '0px') {
  const io = new IntersectionObserver((es) => es.forEach((e) => fn(e.isIntersecting)), { rootMargin: marge });
  io.observe(el);
  return io;
}

/* ---------- Premier écran : arrivée du titre et des textes ---------- */
function arriveePremierEcran(delai = 0) {
  const tl = gsap.timeline({ delay: delai, defaults: { ease: 'power3.out' } });
  const elts = $$('main > section:first-of-type [data-anime="gsap"]');
  const h1 = elts.find((e) => e.tagName === 'H1');
  elts.forEach((el, i) => {
    if (el === h1 && window.SplitText) {
      gsap.set(el, { opacity: 1 });
      const s = new window.SplitText(el, { type: 'lines', linesClass: 'ligne-arrivee', reduceWhiteSpace: false });
      tl.fromTo(s.lines, { yPercent: 45, opacity: 0 }, { yPercent: 0, opacity: 1, duration: 0.8, stagger: 0.09, onComplete: () => s.revert() }, i * 0.07);
    } else {
      tl.fromTo(el, { y: 22, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7 }, i * 0.07);
    }
  });
  return tl;
}

/* ---------- Intro : des souvenirs rentrent dans le bouclier du logo, qui glisse jusqu'à l'objet de la page ---------- */
function introTuiles(tl) {
  const panneau = $('[data-ouverture]');
  if (!panneau) return;
  const vw = innerWidth, vh = innerHeight, r = Math.max(vw, vh) * 0.62;
  SOUVENIRS.forEach((src, i) => {
    const t = document.createElement('span');
    t.className = 'intro-tuile';
    t.style.backgroundImage = `url(${src})`;
    panneau.appendChild(t);
    const a = (i / SOUVENIRS.length) * Math.PI * 2 + 0.4;
    tl.fromTo(t, { x: Math.cos(a) * r, y: Math.sin(a) * r * 0.7, rotation: i % 2 ? -18 : 14, opacity: 0, scale: 1 },
      { keyframes: [{ opacity: 1, duration: 0.12 }, { x: 0, y: 0, rotation: 0, scale: 0.25, duration: 0.5, ease: 'power2.in' }, { opacity: 0, duration: 0.08 }] }, 0.05 + i * 0.06);
  });
}

/* ---------- souvenirs : les vignettes tombent du ciel de la photo dans le boîtier, la LED s'allume ---------- */
function souvenirs() {
  const v = $('.hero-visuel');
  if (!v || !gsap) return;
  const tuiles = $$('.tuile', v), boite = $('.boitier--hero', v), toast = $('.hero-toast', v), corps = boite && $('.boitier-corps', boite);
  if (!boite) return;
  let tl = null, visible = true, flottement = null;
  const construire = () => {
    if (tl) tl.kill();
    const R = v.getBoundingClientRect(), B = boite.getBoundingClientRect();
    const bx = B.left - R.left + B.width / 2, by = B.top - R.top + B.height * 0.42;
    tl = gsap.timeline({ paused: true, onComplete: () => { tl.__fini = true; } });
    tuiles.forEach((t, i) => {
      const w = t.offsetWidth || 64, h = t.offsetHeight || 85;
      const x0 = R.width * (0.3 + 0.62 * (((i * 41) % 100) / 100)) - w / 2;
      const xm = x0 + (bx - x0) * 0.35 + (i % 2 ? 26 : -26);
      tl.fromTo(t, { x: x0, y: -h - 20, rotation: i % 2 ? -14 : 12, opacity: 0, scale: 1 }, {
        keyframes: [
          { x: xm, y: R.height * 0.28, rotation: i % 2 ? 7 : -9, opacity: 1, duration: 1.1, ease: 'sine.out' },
          { x: bx - w / 2, y: by - h / 2, scale: 0.28, rotation: 0, duration: 0.75, ease: 'power2.in' },
          { opacity: 0, duration: 0.1 },
        ],
      }, i * 0.38);
    });
    const fin = (tuiles.length - 1) * 0.38 + 1.95;
    tl.call(() => boite.classList.add('allume'), null, fin);
    if (toast) tl.fromTo(toast, { y: 12, opacity: 0 }, { y: 0, opacity: 1, duration: 0.45, ease: 'back.out(1.6)' }, fin + 0.05)
      .to(toast, { y: -6, opacity: 0, duration: 0.4 }, fin + 2.4);
  };
  const lancer = () => {
    construire();
    if (visible) tl.play();
    if (corps && !flottement) flottement = gsap.to(corps, { y: -7, duration: 2.2, ease: 'sine.inOut', yoyo: true, repeat: 5 });
  };
  surVisible(v, (vu) => {
    visible = vu;
    if (!tl) return;
    if (vu) { if (!tl.__fini) tl.play(); } else tl.pause();
  });
  let attente = 0;
  window.addEventListener('resize', () => { clearTimeout(attente); attente = setTimeout(() => { if (tl) { const fini = tl.__fini; construire(); if (fini) { tl.progress(1); tl.__fini = true; } else if (visible) tl.play(); } }, 250); });
  if (retour()) { boite.classList.add('allume'); construire(); tl.progress(1); tl.__fini = true; return; }
  quand('pret', () => setTimeout(lancer, 300));
}

/* ---------- tri-photos : la grille du téléphone se range par personnes, lieux ou dates (FLIP) ---------- */
function triPhotos() {
  $$('[data-tri]').forEach((tel) => {
    const boutons = $$('[data-tri-choix]', tel), photos = $$('.tel-photo', tel), compte = $('[data-tri-compte]', tel);
    let auto = null, touche = false;
    const trier = (choix, anime = true) => {
      const avant = new Map(photos.map((p) => [p, p.getBoundingClientRect()]));
      boutons.forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.triChoix === choix)));
      const garde = (p) => choix === 'tout' || p.dataset.tags.split(' ').includes(choix);
      photos.forEach((p) => p.classList.toggle('hors-tri', !garde(p)));
      if (compte) compte.textContent = compte.dataset.triCompte.replace('{n}', String(photos.filter(garde).length));
      if (!anime || !gsap) return;
      photos.filter((p) => !p.classList.contains('hors-tri')).forEach((p, i) => {
        const a = avant.get(p), b = p.getBoundingClientRect();
        if (!a.width) { gsap.fromTo(p, { scale: 0.6, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.45, delay: i * 0.03, ease: 'back.out(1.5)' }); return; }
        gsap.fromTo(p, { x: a.left - b.left, y: a.top - b.top, scale: 1 }, { x: 0, y: 0, duration: 0.6, ease: 'power3.inOut', delay: i * 0.02 });
      });
    };
    boutons.forEach((b) => b.addEventListener('click', () => { touche = true; clearTimeout(auto); trier(b.dataset.triChoix); }));
    /* Démonstration toute seule, une fois, quand le téléphone arrive à l'écran (moins de 5 s). */
    const sequence = ['lieux', 'personnes', 'tout'];
    let joue = false;
    surVisible(tel, (vu) => {
      if (!vu || joue || touche || retour()) return;
      joue = true;
      sequence.forEach((choix, i) => { auto = setTimeout(() => { if (!touche) trier(choix); }, 700 + i * 1500); });
    }, '-20% 0px');
  });
}

/* ---------- synchro : chaque fichier passe de l'ordinateur au téléphone, au défilement ---------- */
function synchro() {
  const s = $('[data-synchro]');
  if (!s || !ST) return;
  const lignes = $$('.synchro-fichier', s), ordi = $$('.ordi-ecran .synchro-icone', s), tel = $$('.mini-tel-ecran .synchro-icone', s), etat = $('[data-synchro-etat]', s);
  let max = retour() ? 1 : 0;
  const poser = (p) => {
    lignes.forEach((l, i) => {
      const local = Math.min(1, Math.max(0, (p - i * 0.17) / 0.32));
      l.style.setProperty('--avance', local.toFixed(3));
      l.style.setProperty('--ok', local >= 1 ? '1' : '0');
      if (ordi[i]) ordi[i].style.opacity = String(1 - local * 0.65);
      if (tel[i]) tel[i].style.opacity = String(local >= 1 ? 1 : 0.12);
    });
    if (etat) etat.textContent = p >= 0.17 * (lignes.length - 1) + 0.32 ? etat.dataset.fini : etat.dataset.enCours;
  };
  poser(max);
  const suivre = (st) => { if (st.progress > max) { max = st.progress; poser(max); } };
  ST.create({ trigger: s, start: 'top 85%', end: 'bottom 45%', onUpdate: suivre, onRefresh: suivre });
}

/* ---------- boitier : le boîtier tourne au défilement ---------- */
function boitierTourne() {
  $$('[data-effet="boitier"]').forEach((b) => {
    const corps = $('.boitier-corps', b);
    if (!corps || !gsap || !ST) return;
    b.classList.add('allume');
    gsap.fromTo(corps, { rotationX: -30, rotationY: -70 }, { rotationX: -18, rotationY: 28, ease: 'none',
      scrollTrigger: { trigger: b.closest('section') || b, start: 'top bottom', end: 'bottom top', scrub: 0.6, invalidateOnRefresh: true } });
  });
}

/* ---------- socle-boitier : le boîtier de la page Le boîtier respire et tourne doucement ---------- */
function socleBoitier() {
  const v = $('[data-effet="socle-boitier"]');
  if (!v) return;
  const boite = $('.boitier', v), corps = boite && $('.boitier-corps', boite);
  if (!corps) return;
  const demarrer = () => {
    boite.classList.add('allume');
    boucle(v, (dt, t) => {
      const ry = -34 + Math.sin(t * 0.5) * 16, ry2 = -24 + Math.sin(t * 0.35) * 4, y = Math.sin(t * 0.9) * 6;
      corps.style.transform = `translateY(${y.toFixed(2)}px) rotateX(${ry2.toFixed(2)}deg) rotateY(${ry.toFixed(2)}deg)`;
    });
  };
  if (retour()) demarrer(); else quand('pret', demarrer);
}

/* ---------- configurateur : total, jauge, lignes, rentabilité, lien vers le devis ---------- */
function configurateurs() {
  $$('[data-config]').forEach((cfg) => {
    const base = +cfg.dataset.base, noms = JSON.parse(cfg.dataset.noms || '{}');
    const total = $('[data-config-total]', cfg), jauge = $('[data-config-jauge]', cfg), mois = $('[data-config-mois]', cfg);
    const segments = $$('[data-segment]', cfg), mini = $('[data-config-mini]', cfg), raccourcis = $$('[data-mois]', cfg);
    const rentable = $('[data-config-rentable]', cfg), devis = $('[data-config-devis]', cfg);
    const prix = (n, signe = '') => (fr ? `${signe}${n} €` : `${signe}€${n}`);
    const choix = (nom) => cfg.querySelector(`input[name$="-${nom}"]:checked`);
    let valeur = +total.textContent;
    const calculer = (anime = true) => {
      const m = choix('memoire'), s = choix('stockage'), a = choix('acces');
      const pm = m ? +m.dataset.prix : +cfg.dataset.memoireDefaut, ps = +s.dataset.prix, pa = +a.dataset.prix;
      const t = base + pm + ps + pa;
      if (anime && gsap) gsap.to({ v: valeur }, { v: t, duration: 0.6, ease: 'power2.out', onUpdate() { total.textContent = Math.round(this.targets()[0].v); } });
      else total.textContent = t;
      valeur = t;
      const rang = segments.findIndex((g) => g.dataset.segment === s.value);
      segments.forEach((g, i) => g.classList.toggle('plein', i <= rang));
      if (mini) mini.textContent = prix(t);
      raccourcis.forEach((b) => b.setAttribute('aria-pressed', String(+b.dataset.mois === parseFloat(String(mois.value).replace(',', '.')))));
      const ligne = (n, p) => { const el = cfg.querySelector(`[data-config-ligne="${n}"]`); if (el) el.textContent = prix(p, '+'); };
      ligne('memoire', pm); ligne('stockage', ps); ligne('acces', pa);
      const mensuel = parseFloat(String(mois.value).replace(',', '.'));
      if (mensuel > 0) rentable.textContent = cfg.dataset.texteRentable.replace('{mois}', String(Math.ceil(t / mensuel)));
      else rentable.textContent = cfg.dataset.texteVide;
      const memoireNom = m ? noms.memoire[m.value] : noms.memoire['8'];
      const resume = [memoireNom, noms.stockage[s.value], noms.acces[a.value], prix(t)].join(' · ');
      const url = new URL(devis.getAttribute('href'), location.href);
      url.searchParams.set('config', resume);
      devis.setAttribute('href', url.pathname + url.search + url.hash);
    };
    cfg.addEventListener('change', () => calculer());
    mois.addEventListener('input', () => calculer(false));
    raccourcis.forEach((b) => b.addEventListener('click', () => { mois.value = b.dataset.mois; calculer(false); }));
    calculer(false);
    /* À l'arrivée à l'écran : les segments de la jauge montent et le total se compte depuis le prix de base. */
    if (!retour() && gsap && jauge) {
      const fin = valeur;
      const barres = segments.map((g) => $('i', g));
      gsap.set(barres, { scaleY: 0 });
      let fait = false;
      surVisible(cfg, (vu) => {
        if (!vu || fait) return;
        fait = true;
        gsap.to(barres, { scaleY: 1, duration: 0.7, stagger: 0.12, ease: 'back.out(1.6)', clearProps: 'transform' });
        gsap.fromTo({ v: base }, { v: base }, { v: fin, duration: 1.1, ease: 'power2.out', onUpdate() { total.textContent = Math.round(this.targets()[0].v); }, onComplete: () => { total.textContent = valeur; } });
      }, '-15% 0px');
    }
  });
  /* Page Contact : configuration reçue par l'adresse. */
  const champ = $('[data-champ-config]');
  if (champ) { const i = $('input', champ); if (i && i.value) champ.classList.add('rempli'); }
}

/* ---------- cote : la côte se dessine de Bandol à Menton, les villes s'allument au passage ---------- */
function cote() {
  $$('[data-cote]').forEach((f) => {
    const ligne = $('.cote-ligne', f), noms = $$('.cote-nom', f), points = $$('.cote-point', f);
    const n = noms.length;
    let max = 0;
    const poser = (p) => {
      ligne.style.setProperty('--trace', (1 - p).toFixed(4));
      noms.forEach((el, i) => { if (p >= (i + 0.3) / n) { el.classList.add('vu'); points[i] && points[i].classList.add('vu'); } });
    };
    if (retour() || !ST) { poser(1); return; }
    poser(0);
    const suivre = (st) => { if (st.progress > max) { max = st.progress; poser(max); } };
    ST.create({ trigger: f, start: 'top 85%', end: 'bottom 55%', onUpdate: suivre, onRefresh: suivre, onLeave: () => { max = 1; poser(1); } });
  });
}

/* ---------- tele : la visionneuse fait défiler les souvenirs, avec un bouton pause ---------- */
function tele() {
  const t = $('[data-tele]');
  if (!t) return;
  const diapos = $$('.tele-diapo', t), legende = $('[data-tele-legende]', t), bouton = $('[data-tele-pause]');
  let i = 0, cumul = 0, pause = false;
  boucle(t, (dt) => {
    if (pause) return;
    cumul += dt;
    if (cumul < 3.6) return;
    cumul = 0;
    diapos[i].classList.remove('actif');
    i = (i + 1) % diapos.length;
    diapos[i].classList.add('actif');
    if (legende && diapos[i].dataset.legende) legende.textContent = diapos[i].dataset.legende;
  });
  if (bouton) bouton.addEventListener('click', () => {
    pause = !pause;
    t.classList.toggle('en-pause', pause);
    bouton.setAttribute('aria-pressed', String(pause));
    bouton.textContent = pause ? bouton.dataset.libelleLecture : bouton.dataset.libellePause;
  });
}

/* ---------- ecrans : la même photo s'affiche sur le téléphone, l'ordinateur puis la télé ; profondeur au défilement ---------- */
function ecrans() {
  const sc = $('[data-effet="ecrans"]');
  if (!sc || !gsap) return;
  const tel = $('[data-se="tel"]', sc), ordi = $('[data-se="ordi"]', sc), tele = $('[data-se="tele"]', sc);
  const allumer = () => {
    sc.classList.add('allume');
    const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });
    tl.fromTo($$('.se-grille .se-photo', tel), { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, duration: 0.4, stagger: 0.06 })
      .fromTo($$('.se-grille .se-photo', ordi), { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, duration: 0.4, stagger: 0.04 }, 0.35)
      .fromTo($('.se-photo.actif', tele), { opacity: 0 }, { opacity: 1, duration: 0.8, clearProps: 'opacity' }, 0.7);
    /* La télé fait défiler trois souvenirs, puis s'arrête (moins de 5 s). */
    const diapos = $$('.se-tele-ecran .se-photo', tele);
    diapos.slice(1).forEach((d, i) => tl.call(() => { diapos.forEach((x) => x.classList.toggle('actif', x === d)); }, null, 2.2 + i * 1.4));
  };
  if (retour()) { sc.classList.add('allume'); return; }
  quand('pret', allumer);
  if (ST) [[tele, -18], [ordi, 26], [tel, 46]].forEach(([el, y]) => gsap.to(el, { y, ease: 'none', scrollTrigger: { trigger: sc, start: 'top top', end: 'bottom top', scrub: 0.6 } }));
}

/* ---------- Démonstration du lien de partage ---------- */
function lienDemo() {
  $$('[data-lien-demo]').forEach((d) => {
    const b = $('[data-lien-creer]', d);
    if (b) b.addEventListener('click', () => {
      d.classList.add('cree');
      const r = $('[data-lien-resultat]', d);
      r.hidden = false;
      if (gsap) gsap.fromTo(r, { y: 8, opacity: 0 }, { y: 0, opacity: 1, duration: 0.4, ease: 'back.out(2)' });
    });
  });
}

demarrer({
  preparer() {
    souvenirs();
    triPhotos();
    synchro();
    boitierTourne();
    socleBoitier();
    configurateurs();
    cote();
    tele();
    ecrans();
    lienDemo();
  },
  jouer() {
    if (!gsap) return null;
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    introTuiles(tl);
    tl.fromTo('.ouverture-trait', { scaleX: 0 }, { scaleX: 1, duration: 0.45 }, 0.25)
      .to('.ouverture-nom, .ouverture-ligne, .ouverture-trait', { opacity: 0, duration: 0.22 }, 0.78);
    versObjet(tl, { a: 0.85 });
    tl.add(arriveePremierEcran(), 1.38);
    return tl;
  },
  etatFinal() {
    if (!gsap) return;
    gsap.set('[data-anime="gsap"]', { clearProps: 'transform,opacity' });
    $$('.boitier').forEach((b) => b.classList.add('allume'));
  },
  arrivee() {
    if (!gsap) return;
    arriveePremierEcran(0.12);
  },
});

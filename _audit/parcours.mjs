/* Parcours propres à MTCloud : le configurateur (total vérifié par le calcul, rentabilité, lien vers le devis
   prérempli), le tri de la grille de photos, la démonstration du lien de partage, la pause de la visionneuse. */
export default async function ({ contexte, attendrePret, attendre, BASE, R, T }) {
  const { ctx, page } = await contexte({ taille: T('1366×768') });
  try {
    /* Configurateur complet : 16 Go, 1 To, accès partout = 150 + 115 + 110 + 50 = 425. */
    await page.goto(BASE + '/boitier', { waitUntil: 'load' });
    await attendrePret(page);
    await page.evaluate(() => document.querySelector('#configurateur').scrollIntoView());
    await attendre(1600);
    for (const [nom, val] of [['memoire', '16'], ['stockage', '1000'], ['acces', 'partout']]) {
      await page.locator(`input[name="cfg-boitier-${nom}"][value="${val}"]`).check({ force: true });
    }
    await page.fill('#cfg-boitier-mois', '10');
    await attendre(900);
    const r = await page.evaluate(() => {
      const cfg = document.querySelector('[data-config]');
      const somme = +cfg.dataset.base + [...cfg.querySelectorAll('input[type="radio"]:checked')].reduce((a, i) => a + +i.dataset.prix, 0);
      return { somme, affiche: +cfg.querySelector('[data-config-total]').textContent, rentable: cfg.querySelector('[data-config-rentable]').textContent, devis: cfg.querySelector('[data-config-devis]').getAttribute('href') };
    });
    if (r.somme !== 425 || r.affiche !== 425) R.echec('configurateur', `total affiché ${r.affiche}, calculé ${r.somme}, attendu 425`, { page: '/boitier', taille: '1366×768' });
    if (!/43/.test(r.rentable)) R.echec('configurateur', `rentabilité attendue en 43 mois (425 / 10) : « ${r.rentable} »`, { page: '/boitier', taille: '1366×768' });
    /* Le devis ouvre la page Contact avec la configuration remplie. */
    await page.goto(BASE + r.devis, { waitUntil: 'load' });
    await attendrePret(page);
    const config = await page.inputValue('#f-config');
    if (!/425/.test(config) || !/1 To/.test(config)) R.echec('configurateur', `configuration non reprise dans le formulaire : « ${config} »`, { page: '/contact', taille: '1366×768' });
  } finally { await ctx.close(); }

  const t = await contexte({ taille: T('390×844') });
  try {
    /* Tri des photos : « Lieux » ne garde que les photos marquées lieux. */
    await t.page.goto(BASE + '/', { waitUntil: 'load' });
    await attendrePret(t.page);
    await t.page.evaluate(() => document.querySelector('#photos').scrollIntoView());
    await attendre(6000);
    await t.page.locator('[data-tri-choix="lieux"]').first().click();
    await attendre(900);
    const tri = await t.page.evaluate(() => [...document.querySelectorAll('.tel-photo')].every((p) => p.classList.contains('hors-tri') === !p.dataset.tags.split(' ').includes('lieux')));
    if (!tri) R.echec('tri des photos', 'le tri « Lieux » ne garde pas exactement les photos de lieux', { page: '/', taille: '390×844' });
    /* Visionneuse : le bouton pause arrête le défilement. */
    await t.page.goto(BASE + '/services', { waitUntil: 'load' });
    await attendrePret(t.page);
    await t.page.evaluate(() => document.querySelector('#tele').scrollIntoView());
    await attendre(500);
    await t.page.locator('[data-tele-pause]').click();
    const avant = await t.page.evaluate(() => document.querySelector('.tele-diapo.actif').src);
    await attendre(4500);
    const apres = await t.page.evaluate(() => document.querySelector('.tele-diapo.actif').src);
    if (avant !== apres) R.echec('visionneuse', 'la pause n’arrête pas le défilement des souvenirs', { page: '/services', taille: '390×844' });
  } finally { await t.ctx.close(); }
}

# Rapport d’audit

Projet : `mtcloud-maquette` · 16/11/2026 18:35:47 · 22 min · 11 page(s) · audit standard

## Résumé

- Statut : **29 échec(s)**
- Passe : `20261116-171344-standard` · version ?v=1
- Échecs : **29**
- À regarder : **54**
- Non lancé : **1**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), grille wouahou (5), mesures (121), balayage (10), films d’ouverture (10), films de transition (10), bords de l’écran (6), intro accélérable et passable (7), menu (1), clavier (11), liens et boutons (11), liens profonds (10), liens vers la page en cours (10), changements de hauteur (5), parcours du projet (1), fluidité (10), défilement selon l’appareil (5), mouvement (10), effets du plan (8), souris immobile (4), vitesse (10), captures (1)

## Grille wouahou

| Point | État | Détail |
|---|---|---|
| 1. L’effet signature se manipule | ✓ présent | accueil |
| 2. L’intro devient la page | ✓ présent | objet d’ouverture sur 5 page(s), versObjet dans l’intro |
| 3. La transition reprend le motif | ✓ présent | voile en iris |
| 4. Quelque chose relie les sections et les pages | ✗ absent | sur aucune page |
| 5. Un titre fait l’événement sur chaque page | ✗ absent | sur aucune page |
| 6. La scène est un geste du métier | · sans objet | aucune scène épinglée marquée ni galerie générique |
| 7. L’action principale a un retour physique | ✓ présent | sur /boitier, / |

Le script vérifie les marques (`data-grille`, `data-iris-centre`, forme du voile, `versObjet`) ; la force et la justesse de chaque point se jugent sur les captures et les films.

## Passes de cette version (?v=1)

Chaque passe garde son rapport dans `_audit/passes/` : une relance ciblée ne fait pas disparaître la preuve d’une passe plus large.

| Passe | Niveau | Pages | Étapes | Échecs | À regarder | Non lancé | Statut |
|---|---|---|---|---:|---:|---:|---|
| 20261116-162759-rapide-cible | rapide | /,/contact | toutes | 30 | 20 | 1 | échecs |
| 20261116-163626-rapide-cible-partiel | rapide | /,/contact | mesures | 1 | 8 | 0 | échecs |
| **20261116-171344-standard** (celle-ci) | standard | toutes | toutes | 29 | 54 | 1 | échecs |

## Échecs

### textes qui se chevauchent (8)

- **textes qui se chevauchent** — `/404` — section#debut > div.conteneur.ouv-courte-grille > div > p.introuvable-code:nth-of-type(1) « 404 » — avec section#debut > div.conteneur.ouv-courte-grille > div > h1.ouv-titre « Cette page s'est égarée. Pas vos photos. » _(320×568 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **textes qui se chevauchent** — `/boitier` — section#debut > div.conteneur.ouv-prix-grille > div.ouv-prix-texte:nth-of-type(1) > p.ouv-prix-chiffre:nth-of-type(2) « 275 € » — avec section#debut > div.conteneur.ouv-prix-grille > div.ouv-prix-texte:nth-of-type(1) > h1.ouv-titre « Une fois. Pas par mois. » _(768×1024 normal, 390×844 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **textes qui se chevauchent** — `/boitier` — section#debut > div.conteneur.ouv-prix-grille > div.ouv-prix-texte:nth-of-type(1) > p.ouv-prix-chiffre:nth-of-type(2) « 275 € » — avec div.conteneur.ouv-prix-grille > div.ouv-prix-texte:nth-of-type(1) > h1.ouv-titre > em « Pas par mois. » _(768×1024 normal, 390×844 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **textes qui se chevauchent** — `/boitier` — section#debut > div.conteneur.ouv-prix-grille > div.ouv-prix-texte:nth-of-type(1) > p.surtitre:nth-of-type(1) « Le boîtier » — avec section#debut > div.conteneur.ouv-prix-grille > div.ouv-prix-texte:nth-of-type(1) > p.ouv-prix-chiffre:nth-of-type(2) « 275 € » _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **textes qui se chevauchent** — `/en/boitier` — section#debut > div.conteneur.ouv-prix-grille > div.ouv-prix-texte:nth-of-type(1) > p.ouv-prix-chiffre:nth-of-type(2) « €275 » — avec section#debut > div.conteneur.ouv-prix-grille > div.ouv-prix-texte:nth-of-type(1) > h1.ouv-titre « Once. Not per month. » _(390×844 normal, 768×1024 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **textes qui se chevauchent** — `/en/boitier` — section#debut > div.conteneur.ouv-prix-grille > div.ouv-prix-texte:nth-of-type(1) > p.ouv-prix-chiffre:nth-of-type(2) « €275 » — avec div.conteneur.ouv-prix-grille > div.ouv-prix-texte:nth-of-type(1) > h1.ouv-titre > em « Not per month. » _(390×844 normal, 768×1024 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **textes qui se chevauchent** — `/en/boitier` — div.pose-cadre.conteneur > div.pose-image:nth-of-type(1) > figure.media.pose-media > figcaption.mention-ia « AI-generated illustration » — avec section#pose > div.pose-cadre.conteneur > div.pose-texte:nth-of-type(2) > p.surtitre:nth-of-type(1) « Where it goes » _(320×568 normal, 320×568 sansJs)_
- **textes qui se chevauchent** — `/en/boitier` — section#debut > div.conteneur.ouv-prix-grille > div.ouv-prix-texte:nth-of-type(1) > p.surtitre:nth-of-type(1) « The box » — avec section#debut > div.conteneur.ouv-prix-grille > div.ouv-prix-texte:nth-of-type(1) > p.ouv-prix-chiffre:nth-of-type(2) « €275 » _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_

### premier écran : bouton principal hors de l’écran (2)

- **premier écran : bouton principal hors de l’écran** — `/a-propos` — section#debut > div.ouv-scindee-texte > p.ouv-actions:nth-of-type(3) > a.bouton « Me contacter » _(320×568 normal, 320×568 sansJs)_
- **premier écran : bouton principal hors de l’écran** — `/en/a-propos` — section#debut > div.ouv-scindee-texte > p.ouv-actions:nth-of-type(3) > a.bouton « Contact me » _(320×568 normal, 320×568 sansJs)_

### premier écran : information clé hors de l’écran (4)

- **premier écran : information clé hors de l’écran** — `/a-propos` — section#debut > div.ouv-scindee-texte > p.ouv-actions:nth-of-type(3) > span.hero-info « Depuis 2009 dans l'informatique » _(320×568 normal, 320×568 sansJs)_
- **premier écran : information clé hors de l’écran** — `/boitier` — div.conteneur.ouv-prix-grille > div.ouv-prix-texte:nth-of-type(1) > p.ouv-actions:nth-of-type(4) > span.hero-info « Devis personnalisé, pas d'achat en ligne » _(320×568 normal, 320×568 sansJs)_
- **premier écran : information clé hors de l’écran** — `/en/a-propos` — section#debut > div.ouv-scindee-texte > p.ouv-actions:nth-of-type(3) > span.hero-info « Working in IT since 2009 » _(320×568 normal, 320×568 sansJs)_
- **premier écran : information clé hors de l’écran** — `/en/boitier` — div.conteneur.ouv-prix-grille > div.ouv-prix-texte:nth-of-type(1) > p.ouv-actions:nth-of-type(4) > span.hero-info « Personalised quote, no online purchase » _(320×568 normal, 320×568 sansJs)_

### texte coupé (2)

- **texte coupé** — `/a-propos` — section#zone > div.conteneur.zone-grille > figure.cote > span.cote-nom.cote-nom--bas:nth-of-type(9) « Monaco » — coupé par section#zone > div.conteneur.zone-grille > figure.cote « Bandol Toulon Hyères Saint-Tropez Mandelieu · Atel » _(768×1024 normal)_
- **texte coupé** — `/en/a-propos` — section#zone > div.conteneur.zone-grille > figure.cote > span.cote-nom.cote-nom--bas:nth-of-type(9) « Monaco » — coupé par section#zone > div.conteneur.zone-grille > figure.cote « Bandol Toulon Hyères Saint-Tropez Mandelieu · Work » _(768×1024 normal)_

### élément recouvert (8)

- **élément recouvert** — `/a-propos` — figure.cote > svg > g.cote-point:nth-of-type(2) > circle — par section#zone > div.conteneur.zone-grille > figure.cote > span.cote-nom.cote-nom--bas:nth-of-type(1) « Bandol » _(768×1024 normal)_
- **élément recouvert** — `/a-propos` — figure.cote > svg > g.cote-point.cote-point--atelier:nth-of-type(5) > circle:nth-of-type(2) — par section#zone > div.conteneur.zone-grille > figure.cote > span.cote-nom.cote-nom--bas:nth-of-type(6) « Cannes » _(1366×768 normal, 1920×1080 normal)_
- **élément recouvert** — `/boitier` — section#debut > div.conteneur.ouv-prix-grille > div.ouv-prix-texte:nth-of-type(1) > h1.ouv-titre « Une fois. Pas par mois. » — par section#debut > div.conteneur.ouv-prix-grille > div.ouv-prix-texte:nth-of-type(1) > p.ouv-prix-chiffre:nth-of-type(2) « 275 € » _(768×1024 normal, 390×844 normal, 1366×768 normal)_
- **élément recouvert** — `/contact` — figure.cote.cote--compacte > svg > g.cote-point:nth-of-type(2) > circle — par div.conteneur.demande-grille > aside.infos > figure.cote.cote--compacte > span.cote-nom.cote-nom--bas:nth-of-type(1) « Bandol » _(1366×768 normal, 1920×1080 normal)_
- **élément recouvert** — `/en/a-propos` — figure.cote > svg > g.cote-point:nth-of-type(2) > circle — par section#zone > div.conteneur.zone-grille > figure.cote > span.cote-nom.cote-nom--bas:nth-of-type(1) « Bandol » _(768×1024 normal)_
- **élément recouvert** — `/en/a-propos` — figure.cote > svg > g.cote-point.cote-point--atelier:nth-of-type(5) > circle:nth-of-type(2) — par section#zone > div.conteneur.zone-grille > figure.cote > span.cote-nom.cote-nom--bas:nth-of-type(6) « Cannes » _(1366×768 normal, 1920×1080 normal)_
- **élément recouvert** — `/en/boitier` — section#debut > div.conteneur.ouv-prix-grille > div.ouv-prix-texte:nth-of-type(1) > h1.ouv-titre « Once. Not per month. » — par section#debut > div.conteneur.ouv-prix-grille > div.ouv-prix-texte:nth-of-type(1) > p.ouv-prix-chiffre:nth-of-type(2) « €275 » _(390×844 normal, 768×1024 normal, 1366×768 normal, 1920×1080 normal)_
- **élément recouvert** — `/en/contact` — figure.cote.cote--compacte > svg > g.cote-point:nth-of-type(2) > circle — par div.conteneur.demande-grille > aside.infos > figure.cote.cote--compacte > span.cote-nom.cote-nom--bas:nth-of-type(1) « Bandol » _(1366×768 normal, 1920×1080 normal)_

### accessibilité (axe) : aria-valid-attr-value (3)

- **accessibilité (axe) : aria-valid-attr-value** — `/en/services` — .actif ; img[data-legende="Birthday · May"] ; img[data-legende="At sea"] — ARIA attributes must conform to valid values _(390×844 normal)_
- **accessibilité (axe) : aria-valid-attr-value** — `/en/services` — img[data-legende="Grandma"] ; img[data-legende="Birthday · May"] ; img[data-legende="At sea"] — ARIA attributes must conform to valid values _(1366×768 normal)_
- **accessibilité (axe) : aria-valid-attr-value** — `/services` — img[data-legende="Mamie"] ; img[data-legende="Anniversaire · mai"] ; img[data-legende="En mer"] — ARIA attributes must conform to valid values _(390×844 normal, 1366×768 normal)_

### accessibilité (axe) : color-contrast (2)

- **accessibilité (axe) : color-contrast** — `/en/services` — code ; .lien-demo-resultat > span — Elements must meet minimum color contrast ratio thresholds _(390×844 normal, 1366×768 normal)_
- **accessibilité (axe) : color-contrast** — `/services` — code ; .lien-demo-resultat > span — Elements must meet minimum color contrast ratio thresholds _(390×844 normal, 1366×768 normal)_

## À regarder

### « à compléter » visible (2)

- **« à compléter » visible** — `contact.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)
- **« à compléter » visible** — `en/contact.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)

### grille : rien ne relie les sections (point 4) (1)

- **grille : rien ne relie les sections (point 4)** — sur aucune page : élément du métier qui relie les sections et les pages (fil dans la marge, objet unique qui change, lumière qui passe, carte, folio, frise), marqué data-grille="fil"

### grille : aucun titre ne fait l’événement (point 5) (1)

- **grille : aucun titre ne fait l’événement (point 5)** — sur aucune page : titre fabriqué par le métier, axe de police animé ou titre joué avec l’image (modules axes-au-defilement, titre-cousu, texte-grave-en-direct), marqué data-grille="typo"

### grille : objet d’ouverture hors du premier écran (1)

- **grille : objet d’ouverture hors du premier écran** — `/` — 188 × 0 px visibles : l’intro et le voile s’ouvrent depuis le centre de l’écran à cette taille _(390×844)_

### section sans visuel (12)

- **section sans visuel** — `/` — section#etapes « Comment ça se passe Quatre étapes, et vous n'avez  » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(768×1024 normal, 390×844 normal, 844×390 normal, 320×568 normal, 390×844 sansJs, 1920×1080 normal, +5)_
- **section sans visuel** — `/` — section#promesses « Vos photos · chez vous · sans abonnement · Vos pho » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 320×568 normal, 390×844 sansWebgl)_
- **section sans visuel** — `/a-propos` — section#partout « Chez vous, et pourtant partout Garder ses données  » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 320×568 normal, 768×1024 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **section sans visuel** — `/boitier` — section#compris « Ce qui est compris Le prix comprend tout le nécess » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(768×1024 normal, 390×844 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **section sans visuel** — `/en` — section#etapes « How it works Four steps, and nothing for you to do » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(768×1024 normal, 390×844 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **section sans visuel** — `/en` — section#promesses « Your photos · at home · no subscription · Your pho » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 320×568 normal, 390×844 sansWebgl)_
- **section sans visuel** — `/en/a-propos` — section#partout « At home, yet everywhere Keeping your data at home  » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 390×844 normal, 768×1024 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **section sans visuel** — `/en/boitier` — section#compris « What's included The price includes everything you  » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 768×1024 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **section sans visuel** — `/en/services` — section#ecrans « On every screen At home, yet everywhere. Phone The » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 768×1024 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **section sans visuel** — `/en/services` — section#comparer « What changes Online subscription or a box at home? » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 768×1024 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **section sans visuel** — `/services` — section#ecrans « Sur tous vos écrans Chez vous, et pourtant partout » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 320×568 normal, 768×1024 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **section sans visuel** — `/services` — section#comparer « Ce qui change Abonnement en ligne ou boîtier chez  » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 320×568 normal, 768×1024 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_

### texte de contenu sous 13 px (ordinateur) (35)

- **texte de contenu sous 13 px (ordinateur)** — `/` — section#debut > div.hero-visuel:nth-of-type(2) > figure.media.hero-photo > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1920×1080 normal, 1366×768 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — section#constat > div.conteneur.constat-grille > figure.media.constat-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1920×1080 normal, 1366×768 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — section#photos > div.conteneur.photos-grille > div.tel-bloc:nth-of-type(1) > p.mention-ia:nth-of-type(2) « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1920×1080 normal, 1366×768 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — section#artisan > div.conteneur.artisan-grille > figure.media.artisan-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1920×1080 normal, 1366×768 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — section#appel > div.appel-grille.conteneur > figure.media.appel-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1920×1080 normal, 1366×768 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/404` — section#debut > div.conteneur.ouv-courte-grille > figure.media.ouv-courte-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1366×768 sansJs, 1920×1080 normal, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/a-propos` — section#debut > figure.media.ouv-scindee-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/a-propos` — section#pourquoi > div.conteneur.pourquoi-grille > figure.media.pourquoi-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/a-propos` — section#engagements > div.conteneur.engagements-grille > figure.media.engagements-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/a-propos` — section#appel > div.appel-grille.conteneur > figure.media.appel-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/boitier` — div.pose-cadre.conteneur > div.pose-image:nth-of-type(1) > figure.media.pose-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/boitier` — section#appel > div.appel-grille.conteneur > figure.media.appel-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/contact` — section#debut > div.conteneur.ouv-courte-grille > figure.media.ouv-courte-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/en` — section#debut > div.hero-visuel:nth-of-type(2) > figure.media.hero-photo > figcaption.mention-ia « AI-generated illustration » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/en` — section#constat > div.conteneur.constat-grille > figure.media.constat-media > figcaption.mention-ia « AI-generated illustration » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/en` — section#photos > div.conteneur.photos-grille > div.tel-bloc:nth-of-type(1) > p.mention-ia:nth-of-type(2) « AI-generated illustration » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/en` — section#artisan > div.conteneur.artisan-grille > figure.media.artisan-media > figcaption.mention-ia « AI-generated illustration » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/en` — section#appel > div.appel-grille.conteneur > figure.media.appel-media > figcaption.mention-ia « AI-generated illustration » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/en/a-propos` — section#debut > figure.media.ouv-scindee-media > figcaption.mention-ia « AI-generated illustration » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/en/a-propos` — section#pourquoi > div.conteneur.pourquoi-grille > figure.media.pourquoi-media > figcaption.mention-ia « AI-generated illustration » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/en/a-propos` — section#engagements > div.conteneur.engagements-grille > figure.media.engagements-media > figcaption.mention-ia « AI-generated illustration » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/en/a-propos` — section#appel > div.appel-grille.conteneur > figure.media.appel-media > figcaption.mention-ia « AI-generated illustration » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/en/boitier` — div.pose-cadre.conteneur > div.pose-image:nth-of-type(1) > figure.media.pose-media > figcaption.mention-ia « AI-generated illustration » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/en/boitier` — section#appel > div.appel-grille.conteneur > figure.media.appel-media > figcaption.mention-ia « AI-generated illustration » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/en/contact` — section#debut > div.conteneur.ouv-courte-grille > figure.media.ouv-courte-media > figcaption.mention-ia « AI-generated illustration » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- … et 10 autres (rapport.json)

### rechargement au milieu de la page (1)

- **rechargement au milieu de la page** — `/` — écran différent à la même position après rechargement (6.2 %), voir comparaisons/rechargement-*.png _(1366×768)_

### effet qui ne bouge pas au défilement (1)

- **effet qui ne bouge pas au défilement** — `/boitier` — div.boitier.boitier--pose — pose : il ne bouge ni au défilement ni tout seul à cette taille (effet au survol, au clic, ou réservé à l'ordinateur ?) ; il ne compte pas comme effet de section _(1366×768 normal, 390×844 normal)_

## Non lancé

- **Safari (WebKit)** : WebKit ne peut pas s’installer ici : vérification à faire dans Safari sur le Mac (liste dans le rapport)

### À vérifier dans Safari sur le Mac (WebKit indisponible ici)

- Ouverture de chaque page : rien qui clignote, intro complète au premier chargement et au rechargement.
- Changement de page : le voile couvre l’écran, pas de page blanche ; retour arrière sans intro ni voile resté.
- Défilement : fluide (natif), en-tête qui se cache et revient sans clignoter, sections épinglées entières.
- Menu sur iPhone (mode Responsive de Safari) : ouverture, fermeture, page bloquée derrière.
- Polices, images, mention « Illustration générée », formulaires et barre fixe du bas.

## Repères

- Numéro de version des fichiers : ?v=1
- Journal v1 : 7 étape(s) notée(s), 153 min de travail pour 125 min de budget, 52 min d’attente de l’utilisateur.
- Journal : « contrôle des images reçues et pose » 14 min pour 10 prévues.
- Journal : « construction : accueil » 54 min pour 40 prévues.
- Journal : « construction : pages d'onglet » 52 min pour 25 prévues.
- Audit standard : étapes lourdes sur /, /a-propos, /boitier, /contact, /services.
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Ouverture / (1366×768) : 2845 ms depuis le premier octet
- Ouverture /a-propos (1366×768) : 2770 ms depuis le premier octet
- Ouverture /boitier (1366×768) : 2693 ms depuis le premier octet
- Ouverture /contact (1366×768) : 2710 ms depuis le premier octet
- Ouverture /services (1366×768) : 2715 ms depuis le premier octet
- Ouverture / (390×844) : 2816 ms depuis le premier octet
- film de l'ouverture / 390×844 : réussi à la tentative 3 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture /a-propos (390×844) : 2728 ms depuis le premier octet
- Ouverture /boitier (390×844) : 2695 ms depuis le premier octet
- Ouverture /contact (390×844) : 2706 ms depuis le premier octet
- Ouverture /services (390×844) : 2846 ms depuis le premier octet
- Bords de l’écran : 386 images d’intro, 33 de voile et 146 de menu jugées (panneau immobile couvrant tout l’écran), barre de défilement classique de 15 px.
- Tient dans l'écran / : aucune section épinglée ou plein écran.
- Tient dans l'écran /a-propos : aucune section épinglée ou plein écran.
- Tient dans l'écran /boitier : aucune section épinglée ou plein écran.
- Tient dans l'écran /contact : aucune section épinglée ou plein écran.
- Tient dans l'écran /en : aucune section épinglée ou plein écran.
- Tient dans l'écran /en/a-propos : aucune section épinglée ou plein écran.
- Tient dans l'écran /en/boitier : aucune section épinglée ou plein écran.
- Tient dans l'écran /en/contact : aucune section épinglée ou plein écran.
- Tient dans l'écran /en/services : aucune section épinglée ou plein écran.
- Tient dans l'écran /services : aucune section épinglée ou plein écran.
- Fluidité / 1366×768 (molette) : 0 % d'images lentes sur 441, tâche la plus longue 0 ms
- Fluidité /a-propos 1366×768 (molette) : 0 % d'images lentes sur 282, tâche la plus longue 0 ms
- Fluidité /boitier 1366×768 (molette) : 0 % d'images lentes sur 280, tâche la plus longue 0 ms
- Fluidité /contact 1366×768 (molette) : 0 % d'images lentes sur 123, tâche la plus longue 0 ms
- Fluidité /services 1366×768 (molette) : 0 % d'images lentes sur 288, tâche la plus longue 0 ms
- Fluidité / 390×844 (doigt) : 0 % d'images lentes sur 1374, tâche la plus longue 0 ms
- Fluidité /a-propos 390×844 (doigt) : 0 % d'images lentes sur 1336, tâche la plus longue 0 ms
- Fluidité /boitier 390×844 (doigt) : 0 % d'images lentes sur 1358, tâche la plus longue 0 ms
- Fluidité /contact 390×844 (doigt) : 0 % d'images lentes sur 1334, tâche la plus longue 0 ms
- Fluidité /services 390×844 (doigt) : 0 % d'images lentes sur 1338, tâche la plus longue 0 ms
- Vitesse / : 0.56 s de calcul au chargement (téléphone ralenti).
- Vitesse /a-propos : 0.41 s de calcul au chargement (téléphone ralenti).
- Vitesse /boitier : 0.42 s de calcul au chargement (téléphone ralenti).
- Vitesse /contact : 0.36 s de calcul au chargement (téléphone ralenti).
- Vitesse /en : 0.49 s de calcul au chargement (téléphone ralenti).
- Vitesse /en/a-propos : 0.41 s de calcul au chargement (téléphone ralenti).
- Vitesse /en/boitier : 0.38 s de calcul au chargement (téléphone ralenti).
- Vitesse /en/contact : 0.33 s de calcul au chargement (téléphone ralenti).
- Vitesse /en/services : 0.42 s de calcul au chargement (téléphone ralenti).
- Vitesse /services : 0.45 s de calcul au chargement (téléphone ralenti).

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --pages=/,/404,/a-propos,/boitier,/contact,/en/a-propos,/en/boitier,/en/contact,/en/services,/services --seulement=fichiers,mesures
```

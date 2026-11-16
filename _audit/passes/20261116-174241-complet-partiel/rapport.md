# Rapport d’audit

Projet : `mtcloud-maquette` · 16/11/2026 18:53:42 · 11 min · 11 page(s) · audit complet (étapes : mesures, ecran)

## Résumé

- Statut : **19 échec(s)**
- Passe : `20261116-174241-complet-partiel` · version ?v=1
- Échecs : **19**
- À regarder : **47**
- Non lancé : **0**
- Contrôles passés : mesures (429), balayage (10)

## Passes de cette version (?v=1)

Chaque passe garde son rapport dans `_audit/passes/` : une relance ciblée ne fait pas disparaître la preuve d’une passe plus large.

| Passe | Niveau | Pages | Étapes | Échecs | À regarder | Non lancé | Statut |
|---|---|---|---|---:|---:|---:|---|
| 20261116-162759-rapide-cible | rapide | /,/contact | toutes | 30 | 20 | 1 | échecs |
| 20261116-163626-rapide-cible-partiel | rapide | /,/contact | mesures | 1 | 8 | 0 | échecs |
| 20261116-171344-standard | standard | toutes | toutes | 29 | 54 | 1 | échecs |
| 20261116-173836-standard-cible-partiel | standard | /,/404,/a-propos,/boitier,/contact,/services,/en,/en/a-propos,/en/boitier,/en/contact,/en/services | fichiers, mesures | 0 | 49 | 0 | complet |
| **20261116-174241-complet-partiel** (celle-ci) | complet | toutes | mesures, ecran | 19 | 47 | 0 | échecs |

## Échecs

### contraste insuffisant (8)

- **contraste insuffisant** — `/` — div.tel > div.tel-ecran > div.tel-tris:nth-of-type(2) > button.tel-tri:nth-of-type(1) « Tout » — 3.41:1 (minimum 4.5:1) _(375×667 normal)_
- **contraste insuffisant** — `/` — div.tel > div.tel-ecran > div.tel-tris:nth-of-type(2) > button.tel-tri:nth-of-type(2) « Personnes » — 3.42:1 (minimum 4.5:1) _(375×667 normal)_
- **contraste insuffisant** — `/` — div.tel > div.tel-ecran > div.tel-tris:nth-of-type(2) > button.tel-tri:nth-of-type(2) « Personnes » — 1.40:1 (minimum 4.5:1) _(2560×1440 normal, 2560×1440 sansWebgl)_
- **contraste insuffisant** — `/` — div.tel > div.tel-ecran > div.tel-tris:nth-of-type(2) > button.tel-tri:nth-of-type(3) « Lieux » — 1.40:1 (minimum 4.5:1) _(2560×1440 normal, 2560×1440 sansWebgl)_
- **contraste insuffisant** — `/en` — div.tel > div.tel-ecran > div.tel-tris:nth-of-type(2) > button.tel-tri:nth-of-type(2) « People » — 1.58:1 (minimum 4.5:1) _(2560×1440 normal)_
- **contraste insuffisant** — `/en` — div.tel > div.tel-ecran > div.tel-tris:nth-of-type(2) > button.tel-tri:nth-of-type(3) « Places » — 1.58:1 (minimum 4.5:1) _(2560×1440 normal)_
- **contraste insuffisant** — `/en` — div.tel > div.tel-ecran > div.tel-tris:nth-of-type(2) > button.tel-tri:nth-of-type(2) « People » — 3.44:1 (minimum 4.5:1) _(2560×1440 sansWebgl)_
- **contraste insuffisant** — `/en` — div.tel > div.tel-ecran > div.tel-tris:nth-of-type(2) > button.tel-tri:nth-of-type(3) « Places » — 3.44:1 (minimum 4.5:1) _(2560×1440 sansWebgl)_

### premier écran : information clé hors de l’écran (7)

- **premier écran : information clé hors de l’écran** — `/` — section#debut > div.hero-texte:nth-of-type(1) > p.hero-info:nth-of-type(4) « Achat unique, dès 275 €, sans abonnement » _(1000×560 normal, 1000×560 sansJs, 1000×560 sansWebgl)_
- **premier écran : information clé hors de l’écran** — `/404` — section#debut > div.conteneur.ouv-courte-grille > div > p.hero-info:nth-of-type(4) « Réponse sous 24 h » _(1000×560 normal, 1000×560 sansJs, 1280×720 sansJs, 1000×560 sansWebgl)_
- **premier écran : information clé hors de l’écran** — `/a-propos` — section#debut > div.ouv-scindee-texte > p.ouv-actions:nth-of-type(3) > span.hero-info « Depuis 2009 dans l'informatique » _(1000×560 normal, 1000×560 sansJs, 1000×560 sansWebgl)_
- **premier écran : information clé hors de l’écran** — `/boitier` — div.conteneur.ouv-prix-grille > div.ouv-prix-texte:nth-of-type(1) > p.ouv-actions:nth-of-type(4) > span.hero-info « Devis personnalisé, pas d'achat en ligne » _(1000×560 normal, 1000×560 sansJs, 1000×560 sansWebgl)_
- **premier écran : information clé hors de l’écran** — `/en` — section#debut > div.hero-texte:nth-of-type(1) > p.hero-info:nth-of-type(4) « One-off purchase, from €275, no subscription » _(1000×560 normal, 1000×560 sansJs, 1000×560 sansWebgl)_
- **premier écran : information clé hors de l’écran** — `/en/a-propos` — section#debut > div.ouv-scindee-texte > p.ouv-actions:nth-of-type(3) > span.hero-info « Working in IT since 2009 » _(1000×560 normal, 1000×560 sansJs, 1000×560 sansWebgl)_
- **premier écran : information clé hors de l’écran** — `/en/boitier` — div.conteneur.ouv-prix-grille > div.ouv-prix-texte:nth-of-type(1) > p.ouv-actions:nth-of-type(4) > span.hero-info « Personalised quote, no online purchase » _(1000×560 sansJs)_

### premier écran : bouton principal hors de l’écran (4)

- **premier écran : bouton principal hors de l’écran** — `/404` — div.conteneur.ouv-courte-grille > div > p.ouv-actions:nth-of-type(3) > a.bouton « Revenir à l'accueil » _(1000×560 sansJs)_
- **premier écran : bouton principal hors de l’écran** — `/a-propos` — section#debut > div.ouv-scindee-texte > p.ouv-actions:nth-of-type(3) > a.bouton « Me contacter » _(1000×560 normal, 1000×560 sansJs, 1000×560 sansWebgl)_
- **premier écran : bouton principal hors de l’écran** — `/boitier` — div.conteneur.ouv-prix-grille > div.ouv-prix-texte:nth-of-type(1) > p.ouv-actions:nth-of-type(4) > a.bouton « Configurer mon cloud » _(1000×560 sansJs)_
- **premier écran : bouton principal hors de l’écran** — `/en/a-propos` — section#debut > div.ouv-scindee-texte > p.ouv-actions:nth-of-type(3) > a.bouton « Contact me » _(1000×560 normal, 1000×560 sansJs, 1000×560 sansWebgl)_

## À regarder

### section sans visuel (12)

- **section sans visuel** — `/` — section#promesses « Vos photos · chez vous · sans abonnement · Vos pho » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 375×667 normal, 320×568 normal, 320×568 sansWebgl, 375×667 sansWebgl, 390×844 sansWebgl)_
- **section sans visuel** — `/` — section#etapes « Comment ça se passe Quatre étapes, et vous n'avez  » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 375×667 normal, 844×390 normal, 320×568 normal, 768×1024 normal, 1024×768 normal, +33)_
- **section sans visuel** — `/a-propos` — section#partout « Chez vous, et pourtant partout Garder ses données  » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(375×667 normal, 320×568 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_
- **section sans visuel** — `/boitier` — section#compris « Ce qui est compris Le prix comprend tout le nécess » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 375×667 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_
- **section sans visuel** — `/en` — section#promesses « Your photos · at home · no subscription · Your pho » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 375×667 normal, 390×844 normal, 320×568 sansWebgl, 375×667 sansWebgl, 390×844 sansWebgl)_
- **section sans visuel** — `/en` — section#etapes « How it works Four steps, and nothing for you to do » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 375×667 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_
- **section sans visuel** — `/en/a-propos` — section#partout « At home, yet everywhere Keeping your data at home  » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 375×667 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_
- **section sans visuel** — `/en/boitier` — section#compris « What's included The price includes everything you  » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(375×667 normal, 320×568 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_
- **section sans visuel** — `/en/services` — section#ecrans « On every screen At home, yet everywhere. Phone The » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 375×667 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_
- **section sans visuel** — `/en/services` — section#comparer « What changes Online subscription or a box at home? » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 375×667 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_
- **section sans visuel** — `/services` — section#ecrans « Sur tous vos écrans Chez vous, et pourtant partout » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 375×667 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_
- **section sans visuel** — `/services` — section#comparer « Ce qui change Abonnement en ligne ou boîtier chez  » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 375×667 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_

### texte de contenu sous 13 px (ordinateur) (35)

- **texte de contenu sous 13 px (ordinateur)** — `/` — section#debut > div.hero-visuel:nth-of-type(2) > figure.media.hero-photo > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +15)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — section#constat > div.conteneur.constat-grille > figure.media.constat-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +15)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — section#photos > div.conteneur.photos-grille > div.tel-bloc:nth-of-type(1) > p.mention-ia:nth-of-type(2) « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +15)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — section#artisan > div.conteneur.artisan-grille > figure.media.artisan-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +15)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — section#appel > div.appel-grille.conteneur > figure.media.appel-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +15)_
- **texte de contenu sous 13 px (ordinateur)** — `/404` — section#debut > div.conteneur.ouv-courte-grille > figure.media.ouv-courte-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +15)_
- **texte de contenu sous 13 px (ordinateur)** — `/a-propos` — section#debut > figure.media.ouv-scindee-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +15)_
- **texte de contenu sous 13 px (ordinateur)** — `/a-propos` — section#pourquoi > div.conteneur.pourquoi-grille > figure.media.pourquoi-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +15)_
- **texte de contenu sous 13 px (ordinateur)** — `/a-propos` — section#engagements > div.conteneur.engagements-grille > figure.media.engagements-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +15)_
- **texte de contenu sous 13 px (ordinateur)** — `/a-propos` — section#appel > div.appel-grille.conteneur > figure.media.appel-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +15)_
- **texte de contenu sous 13 px (ordinateur)** — `/boitier` — div.pose-cadre.conteneur > div.pose-image:nth-of-type(1) > figure.media.pose-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +15)_
- **texte de contenu sous 13 px (ordinateur)** — `/boitier` — section#appel > div.appel-grille.conteneur > figure.media.appel-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +15)_
- **texte de contenu sous 13 px (ordinateur)** — `/contact` — section#debut > div.conteneur.ouv-courte-grille > figure.media.ouv-courte-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +15)_
- **texte de contenu sous 13 px (ordinateur)** — `/en` — section#debut > div.hero-visuel:nth-of-type(2) > figure.media.hero-photo > figcaption.mention-ia « AI-generated illustration » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +15)_
- **texte de contenu sous 13 px (ordinateur)** — `/en` — section#constat > div.conteneur.constat-grille > figure.media.constat-media > figcaption.mention-ia « AI-generated illustration » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +15)_
- **texte de contenu sous 13 px (ordinateur)** — `/en` — section#photos > div.conteneur.photos-grille > div.tel-bloc:nth-of-type(1) > p.mention-ia:nth-of-type(2) « AI-generated illustration » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +15)_
- **texte de contenu sous 13 px (ordinateur)** — `/en` — section#artisan > div.conteneur.artisan-grille > figure.media.artisan-media > figcaption.mention-ia « AI-generated illustration » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +15)_
- **texte de contenu sous 13 px (ordinateur)** — `/en` — section#appel > div.appel-grille.conteneur > figure.media.appel-media > figcaption.mention-ia « AI-generated illustration » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +15)_
- **texte de contenu sous 13 px (ordinateur)** — `/en/a-propos` — section#debut > figure.media.ouv-scindee-media > figcaption.mention-ia « AI-generated illustration » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +15)_
- **texte de contenu sous 13 px (ordinateur)** — `/en/a-propos` — section#pourquoi > div.conteneur.pourquoi-grille > figure.media.pourquoi-media > figcaption.mention-ia « AI-generated illustration » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +15)_
- **texte de contenu sous 13 px (ordinateur)** — `/en/a-propos` — section#engagements > div.conteneur.engagements-grille > figure.media.engagements-media > figcaption.mention-ia « AI-generated illustration » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +15)_
- **texte de contenu sous 13 px (ordinateur)** — `/en/a-propos` — section#appel > div.appel-grille.conteneur > figure.media.appel-media > figcaption.mention-ia « AI-generated illustration » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +15)_
- **texte de contenu sous 13 px (ordinateur)** — `/en/boitier` — div.pose-cadre.conteneur > div.pose-image:nth-of-type(1) > figure.media.pose-media > figcaption.mention-ia « AI-generated illustration » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +15)_
- **texte de contenu sous 13 px (ordinateur)** — `/en/boitier` — section#appel > div.appel-grille.conteneur > figure.media.appel-media > figcaption.mention-ia « AI-generated illustration » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +15)_
- **texte de contenu sous 13 px (ordinateur)** — `/en/contact` — section#debut > div.conteneur.ouv-courte-grille > figure.media.ouv-courte-media > figcaption.mention-ia « AI-generated illustration » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +15)_
- … et 10 autres (rapport.json)

## Non lancé

Tout a été lancé.


## Repères

- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
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

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --complet --pages=/,/404,/a-propos,/boitier,/en,/en/a-propos,/en/boitier --seulement=fichiers,mesures
```

# Rapport d’audit

Projet : `mtcloud-maquette` · 16/11/2026 19:09:46 · 2 min · 2 page(s) · audit complet ciblé sur /,/404 (étapes : fichiers, mesures)

## Résumé

- Statut : **tout a tourné, aucun échec**
- Passe : `20261116-180757-complet-cible-partiel` · version ?v=1
- Échecs : **0**
- À regarder : **10**
- Non lancé : **0**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), mesures (78), balayage (1)

## Passes de cette version (?v=1)

Chaque passe garde son rapport dans `_audit/passes/` : une relance ciblée ne fait pas disparaître la preuve d’une passe plus large.

| Passe | Niveau | Pages | Étapes | Échecs | À regarder | Non lancé | Statut |
|---|---|---|---|---:|---:|---:|---|
| 20261116-162759-rapide-cible | rapide | /,/contact | toutes | 30 | 20 | 1 | échecs |
| 20261116-163626-rapide-cible-partiel | rapide | /,/contact | mesures | 1 | 8 | 0 | échecs |
| 20261116-171344-standard | standard | toutes | toutes | 29 | 54 | 1 | échecs |
| 20261116-173836-standard-cible-partiel | standard | /,/404,/a-propos,/boitier,/contact,/services,/en,/en/a-propos,/en/boitier,/en/contact,/en/services | fichiers, mesures | 0 | 49 | 0 | complet |
| 20261116-174241-complet-partiel | complet | toutes | mesures, ecran | 19 | 47 | 0 | échecs |
| 20261116-175613-complet-cible-partiel | complet | /,/404,/a-propos,/boitier,/en,/en/a-propos,/en/boitier | fichiers, mesures | 1 | 33 | 0 | échecs |
| 20261116-180304-standard-partiel | standard | toutes | fichiers, mesures | 0 | 49 | 0 | complet |
| **20261116-180757-complet-cible-partiel** (celle-ci) | complet | /,/404 | fichiers, mesures | 0 | 10 | 0 | complet |

## Échecs

Aucun.

## À regarder

### « à compléter » visible (2)

- **« à compléter » visible** — `contact.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)
- **« à compléter » visible** — `en/contact.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)

### section sans visuel (2)

- **section sans visuel** — `/` — section#promesses « Vos photos · chez vous · sans abonnement · Vos pho » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 375×667 normal, 320×568 normal, 320×568 sansWebgl, 375×667 sansWebgl, 390×844 sansWebgl)_
- **section sans visuel** — `/` — section#etapes « Comment ça se passe Quatre étapes, et vous n'avez  » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 375×667 normal, 844×390 normal, 320×568 normal, 768×1024 normal, 1024×768 normal, +33)_

### texte de contenu sous 13 px (ordinateur) (6)

- **texte de contenu sous 13 px (ordinateur)** — `/` — section#debut > div.hero-visuel:nth-of-type(2) > figure.media.hero-photo > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1920×1080 normal, 1728×1000 normal, +15)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — section#constat > div.conteneur.constat-grille > figure.media.constat-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1920×1080 normal, 1728×1000 normal, +15)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — section#photos > div.conteneur.photos-grille > div.tel-bloc:nth-of-type(1) > p.mention-ia:nth-of-type(2) « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1920×1080 normal, 1728×1000 normal, +15)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — section#artisan > div.conteneur.artisan-grille > figure.media.artisan-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1920×1080 normal, 1728×1000 normal, +15)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — section#appel > div.appel-grille.conteneur > figure.media.appel-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1920×1080 normal, 1728×1000 normal, +15)_
- **texte de contenu sous 13 px (ordinateur)** — `/404` — section#debut > div.conteneur.ouv-courte-grille > figure.media.ouv-courte-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +15)_

## Non lancé

Tout a été lancé.


## Repères

- Numéro de version des fichiers : ?v=1
- Journal v1 : 7 étape(s) notée(s), 182 min de travail pour 125 min de budget, 52 min d’attente de l’utilisateur.
- Journal : « contrôle des images reçues et pose » 14 min pour 10 prévues.
- Journal : « construction : accueil » 54 min pour 40 prévues.
- Journal : « construction : pages d'onglet » 45 min pour 25 prévues.
- Journal : « construction : contact et page de catégorie » 45 min pour 15 prévues.
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`

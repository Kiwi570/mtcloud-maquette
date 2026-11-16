# Rapport d’audit

Projet : `mtcloud-maquette` · 17/11/2026 00:44:37 · 8 min · 2 page(s) · audit standard ciblé sur /services,/en/services

## Résumé

- Statut : **tout a tourné, aucun échec**
- Passe : `20261116-233612-standard-cible` · version ?v=2
- Échecs : **0**
- À regarder : **20**
- Non lancé : **1**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), grille wouahou (5), mesures (22), balayage (2), films d’ouverture (4), films de transition (4), bords de l’écran (3), intro accélérable et passable (7), menu (1), clavier (2), liens et boutons (2), liens profonds (8), liens vers la page en cours (2), changements de hauteur (2), parcours du projet (1), fluidité (4), défilement selon l’appareil (5), mouvement (4), effets du plan (9), souris immobile (2), vitesse (2), captures (1)

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

## Passes de cette version (?v=2)

Chaque passe garde son rapport dans `_audit/passes/` : une relance ciblée ne fait pas disparaître la preuve d’une passe plus large.

| Passe | Niveau | Pages | Étapes | Échecs | À regarder | Non lancé | Statut |
|---|---|---|---|---:|---:|---:|---|
| 20261116-225206-complet | complet | toutes | toutes | 0 | 61 | 1 | complet |
| **20261116-233612-standard-cible** (celle-ci) | standard | /services,/en/services | toutes | 0 | 20 | 1 | complet |

## Échecs

Aucun.

## À regarder

### « à compléter » visible (2)

- **« à compléter » visible** — `contact.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)
- **« à compléter » visible** — `en/contact.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)

### grille : rien ne relie les sections (point 4) (1)

- **grille : rien ne relie les sections (point 4)** — sur aucune page : élément du métier qui relie les sections et les pages (fil dans la marge, objet unique qui change, lumière qui passe, carte, folio, frise), marqué data-grille="fil"

### grille : aucun titre ne fait l’événement (point 5) (1)

- **grille : aucun titre ne fait l’événement (point 5)** — sur aucune page : titre fabriqué par le métier, axe de police animé ou titre joué avec l’image (modules axes-au-defilement, titre-cousu, texte-grave-en-direct), marqué data-grille="typo"

### section sans visuel (4)

- **section sans visuel** — `/en/services` — section#ecrans « On every screen At home, yet everywhere. Phone The » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(768×1024 normal, 390×844 normal, 844×390 normal, 320×568 normal, 390×844 sansJs, 1920×1080 normal, +5)_
- **section sans visuel** — `/en/services` — section#comparer « What changes Online subscription or a box at home? » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(768×1024 normal, 390×844 normal, 844×390 normal, 320×568 normal, 390×844 sansJs, 1920×1080 normal, +5)_
- **section sans visuel** — `/services` — section#ecrans « Sur tous vos écrans Chez vous, et pourtant partout » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 768×1024 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **section sans visuel** — `/services` — section#comparer « Ce qui change Abonnement en ligne ou boîtier chez  » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 768×1024 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_

### texte de contenu sous 13 px (ordinateur) (12)

- **texte de contenu sous 13 px (ordinateur)** — `/en/services` — section#debut > div.ouv-bandeau-image:nth-of-type(2) > div.scene-ecrans.allume > p.mention-ia « AI-generated illustration » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1920×1080 normal, 1366×768 normal, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/en/services` — div.conteneur.tele-grille > div.tele-ecran-bloc:nth-of-type(1) > p.tele-bas > span.mention-ia « AI-generated illustration » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1920×1080 normal, 1366×768 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/en/services` — section#fichiers > div.conteneur.partage-grille > figure.media.partage-media > figcaption.mention-ia « AI-generated illustration » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1920×1080 normal, 1366×768 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/en/services` — div.conteneur.faq-grille > div.faq-tete:nth-of-type(1) > figure.media.faq-media > figcaption.mention-ia « AI-generated illustration » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1920×1080 normal, 1366×768 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/en/services` — section#appel > div.appel-grille.conteneur > figure.media.appel-media > figcaption.mention-ia « AI-generated illustration » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1920×1080 normal, 1366×768 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/en/services` — section#debut > div.ouv-bandeau-image:nth-of-type(2) > div.scene-ecrans > p.mention-ia « AI-generated illustration » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 sansJs)_
- **texte de contenu sous 13 px (ordinateur)** — `/services` — section#debut > div.ouv-bandeau-image:nth-of-type(2) > div.scene-ecrans.allume > p.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/services` — div.conteneur.tele-grille > div.tele-ecran-bloc:nth-of-type(1) > p.tele-bas > span.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/services` — section#fichiers > div.conteneur.partage-grille > figure.media.partage-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/services` — div.conteneur.faq-grille > div.faq-tete:nth-of-type(1) > figure.media.faq-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/services` — section#appel > div.appel-grille.conteneur > figure.media.appel-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/services` — section#debut > div.ouv-bandeau-image:nth-of-type(2) > div.scene-ecrans > p.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 sansJs)_

## Non lancé

- **Safari (WebKit)** : WebKit ne peut pas s’installer ici : vérification à faire dans Safari sur le Mac (liste dans le rapport)

### À vérifier dans Safari sur le Mac (WebKit indisponible ici)

- Ouverture de chaque page : rien qui clignote, intro complète au premier chargement et au rechargement.
- Changement de page : le voile couvre l’écran, pas de page blanche ; retour arrière sans intro ni voile resté.
- Défilement : fluide (natif), en-tête qui se cache et revient sans clignoter, sections épinglées entières.
- Menu sur iPhone (mode Responsive de Safari) : ouverture, fermeture, page bloquée derrière.
- Polices, images, mention « Illustration générée », formulaires et barre fixe du bas.

## Repères

- Numéro de version des fichiers : ?v=2
- Journal v2 : 3 étape(s) notée(s), 120 min de travail pour 120 min de budget, 0 min d’attente de l’utilisateur.
- Audit standard : étapes lourdes sur /en/services, /services.
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Ouverture /en/services (1366×768) : 2599 ms depuis le premier octet
- Ouverture /services (1366×768) : 2583 ms depuis le premier octet
- Ouverture /en/services (390×844) : 2712 ms depuis le premier octet
- Ouverture /services (390×844) : 2632 ms depuis le premier octet
- Bords de l’écran : 180 images d’intro, 12 de voile et 101 de menu jugées (panneau immobile couvrant tout l’écran), barre de défilement classique de 15 px.
- Tient dans l'écran /en/services : aucune section épinglée ou plein écran.
- Tient dans l'écran /services : aucune section épinglée ou plein écran.
- Fluidité /en/services 1366×768 (molette) : 0 % d'images lentes sur 294, tâche la plus longue 0 ms
- Fluidité /services 1366×768 (molette) : 0 % d'images lentes sur 298, tâche la plus longue 0 ms
- Fluidité /en/services 390×844 (doigt) : 0 % d'images lentes sur 1352, tâche la plus longue 0 ms
- Fluidité /services 390×844 (doigt) : 0 % d'images lentes sur 1349, tâche la plus longue 0 ms
- Vitesse /en/services : 0.62 s de calcul au chargement (téléphone ralenti).
- Vitesse /services : 0.66 s de calcul au chargement (téléphone ralenti).

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`

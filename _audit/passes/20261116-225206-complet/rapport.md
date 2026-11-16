# Rapport d’audit

Projet : `mtcloud-maquette` · 17/11/2026 00:32:07 · 40 min · 11 page(s) · audit complet

## Résumé

- Statut : **tout a tourné, aucun échec**
- Passe : `20261116-225206-complet` · version ?v=2
- Échecs : **0**
- À regarder : **61**
- Non lancé : **1**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), grille wouahou (5), mesures (429), balayage (10), films d’ouverture (20), films de transition (20), bords de l’écran (11), intro accélérable et passable (7), menu (1), clavier (11), liens et boutons (11), liens profonds (10), liens vers la page en cours (10), changements de hauteur (10), parcours du projet (1), fluidité (20), défilement selon l’appareil (5), mouvement (20), effets du plan (9), souris immobile (8), vitesse (10), captures (1)

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

## Échecs

Aucun.

## À regarder

### « à compléter » visible (2)

- **« à compléter » visible** — `contact.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)
- **« à compléter » visible** — `en/contact.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)

### journal du projet (1)

- **journal du projet** — aucune entrée pour la version 2 de donnees/site.json

### grille : rien ne relie les sections (point 4) (1)

- **grille : rien ne relie les sections (point 4)** — sur aucune page : élément du métier qui relie les sections et les pages (fil dans la marge, objet unique qui change, lumière qui passe, carte, folio, frise), marqué data-grille="fil"

### grille : aucun titre ne fait l’événement (point 5) (1)

- **grille : aucun titre ne fait l’événement (point 5)** — sur aucune page : titre fabriqué par le métier, axe de police animé ou titre joué avec l’image (modules axes-au-defilement, titre-cousu, texte-grave-en-direct), marqué data-grille="typo"

### grille : objet d’ouverture hors du premier écran (2)

- **grille : objet d’ouverture hors du premier écran** — `/` — 188 × 0 px visibles : l’intro et le voile s’ouvrent depuis le centre de l’écran à cette taille _(390×844)_
- **grille : objet d’ouverture hors du premier écran** — `/en` — 188 × 0 px visibles : l’intro et le voile s’ouvrent depuis le centre de l’écran à cette taille _(390×844)_

### section sans visuel (14)

- **section sans visuel** — `/` — section#promesses « Vos photos · chez vous · sans abonnement · Vos pho » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 375×667 normal, 320×568 normal, 320×568 sansWebgl, 375×667 sansWebgl, 390×844 sansWebgl)_
- **section sans visuel** — `/` — section#etapes « Comment ça se passe Quatre étapes, et vous n'avez  » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 375×667 normal, 844×390 normal, 320×568 normal, 768×1024 normal, 1024×768 normal, +33)_
- **section sans visuel** — `/a-propos` — section#partout « Chez vous, et pourtant partout Garder ses données  » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(375×667 normal, 320×568 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_
- **section sans visuel** — `/boitier` — section#compris « Ce qui est compris Le prix comprend tout le nécess » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 375×667 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_
- **section sans visuel** — `/contact` — section#demande « Votre demande Nom E-mail Téléphone (facultatif) Fo » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 375×667 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_
- **section sans visuel** — `/en` — section#promesses « Your photos · at home · no subscription · Your pho » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(375×667 normal, 320×568 normal, 390×844 normal, 320×568 sansWebgl, 375×667 sansWebgl, 390×844 sansWebgl)_
- **section sans visuel** — `/en` — section#etapes « How it works Four steps, and nothing for you to do » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(375×667 normal, 320×568 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_
- **section sans visuel** — `/en/a-propos` — section#partout « At home, yet everywhere Keeping your data at home  » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 375×667 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_
- **section sans visuel** — `/en/boitier` — section#compris « What's included The price includes everything you  » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 375×667 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_
- **section sans visuel** — `/en/contact` — section#demande « Your request Name Email Phone (optional) Option In » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 375×667 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_
- **section sans visuel** — `/en/services` — section#ecrans « On every screen At home, yet everywhere. Phone The » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(375×667 normal, 320×568 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_
- **section sans visuel** — `/en/services` — section#comparer « What changes Online subscription or a box at home? » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(375×667 normal, 320×568 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_
- **section sans visuel** — `/services` — section#ecrans « Sur tous vos écrans Chez vous, et pourtant partout » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 375×667 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_
- **section sans visuel** — `/services` — section#comparer « Ce qui change Abonnement en ligne ou boîtier chez  » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 375×667 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_

### texte de contenu sous 13 px (ordinateur) (37)

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
- … et 12 autres (rapport.json)

### retour avant : changement brusque (1)

- **retour avant : changement brusque** — `/services` — à 85 ms (différence 23 %) (films/retour-avant-1366.png) _(1366×768 retour avant)_

### rechargement au milieu de la page (2)

- **rechargement au milieu de la page** — `/` — écran différent à la même position après rechargement (6.3 %), voir comparaisons/rechargement-*.png _(1366×768)_
- **rechargement au milieu de la page** — `/en` — écran différent à la même position après rechargement (6.2 %), voir comparaisons/rechargement-en-*.png _(1366×768)_

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
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Ouverture / (1366×768) : 2696 ms depuis le premier octet
- Ouverture /a-propos (1366×768) : 2564 ms depuis le premier octet
- Ouverture /boitier (1366×768) : 2504 ms depuis le premier octet
- Ouverture /contact (1366×768) : 2535 ms depuis le premier octet
- film de l'ouverture /contact 1366×768 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture /en (1366×768) : 2615 ms depuis le premier octet
- Ouverture /en/a-propos (1366×768) : 2608 ms depuis le premier octet
- Ouverture /en/boitier (1366×768) : 2526 ms depuis le premier octet
- Ouverture /en/contact (1366×768) : 2544 ms depuis le premier octet
- Ouverture /en/services (1366×768) : 2541 ms depuis le premier octet
- film de l'ouverture /en/services 1366×768 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture /services (1366×768) : 2589 ms depuis le premier octet
- Ouverture / (390×844) : 2641 ms depuis le premier octet
- Ouverture /a-propos (390×844) : 2559 ms depuis le premier octet
- Ouverture /boitier (390×844) : 2530 ms depuis le premier octet
- Ouverture /contact (390×844) : 2527 ms depuis le premier octet
- Ouverture /en (390×844) : 2626 ms depuis le premier octet
- film de l'ouverture /en 390×844 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture /en/a-propos (390×844) : 2562 ms depuis le premier octet
- Ouverture /en/boitier (390×844) : 2531 ms depuis le premier octet
- Ouverture /en/contact (390×844) : 2540 ms depuis le premier octet
- Ouverture /en/services (390×844) : 2595 ms depuis le premier octet
- Ouverture /services (390×844) : 2586 ms depuis le premier octet
- film de l'ouverture /services 390×844 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Bords de l’écran : 661 images d’intro, 59 de voile et 369 de menu jugées (panneau immobile couvrant tout l’écran), barre de défilement classique de 15 px.
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
- Fluidité / 1366×768 (molette) : 0 % d'images lentes sur 456, tâche la plus longue 0 ms
- Fluidité /a-propos 1366×768 (molette) : 0 % d'images lentes sur 244, tâche la plus longue 0 ms
- Fluidité /boitier 1366×768 (molette) : 0 % d'images lentes sur 286, tâche la plus longue 0 ms
- Fluidité /contact 1366×768 (molette) : 0 % d'images lentes sur 116, tâche la plus longue 0 ms
- Fluidité /en 1366×768 (molette) : 0 % d'images lentes sur 408, tâche la plus longue 66 ms
- Fluidité /en/a-propos 1366×768 (molette) : 0 % d'images lentes sur 261, tâche la plus longue 0 ms
- Fluidité /en/boitier 1366×768 (molette) : 0 % d'images lentes sur 290, tâche la plus longue 0 ms
- Fluidité /en/contact 1366×768 (molette) : 0 % d'images lentes sur 129, tâche la plus longue 0 ms
- Fluidité /en/services 1366×768 (molette) : 0 % d'images lentes sur 298, tâche la plus longue 0 ms
- Fluidité /services 1366×768 (molette) : 0 % d'images lentes sur 306, tâche la plus longue 0 ms
- Fluidité / 390×844 (doigt) : 0 % d'images lentes sur 1357, tâche la plus longue 0 ms
- Fluidité /a-propos 390×844 (doigt) : 0 % d'images lentes sur 1353, tâche la plus longue 0 ms
- Fluidité /boitier 390×844 (doigt) : 0 % d'images lentes sur 1427, tâche la plus longue 0 ms
- Fluidité /contact 390×844 (doigt) : 0 % d'images lentes sur 1340, tâche la plus longue 0 ms
- Fluidité /en 390×844 (doigt) : 0 % d'images lentes sur 1352, tâche la plus longue 0 ms
- Fluidité /en/a-propos 390×844 (doigt) : 0 % d'images lentes sur 1350, tâche la plus longue 0 ms
- Fluidité /en/boitier 390×844 (doigt) : 0 % d'images lentes sur 1363, tâche la plus longue 0 ms
- Fluidité /en/contact 390×844 (doigt) : 0 % d'images lentes sur 1340, tâche la plus longue 0 ms
- Fluidité /en/services 390×844 (doigt) : 0 % d'images lentes sur 1343, tâche la plus longue 0 ms
- Fluidité /services 390×844 (doigt) : 0 % d'images lentes sur 1357, tâche la plus longue 0 ms
- Vitesse / : 0.74 s de calcul au chargement (téléphone ralenti).
- Vitesse /a-propos : 0.50 s de calcul au chargement (téléphone ralenti).
- Vitesse /boitier : 0.49 s de calcul au chargement (téléphone ralenti).
- Vitesse /contact : 0.31 s de calcul au chargement (téléphone ralenti).
- Vitesse /en : 0.72 s de calcul au chargement (téléphone ralenti).
- Vitesse /en/a-propos : 0.52 s de calcul au chargement (téléphone ralenti).
- Vitesse /en/boitier : 0.54 s de calcul au chargement (téléphone ralenti).
- Vitesse /en/contact : 0.32 s de calcul au chargement (téléphone ralenti).
- Vitesse /en/services : 0.62 s de calcul au chargement (téléphone ralenti).
- Vitesse /services : 0.66 s de calcul au chargement (téléphone ralenti).

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`

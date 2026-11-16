# Rapport d’audit

Projet : `mtcloud-maquette` · 16/11/2026 17:34:55 · 7 min · 2 page(s) · audit RAPIDE : ne vaut pas pour une livraison ciblé sur /,/contact

## Résumé

- Statut : **30 échec(s)**
- Passe : `20261116-162759-rapide-cible` · version ?v=1
- Échecs : **30**
- À regarder : **20**
- Non lancé : **1**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), grille wouahou (3), mesures (12), films d’ouverture (4), films de transition (4), bords de l’écran (2), intro accélérable et passable (7), menu (1), clavier (2), liens et boutons (2), liens profonds (6), liens vers la page en cours (2), changements de hauteur (2), fluidité (4), défilement selon l’appareil (5), mouvement (4), effets du plan (8), souris immobile (1), vitesse (2), captures (1)

## Grille wouahou

| Point | État | Détail |
|---|---|---|
| 1. L’effet signature se manipule | ✗ absent | aucun data-grille="manipuler" sur l’accueil |
| 2. L’intro devient la page | ✓ présent | objet d’ouverture sur 5 page(s), versObjet dans l’intro |
| 3. La transition reprend le motif | ✓ présent | voile en iris |
| 4. Quelque chose relie les sections et les pages | ✗ absent | sur aucune page |
| 5. Un titre fait l’événement sur chaque page | ✗ absent | sur aucune page |
| 6. La scène est un geste du métier | · sans objet | aucune scène épinglée marquée ni galerie générique |
| 7. L’action principale a un retour physique | ✗ absent | sur aucune page |

Le script vérifie les marques (`data-grille`, `data-iris-centre`, forme du voile, `versObjet`) ; la force et la justesse de chaque point se jugent sur les captures et les films.

## Échecs

### lien vers le site actuel (11)

- **lien vers le site actuel** — `404.html` — mailto:contact@mtcloud.tourneur.work
- **lien vers le site actuel** — `a-propos.html` — mailto:contact@mtcloud.tourneur.work
- **lien vers le site actuel** — `boitier.html` — mailto:contact@mtcloud.tourneur.work
- **lien vers le site actuel** — `contact.html` — mailto:contact@mtcloud.tourneur.work
- **lien vers le site actuel** — `en/a-propos.html` — mailto:contact@mtcloud.tourneur.work
- **lien vers le site actuel** — `en/boitier.html` — mailto:contact@mtcloud.tourneur.work
- **lien vers le site actuel** — `en/contact.html` — mailto:contact@mtcloud.tourneur.work
- **lien vers le site actuel** — `en/index.html` — mailto:contact@mtcloud.tourneur.work
- **lien vers le site actuel** — `en/services.html` — mailto:contact@mtcloud.tourneur.work
- **lien vers le site actuel** — `index.html` — mailto:contact@mtcloud.tourneur.work
- **lien vers le site actuel** — `services.html` — mailto:contact@mtcloud.tourneur.work

### image de partage (10)

- **image de partage** — `a-propos.html` — fichier introuvable : /assets/partage/a-propos-fr.jpg
- **image de partage** — `boitier.html` — fichier introuvable : /assets/partage/boitier-fr.jpg
- **image de partage** — `contact.html` — fichier introuvable : /assets/partage/contact-fr.jpg
- **image de partage** — `en/a-propos.html` — fichier introuvable : /assets/partage/a-propos-en.jpg
- **image de partage** — `en/boitier.html` — fichier introuvable : /assets/partage/boitier-en.jpg
- **image de partage** — `en/contact.html` — fichier introuvable : /assets/partage/contact-en.jpg
- **image de partage** — `en/index.html` — fichier introuvable : /assets/partage/accueil-en.jpg
- **image de partage** — `en/services.html` — fichier introuvable : /assets/partage/services-en.jpg
- **image de partage** — `index.html` — fichier introuvable : /assets/partage/accueil-fr.jpg
- **image de partage** — `services.html` — fichier introuvable : /assets/partage/services-fr.jpg

### élément recouvert (6)

- **élément recouvert** — `/` — div.config-options.config-options--stockage > label.config-option:nth-of-type(1) > span.config-option-corps > span.config-option-prix:nth-of-type(3) « +40 € » — par fieldset.config-groupe:nth-of-type(1) > div.config-options.config-options--stockage > label.config-option:nth-of-type(1) > input _(1366×768 normal, 390×844 normal)_
- **élément recouvert** — `/` — div.config-options.config-options--stockage > label.config-option:nth-of-type(2) > span.config-option-corps > span.config-option-prix:nth-of-type(3) « +65 € » — par fieldset.config-groupe:nth-of-type(1) > div.config-options.config-options--stockage > label.config-option:nth-of-type(2) > input _(1366×768 normal, 390×844 normal)_
- **élément recouvert** — `/` — div.config-options.config-options--stockage > label.config-option:nth-of-type(3) > span.config-option-corps > span.config-option-prix:nth-of-type(3) « +110 € » — par fieldset.config-groupe:nth-of-type(1) > div.config-options.config-options--stockage > label.config-option:nth-of-type(3) > input _(1366×768 normal, 390×844 normal)_
- **élément recouvert** — `/` — div.config-options.config-options--stockage > label.config-option:nth-of-type(4) > span.config-option-corps > span.config-option-prix:nth-of-type(3) « +180 € » — par fieldset.config-groupe:nth-of-type(1) > div.config-options.config-options--stockage > label.config-option:nth-of-type(4) > input _(1366×768 normal, 390×844 normal)_
- **élément recouvert** — `/` — div.config-options.config-options--acces > label.config-option:nth-of-type(1) > span.config-option-corps > span.config-option-prix:nth-of-type(3) « +0 € » — par fieldset.config-groupe:nth-of-type(2) > div.config-options.config-options--acces > label.config-option:nth-of-type(1) > input _(1366×768 normal, 390×844 normal)_
- **élément recouvert** — `/` — div.config-options.config-options--acces > label.config-option:nth-of-type(2) > span.config-option-corps > span.config-option-prix:nth-of-type(3) « +50 € » — par fieldset.config-groupe:nth-of-type(2) > div.config-options.config-options--acces > label.config-option:nth-of-type(2) > input _(1366×768 normal, 390×844 normal)_

### zone tactile sous 44 px (1)

- **zone tactile sous 44 px** — `/` — div.tel > div.tel-ecran > div.tel-tris:nth-of-type(2) > button.tel-tri:nth-of-type(1) « Tout » — 43 × 44 px _(320×568 sansJs)_

### premier écran : information clé hors de l’écran (1)

- **premier écran : information clé hors de l’écran** — `/contact` — section#debut > div.conteneur.ouv-courte-grille > div > p.hero-info:nth-of-type(4) « Du lundi au vendredi, 9 h à 18 h · Réponse sous 24 » _(844×390 normal, 320×568 sansJs)_

### texte coupé (1)

- **texte coupé** — `/contact` — div.conteneur.demande-grille > aside.infos > figure.cote.cote--compacte > span.cote-nom.cote-nom--haut:nth-of-type(10) « Menton » — coupé par section#demande > div.conteneur.demande-grille > aside.infos > figure.cote.cote--compacte « Bandol Toulon Saint-Tropez Mandelieu · Atelier Nic » _(390×844 normal, 844×390 normal, 390×844 sansJs, 320×568 sansJs, 390×844 sansWebgl)_

## À regarder

### « à compléter » visible (2)

- **« à compléter » visible** — `contact.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)
- **« à compléter » visible** — `en/contact.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)

### grille : effet signature qui ne se manipule pas (point 1) (1)

- **grille : effet signature qui ne se manipule pas (point 1)** — `/` — aucun élément data-grille="manipuler" sur l’accueil : objet à attraper, faire tourner ou glisser (module objet-a-faire-tourner, lumiere-au-pointeur…)

### grille : rien ne relie les sections (point 4) (1)

- **grille : rien ne relie les sections (point 4)** — sur aucune page : élément du métier qui relie les sections et les pages (fil dans la marge, objet unique qui change, lumière qui passe, carte, folio, frise), marqué data-grille="fil"

### grille : aucun titre ne fait l’événement (point 5) (1)

- **grille : aucun titre ne fait l’événement (point 5)** — sur aucune page : titre fabriqué par le métier, axe de police animé ou titre joué avec l’image (modules axes-au-defilement, titre-cousu, texte-grave-en-direct), marqué data-grille="typo"

### grille : action principale sans retour physique (point 7) (1)

- **grille : action principale sans retour physique (point 7)** — ajout au panier, réservation, envoi ou filtre : quelque chose de l’objet part, se pose ou se transforme (module envol-vers-le-panier, tampon « reçu »), marqué data-grille="retour"

### grille : objet d’ouverture hors du premier écran (1)

- **grille : objet d’ouverture hors du premier écran** — `/` — 188 × 0 px visibles : l’intro et le voile s’ouvrent depuis le centre de l’écran à cette taille _(390×844)_

### texte de contenu sous 13 px (ordinateur) (8)

- **texte de contenu sous 13 px (ordinateur)** — `/` — section#debut > div.hero-visuel:nth-of-type(2) > figure.media.hero-photo > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — section#constat > div.conteneur.constat-grille > figure.media.constat-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — section#photos > div.conteneur.photos-grille > div.tel-bloc:nth-of-type(1) > p.mention-ia:nth-of-type(2) « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — section#artisan > div.conteneur.artisan-grille > figure.media.artisan-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — section#appel > div.appel-grille.conteneur > figure.media.appel-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/contact` — section#debut > div.conteneur.ouv-courte-grille > figure.media.ouv-courte-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/contact` — div.conteneur.demande-grille > aside.infos > figure.cote.cote--compacte > span.cote-nom.cote-nom--bas:nth-of-type(4) « Saint-Tropez » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/contact` — div.conteneur.demande-grille > aside.infos > figure.cote.cote--compacte > span.cote-nom.cote-nom--haut:nth-of-type(5) « Mandelieu · Atelier » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_

### section sans visuel (3)

- **section sans visuel** — `/` — section#tarif « Votre cloud Combien ça coûte ? Une fois, c'est tou » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(1366×768 normal, 390×844 normal, 390×844 sansWebgl, 844×390 normal, 390×844 sansJs, 320×568 sansJs)_
- **section sans visuel** — `/` — section#etapes « Comment ça se passe Quatre étapes, et vous n'avez  » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(1366×768 normal, 390×844 normal, 390×844 sansWebgl, 844×390 normal, 390×844 sansJs, 320×568 sansJs)_
- **section sans visuel** — `/` — section#promesses « Vos photos · chez vous · sans abonnement · Vos pho » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 390×844 sansWebgl)_

### au retour arrière, élément qui réapparaît en s’animant (1)

- **au retour arrière, élément qui réapparaît en s’animant** — `/` — div.hero-visuel > div.hero-souvenirs > img.tuile _(1366×768 retour arrière, 390×844 retour arrière)_

### rechargement au milieu de la page (1)

- **rechargement au milieu de la page** — `/` — écran différent à la même position après rechargement (6.3 %), voir comparaisons/rechargement-*.png _(1366×768)_

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
- Journal v1 : 2 étape(s) notée(s), 19 min de travail pour 30 min de budget, 1 min d’attente de l’utilisateur.
- Audit rapide : étapes lourdes sur /, /contact.
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Balayage des largeurs : non fait en audit rapide.
- Ouverture / (1366×768) : 2866 ms depuis le premier octet
- Ouverture /contact (1366×768) : 2700 ms depuis le premier octet
- Ouverture / (390×844) : 2856 ms depuis le premier octet
- Ouverture /contact (390×844) : 2743 ms depuis le premier octet
- Bords de l’écran : 141 images d’intro, 14 de voile et 45 de menu jugées (panneau immobile couvrant tout l’écran), barre de défilement classique de 15 px.
- Aucun parcours propre au projet (_audit/parcours.mjs) : filtres, calculateurs, panier, réservation, fenêtres testés seulement par les contrôles généraux.
- Tient dans l'écran / : aucune section épinglée ou plein écran.
- Tient dans l'écran /contact : aucune section épinglée ou plein écran.
- Fluidité / 1366×768 (molette) : 0 % d'images lentes sur 429, tâche la plus longue 0 ms
- Fluidité /contact 1366×768 (molette) : 0 % d'images lentes sur 132, tâche la plus longue 0 ms
- Fluidité / 390×844 (doigt) : 0 % d'images lentes sur 1384, tâche la plus longue 0 ms
- Fluidité /contact 390×844 (doigt) : 0 % d'images lentes sur 1341, tâche la plus longue 0 ms
- Vitesse / : 0.51 s de calcul au chargement (téléphone ralenti).
- Vitesse /contact : 0.41 s de calcul au chargement (téléphone ralenti).

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --rapide --seulement=fichiers,mesures
```

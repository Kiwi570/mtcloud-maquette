# Rapport d’audit

Projet : `mtcloud-maquette` · 16/11/2026 17:36:46 · 0 min · 2 page(s) · audit RAPIDE : ne vaut pas pour une livraison ciblé sur /,/contact (étapes : mesures)

## Résumé

- Statut : **1 échec(s)**
- Passe : `20261116-163626-rapide-cible-partiel` · version ?v=1
- Échecs : **1**
- À regarder : **8**
- Non lancé : **0**
- Contrôles passés : mesures (12)

## Passes de cette version (?v=1)

Chaque passe garde son rapport dans `_audit/passes/` : une relance ciblée ne fait pas disparaître la preuve d’une passe plus large.

| Passe | Niveau | Pages | Étapes | Échecs | À regarder | Non lancé | Statut |
|---|---|---|---|---:|---:|---:|---|
| 20261116-162759-rapide-cible | rapide | /,/contact | toutes | 30 | 20 | 1 | échecs |
| **20261116-163626-rapide-cible-partiel** (celle-ci) | rapide | /,/contact | mesures | 1 | 8 | 0 | échecs |

## Échecs

### texte coupé (1)

- **texte coupé** — `/contact` — div.conteneur.demande-grille > aside.infos > figure.cote.cote--compacte > span.cote-nom.cote-nom--haut:nth-of-type(10) « Menton » — coupé par section#demande > div.conteneur.demande-grille > aside.infos > figure.cote.cote--compacte « Bandol Toulon Saint-Tropez Mandelieu · Atelier Nic » _(844×390 normal, 320×568 sansJs)_

## À regarder

### texte de contenu sous 13 px (ordinateur) (6)

- **texte de contenu sous 13 px (ordinateur)** — `/` — section#debut > div.hero-visuel:nth-of-type(2) > figure.media.hero-photo > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — section#constat > div.conteneur.constat-grille > figure.media.constat-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — section#photos > div.conteneur.photos-grille > div.tel-bloc:nth-of-type(1) > p.mention-ia:nth-of-type(2) « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — section#artisan > div.conteneur.artisan-grille > figure.media.artisan-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — section#appel > div.appel-grille.conteneur > figure.media.appel-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/contact` — section#debut > div.conteneur.ouv-courte-grille > figure.media.ouv-courte-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_

### section sans visuel (2)

- **section sans visuel** — `/` — section#etapes « Comment ça se passe Quatre étapes, et vous n'avez  » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(1366×768 normal, 390×844 normal, 390×844 sansWebgl, 844×390 normal, 390×844 sansJs, 320×568 sansJs)_
- **section sans visuel** — `/` — section#promesses « Vos photos · chez vous · sans abonnement · Vos pho » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 390×844 sansWebgl)_

## Non lancé

Tout a été lancé.


## Repères

- Audit rapide : étapes lourdes sur /, /contact.
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Balayage des largeurs : non fait en audit rapide.

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --rapide --pages=/,/contact --seulement=fichiers,mesures
```

# MTCloud · maquette v2

Maquette de présentation du site de **MTCloud** (Mon Terminal Cloud), Michael Tourneur, artisan à Mandelieu-la-Napoule.
Adresse prévue : https://mtcloud-maquette.vercel.app · site actuel : https://mtcloud.tourneur.work

Direction « Rentrer à la maison » : sable et lin de la Riviera, bleu nuit et ambre du logo, Fraunces et Figtree.
Le boîtier et les écrans sont dessinés en code (aucune fausse photo de produit) ; les scènes sont des illustrations générées, marquées comme telles.

## Pages (français et anglais)

| Page | Adresse | Ouverture |
|---|---|---|
| Accueil | `/` | titre et grande photo d'un salon face à la mer, souvenirs qui rentrent dans le boîtier |
| Services | `/services` | grand titre puis bandeau dessiné : télé, ordinateur et téléphone avec les mêmes souvenirs |
| Le boîtier | `/boitier` | prix en très grand, boîtier qui tourne ; configurateur complet |
| À propos | `/a-propos` | scindée, la côte à fond perdu |
| Contact | `/contact` | courte ; formulaire prérempli par le configurateur |
| 404 | `/404` | « Cette page s'est égarée. Pas vos photos. » |

Version anglaise sous `/en/…`.

## Fiche : ce que le client doit fournir ou confirmer

**Mentions légales et confidentialité (à compléter)**
- Mentions légales : éditeur Michael Tourneur (EI, nom commercial MTCloud), 290 boulevard Jean Saint Martin, 06210 Mandelieu-la-Napoule, SIREN 850 275 496, TVA non applicable (art. 293 B du CGI), directeur de la publication Michael Tourneur. Hébergeur de la maquette : Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis (à remplacer par l'hébergeur du site final).
- Politique de confidentialité (RGPD) : données du formulaire, finalité, durée de conservation, droits.
- Crédits : les images marquées « Illustration générée » ont été créées par intelligence artificielle (Grok). La mention est à garder sur le site final.

**À confirmer**
- Prix de départ : la maquette affiche **275 €** (150 € d'installation et boîtier, +85 € pour 8 Go, +40 € pour 250 Go), comme les options du configurateur actuel. Le récapitulatif du site actuel indique 150 € tout compris : à trancher.
- « Depuis 2009 » : présenté comme le début de l'expérience en informatique (le SIREN est plus récent).
- Affichage du nom de Michael Tourneur et du téléphone (07 70 01 57 81) : repris des mentions légales du site actuel, où ils ne sont pas mis en avant.
- Numéro WhatsApp : le site actuel le cache derrière une vérification ; la maquette parle de « téléphone ou WhatsApp » sans lien.

**Retiré ou remplacé faute d'information**
- Photos réelles : aucune sur le site actuel (ni boîtier, ni artisan, ni installation). Le boîtier est dessiné en code, les scènes sont générées. Une vraie photo du boîtier et un portrait de Michael remplaceraient avantageusement le dessin et l'image de l'entrée (accueil, À propos).
- Avis et témoignages : aucun sur le site actuel, aucun affiché.
- Questions fréquentes : rédigées uniquement à partir des informations du site actuel (prix, appareils, accès partout, consommation, zone, suivi).
- Le tableau « Abonnement en ligne ou boîtier chez vous ? » reprend les constats de la page À propos actuelle ; à valider par le client.
- Fichiers et albums de démonstration (« Factures 2026 », « Vacances.zip », lien de partage) : fictifs, marqués « Illustration ».

## Images à régénérer en meilleure définition (conseillé)
Les images Grok ont été livrées entre 900 et 1 600 px, agrandies depuis des planches : elles sont un peu douces sur écran Retina. À régénérer en définition native pour le site final, dans l'ordre : `boitier-etagere` (page Le boîtier), `contact-ouverture`, `appel-village`, `apropos-visite`, `accueil-boite-souvenirs`, `apropos-atelier` (à refaire aussi pour montrer des outils d'informaticien plutôt qu'un marteau). L'image `services-ouverture`, trop floue, n'est plus utilisée.

## Défauts du site actuel relevés
- Message d'erreur du widget Cloudflare Turnstile visible sous le formulaire (`PUBLIC_TURNSTILE_SITE_KEY` non réglée).
- Prix de base contradictoires entre le récapitulatif (+0 €) et le configurateur (+85 €, +40 €).
- E-mail et WhatsApp cachés derrière des boutons, téléphone seulement dans les mentions légales.
- Badges en anglais sur la version française (DIGITAL CRAFTSMAN, Since 2009).

## À la mise en ligne définitive
- Retirer : `noindex` (balise robots dans `source/gabarits/commun.mjs`, en-tête X-Robots-Tag dans `vercel.json`), le texte « Maquette de présentation… » du pied de page, les mentions « à compléter », la simulation du formulaire (le brancher sur un vrai envoi), la mention « Prix du site actuel… » du configurateur une fois les prix confirmés.
- Garder : la mention « Illustration générée » sur chaque image créée par IA.

## Travailler sur la maquette
- Textes : `donnees/textes/fr.json` et `en.json` ; prix du configurateur : `donnees/config.json` ; souvenirs, FAQ, carte : `donnees/*.json`.
- Pages : `source/pages/*.mjs`, composants : `source/gabarits/composants.mjs`, style : `assets/css/site.css`, effets : `assets/js/site.js`.
- Générer les pages : `node outils/generer.mjs` (ne jamais modifier les `.html` à la main).
- Audit : `node _audit/audit.mjs` (standard), `--complet` pour la version finale. Rapport : `_audit/rapport/rapport.md`.

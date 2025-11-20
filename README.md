# MyBook

**MyBook** est une application web pour gérer sa collection personnelle de livres.  
Elle permet de savoir quels livres vous possédez, où ils sont rangés, à qui vous les avez prêtés et ce que vous avez déjà lu.

---

## Problème Résolu
Beaucoup de gens ont des livres chez eux mais ne savent pas :
- Quels livres ils possèdent  
- Où ils sont rangés  
- À qui ils les ont prêtés  
- Ce qu'ils ont déjà lu  

---

## Technologies Utilisées
- **Backend** : Laravel (PHP)  
- **Frontend** : React.js  
- **Base de données** : MySQL  
- **Gestion des rôles** : Laratrust  
- **Déploiement** : Docker + GitHub Actions, hébergement sur Render/Railway/Heroku

---

## Fonctionnalités Principales

### Gérer mes livres
- Ajouter un nouveau livre (titre, auteur, genre)  
- Voir la liste de tous mes livres  
- Chercher un livre par titre ou auteur  
- Modifier les informations d'un livre  
- Supprimer un livre  

### Gérer mes lectures
- Marquer un livre comme "À lire", "En cours", "Terminé" ou "Abandonné"  
- Noter un livre de 1 à 5 étoiles  
- Ajouter des commentaires  
- Voir l'historique de lecture  

### Gérer les prêts
- Noter à qui j'ai prêté un livre  
- Marquer la date de prêt et la date de retour  
- Recevoir des rappels pour les retards  

---

## Parcours Utilisateur

1. **Inscription et Connexion**  
   Créer un compte avec email et mot de passe. Réinitialiser le mot de passe si nécessaire.

2. **Gestion des livres**  
   Ajouter, filtrer et rechercher des livres facilement.

3. **Suivi de lecture**  
   Changer le statut d'un livre, noter et commenter.

4. **Gestion des prêts**  
   Ajouter des prêts, suivre les retards, visualiser les livres prêtés.

---

## Types d'utilisateurs

- **Utilisateur normal** : Gère uniquement sa collection, voit uniquement ses livres.  
- **Administrateur (optionnel)** : Peut voir tous les utilisateurs, gérer les paramètres, aider en cas de problème.

---

## Design et Apparence

- Pages principales :  
  - Page de connexion  
  - Tableau de bord  
  - Liste de livres  
  - Ajouter un livre  
  - Mon profil  
  - Statistiques personnelles  

- Design simple, agréable et responsive.

---

## Documentation Fournie

- Cahier des charges  
- Diagrammes UML : cas d'utilisation, classes, séquences  
- Maquettes Figma  
- Documentation API avec Postman  
- Guide de déploiement (Docker + GitHub Actions)

---

## Déploiement

- **Avec Docker** : Conteneurs pour backend (Laravel), frontend (React) et base de données (MySQL).  
- **Déploiement automatique** : Tests et déploiement via GitHub Actions à chaque push.  
- **Hébergement** : Render, Railway ou Heroku.

---

## Critères de Réussite Technique

- Temps de chargement : < 3 secondes  
- Mobile-friendly : 100%  
- Bugs bloquants : 0  

---


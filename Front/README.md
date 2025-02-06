# 📌 Tracker App - Frontend 🚀

Ce projet est une **application React Native** permettant de **suivre des livreurs en temps réel** via **WebSockets**. 🏍️📡  
Le front est connecté à un **serveur NestJS** qui gère la géolocalisation des livreurs.

---

## 🎯 Prérequis

Avant de commencer, assure-toi d’avoir installé :

- **Node.js** (v16 ou supérieur) - [Télécharger ici](https://nodejs.org/)
- **Expo CLI** (pour le développement mobile) :
  ```bash
  npm install -g expo-cli
📦 Installation du Projet

1️⃣ Clone le projet :

git clone https://github.com/MaxenceCrespel/POC-Geoloc
cd gps-tracker

2️⃣ Installe les dépendances :

npm install

3️⃣ Configurer l'URL du WebSocket
L'application utilise un fichier .env pour définir l'adresse du serveur WebSocket.

Créer un fichier .env à la racine du projet et ajoute :

REACT_APP_SERVER_URL=http://192.168.X.X:3000

    📌 Remplace 192.168.X.X par l’IP de ton serveur NestJS.
    👉 Si le serveur tourne sur le même PC, mets http://localhost:3000.

🚀 Lancer l'Application

1️⃣ Démarrer Expo :

npm start

2️⃣ Scanner le QR Code dans Expo Go (Android) ou utiliser un simulateur (iOS/Android).


🔥 FAQ
❓ Mon WebSocket ne se connecte pas

✅ Vérifie que le serveur NestJS tourne bien :

npm run start

✅ Assure-toi que REACT_APP_SERVER_URL pointe bien vers ton serveur.
✅ Si tu es sur un autre PC/téléphone, utilise 192.168.X.X, pas localhost.
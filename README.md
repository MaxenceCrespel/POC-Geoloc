# 🚀 Tracker App - Suivi des Livreurs en Temps Réel 📡🏍️  

Ce projet est une **application complète** permettant de **suivre la position des livreurs en temps réel** grâce à **WebSockets**.  

✅ **Backend** : API NestJS connectée à MongoDB pour gérer la position des livreurs.  
✅ **Frontend** : Application React Native affichant la carte et les positions mises à jour en direct.  

---

## 📌 Structure du Projet  

📂 **POC-Geoloc/**  
 ┣ 📂 **Back/** → API NestJS (Gestion des livreurs et positions)  
 ┣ 📂 **Front/** → Application React Native (Affichage des positions en temps réel)  
 ┣ 📜 **README.md** → Documentation générale  
 ┣ 📜 **Back/README.md** → Documentation détaillée du backend  
 ┗ 📜 **Front/README.md** → Documentation détaillée du frontend  

---

## 📦 Installation & Configuration  

### **1️⃣ Cloner le projet**
```bash
git clone https://github.com/MaxenceCrespel/POC-Geoloc
cd POC-Geoloc
```
2️⃣ Suivre les instructions spécifiques

📜 Backend (Back/README.md)  
📜 Frontend (Front/README.md)

Chaque partie contient ses propres instructions détaillées pour l'installation et le lancement.  

🚀 Lancer le Projet
Backend (NestJS)

📌 Accéder au dossier Back/ et suivre les instructions du README.md
```bash
cd Back  
npm install  
npm run start
```
Frontend (React Native)

📌 Accéder au dossier Front/ et suivre les instructions du README.md
```bash
cd Front  
npm install  
npm start
```
🌍 Accès depuis un Autre Appareil

Si tu veux tester depuis un autre PC ou téléphone, utilise l’IP locale du serveur NestJS dans le fichier .env du frontend.
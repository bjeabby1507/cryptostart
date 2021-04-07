# Cryptostart
## Start
Install the dependencies and devDependencies
### serveur
Se rendre dans le serveur avec :

```
cd server
```

Puis faire:
```
npm install
npm run dev
```
Dans le serveur, vous devez ajouter un fichier .env  comprenant le secret servant à signer le jwt, sous cette forme:
```
JWT_KEY = votresecret
```
Vous trouverez un example dansv `server/.env-example`
### client

Dans un autre terminal, se rendre dans le client avec 
```
cd client
```

puis faire:

```
npm install
npm run serve ou npm start
```

Se rendre à l'adresse donnée par le client pour voir le site
### Enregistrer-vous 
Sur la page Register : prénom, nom , email , username et password tous les champs sont obligatoire.
### Login
Page Login : Entrer son username et son password (à revoir)
Entrer : username : marie , password : 123456

# Navigation

Le site est fait en sorte que seul les personnes connectées peuvent accéder au contenu à l'aide la barre de navigation.
Sans être connecté, la navigation bar ne contient donc que les onglets "home" et "login".
Une fois connecté, tous les onglets existants de la navigation bar apparaîtront alors.
La barre de navigation est reponsive. Si l'écran devient trop petit, elle se positionnera alors sur la gauche, pour la faire apparaître il suffit de cliquer sur le logo situé en haut à gauche, mais il est aussi possible de naviguer entre les différentes en cliquant seulement sur les icônes représentant chaque catégorie.

Le footer est également responsive, les différents éléments doivent s'organiser en bas de page sans gêner les autres éléments.

## Deploiement
* [Heroku](https://cryptostarteslivv.herokuapp.com/)
* [Netlify](https://cryptostart.netlify.app/)

Utiliser le Dockerfile à la racine avec par exemple 
```
docker build -t venom-esilv .
```
puis 
```
docker run -e MONGO_ATLAS_URL="" -e JWT_KEY="votresecret" -e CMC_API_KEY="" -p 3000:3000 venom-esilv
```

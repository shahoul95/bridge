#ENVIRONNEMENT

Créer un fichier ".env" à la racine du projet.

Ajouter les environnements dans le fichier .env : 

ACCEPT=application/json

BRIDGE_VERSION=2021-06-01

CLIENT_ID=945a08c761804ac1983536463fc4a7f6

CLIENT_SECRET=YqUINh5B5pYlp7UzlENutajikoDX1gIW4pNObUCn9sEXLXGm39Mm1Yq8JKUFaHUD

USER_MAIL=john.doe@email.com

USER_PASSWORD=password123

BRIDGE_AUTHENTICATE=https://api.bridgeapi.io/v2/authenticate

BRIDGE_ITEM=https://api.bridgeapi.io/v2/items

BRIDGE_ACCOUNT=https://api.bridgeapi.io/v2/accounts

BRIDGE_TRANSACTION=https://api.bridgeapi.io/v2/transactions

#INSTALLER LES DEPENDANCES:
- npm i 

#LANCEMENT DU SCRIPT:
- node index.js

#LANCEMENT DU TEST:
commande : jest

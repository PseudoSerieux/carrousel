# carrousel
Carrousel en speed léger

Prérequis du projet :

- Nécessite python3

Commande pour lancer le front :
`python3 -m http.server`

Lien du front : http://localhost:8000/

⚠️ python3 n'est pas conseillé pour de la prod
Si besoin d'autre chose, privilégier nginx avec une config simple type:
```
server {
  listen 80;
  root /var/www/carousel;
  index index.html;
}
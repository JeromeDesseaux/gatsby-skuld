---
path: url-shortener-1
date: 2020-11-09T12:40:33.536Z
title: Créer un raccourcisseur d'URL avec FastAPI, Docker et Redis
description: Codons ensemble une API entièrement testée pour raccourcir vos URLs
  façon maison avec Python! Prêts? On y va!
image: ../assets/1-rjmxldthqvbsijkmoo5mag.jpeg
---
Connaissez-vous FastAPI ? Si la réponse à cette question est "non", alors je vous invite à vous rendre sur leur site web : <https://fastapi.tiangolo.com/>. FastAPI tire profit de scarlette et de asyncio. On retrouve donc une librairie qui permet de développer des APIs asynchrones et donc, d'augmenter leur capacité de traitement sur certains appels. Ca vous fait penser à un truc? Node.js .. Ah bon 🤣

L'intégralité du projet est accessible sur un de mes dépôts GitHub : <https://github.com/JeromeDesseaux/url_shortener>

# Environnement virtuel

Pour gérer les environnements, j'utilise personnellement pipenv (`pip install pipenv`) qui permet de créer simplement des environnements virtuels pour mes projets. Après avoir créé un nouveau dossier, placez-vous dans celui-ci et appelez pipenv : 

```bash
mkdir url_shortener
pipenv install fastapi pytest redis uvicorn
pipenv shell
```

On installe les librairies nécessaires au projet et on active l'environnement virtuel dans notre terminal. On est prêts! 

# Un premier serveur basique

Créons un fichier `main.py` dans lequel nous allons placer une première version de notre serveur (assez rudimentaire) simplement pour tester que l'installation fonctionne. 

Dans ce fichier, copions : 

```python
from fastapi import FastAPI

# Création du serveur principal
app = FastAPI()

@app.get('/')
def root():
    """ URL racine sans autre utilité que de dire un petit coucou aux utilisateurs """
    return {"message": "Welcome to our URL shortener app"}
```

A ce stade, si vous lancez votre serveur `uvicorn main:app --reload` et accédez à la page <http://localhost:8000> vous devriez tomber sur le json : `{"message": "Welcome to our URL shortener app"}`

Cool! Tout fonctionne. Maintenant, créons la logique de notre raccourcisseur d'URL. 

# La logique

Si tu es un bon développeur, tu sais qu'on ne code JAMAIS tout son code dans le même fichier. Ca parait bête, mais tout le monde n'est pas au courant ... alors histoire de bien faire les choses, on commence par créer un module qui contiendra notre code. Appelons-le `routers`. Dans ce dossier, on créé un fichier python qui contient notre code `shortener.py`. 

Ce que nous voulons, c'est envoyer une URL à notre service, qu'il la stocke en mémoire et nous fournisse une URL plus courte en échange. Lorsqu'on lui renvoie cette URL courte, il nous redirige vers le site en question. Nous avons donc besoin de deux services : 

1. Création et stockage des URLs longues
2. Redirection grâce aux URLs courtes

Créons d'abord une classe qui nous servira à représenter notre modèle auprès de FastAPI grâce à `pydantic`. Le truc magique avec FastAPI, c'est qu'il te créé une documentation automatiquement grâce à Pydantic! Alors autant en profiter! Tu vas voir, c'est absolument dingue. On créé cette classe dans un module dédié aux modèles du projet : `models/url.py`

```python
from pydantic import BaseModel


class Item(BaseModel):
    """ Définition de la classe de représentation des URL complètes et raccourcies """
    url: str
 # stocke l'url longue
    custom_target: str = None # stocke l'url raccourcie
```

Maintenant, on peut créer nos services REST 

```python
from fastapi import APIRouter
from models.url import Item
from starlette.responses import RedirectResponse
import redis
import uuid
import os


router = APIRouter()
r = redis.Redis(host='localhost', port=6379)


@router.post('/shortify')
def shorten_url(item: Item):
    """ 
    Raccourci une URL passée en paramètre. 
    Retourne la valeur contenue dans REDIS si déjà existante, 
    en créé une nouvelle et la stocke sinon 
    """
    url = item.url
    redis_url = r.get(url)
    if redis_url is None:
        shorten_url = item.custom_target or str(uuid.uuid4())[-6:]
        if r.mset({url: shorten_url}):
            return {"url": url, "short": shorten_url}
        return {"message": "failed"}
    return {"message": "URL already exists", "short": redis_url}


@router.get("/{short}")
def redirect_url(short: str):
    """
    Redirige les utilisateurs vers le site initial avant raccourcissement de l'URL
    """
    for key in r.keys():
        if r.get(key).decode("utf8") == short:
            return RedirectResponse(url=key.decode("utf8"))
    return {"message": "URL not defined"}
```

Une pause s'impose ! `shorten_url` récupère un Item (et map la requête automatiquement avec le json envoyé au serveur! Encore un truc magique). Si l'URL passée dans l'item est déjà contenue dans Redis, on renvoie sa valeur courte. Sinon, on en créé une nouvelle. En cas de problème côté redis, on retourne une erreur. 

`redirect_url` quant à elle, récupère simplement l'url longue correspondante dans Redis, et réalise une redirection HTTP vers celle-ci. 

On peut maintenant nettoyer notre fichier `main.py` : 

```python
from fastapi import FastAPI
from routers.shortener import router as shortener_router

# Création du serveur principal
app = FastAPI()

# Ajout des routes du raccourcisseur d'URL
app.include_router(shortener_router)
```

Exécutons notre projet et testons le ! 

# Les tests

Rendez-vous sur <http://localhost:8000/docs> et testez directement l'API depuis une interface web Swagger. Sinon, on peut exécuter les commandes via CURL : 

```bash
curl -X POST "http://localhost:8000/shortify" -H  "accept: application/json" -H  "Content-Type: application/json" -d "{\"url\":\"https://google.fr\"}"

# réponse : 
#{
#  "url": "https://google.fr",
#  "short": "a62470"
#}
```

Cette commande doit vous retourner un json contenant la version raccourcie de l'URL. Copiez ce morceau et rentrez l'URL suivante dans votre navigateur : 

<http://localhost:8000/{URL_COURTE}> en replaçant {URL_COURTE} par la valeur de la variable. Dans mon cas : <http://localhost:8000/a62470>. Si vous êtes redirigé vers google : félicitations, vous venez de coder votre premier raccourcisseur d'URL ! 

# Suite ?

Dans un prochain article, nous parlerons de comment déployer ce projet avec Docker et d'automatiser le processus de création d'image. Nous verrons également comment tester votre projet de façon automatique et d'éviter ainsi les problèmes de régression. 

Stay tuned!
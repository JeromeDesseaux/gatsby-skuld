---
path: python-3-9
date: 2020-10-07T12:04:50.593Z
title: Quoi de neuf dans python 3.9
description: Deux nouveaux opérateurs pour les dictionnaires ! On découvre ça ensemble.
image: ../assets/1-rjmxldthqvbsijkmoo5mag.jpeg
---
Python n'arrête plus sa progression dans le coeur des développeurs et dans les différentes entreprises pour son côté versatile et sa simplicité de mise en oeuvre. 

Les développeurs de Python l'ont bien compris, et fournissent version après version des nouveautés plutôt appréciées. Cette fois-ci, Python 3.9 nous apporte des opérateurs bien utiles de mise à jour des les dictionnaires. 

# Comment mettre à jour un dictionnaire en Python < 3.9

Comme vous le savez, un dictionnaire est (au contraire d'une liste) non-ordonné. On identifie les éléments par une clé plutôt que par un index. Pour mettre à jour une valeur avec une clé connue, rien de plus simple me direz-vous : 

```python
mon_dictionaire['macle'] = ma_nouvelle_valeur
```

Et si vous avez plusieurs clés à modifier? Pire encore! Si vous aviez un dictionnaire qui contenait les nouvelles valeurs à modifier dans votre dictionnaire source? Python fournissait déjà une méthode `update()` sur les dictionnaires :


```python
mon_dictionaire.update(mes_nouvelles_valeurs)
```

Problème : Ceci écrase `mon_dictionnaire` avec les nouvelles valeurs. Si vous souhaitiez garder votre dictionnaire initial, il faut en réaliser une copie. L'opération de mise à jour devient donc plus fastidieuse : 

```python
tmp = mon_dictionnaire.copy()
tmp.update(mes_nouvelles_valeurs)
```

Il existe cependant une autre solution, mais qui est loin d'être sexy... l'`unpacking`. 

```python
nouveau_dictionnaire = {**mon_dictionnaire, **mes_nouvelles_valeurs}
```

Python se veut accessible aux débutants. Vous accorderez que ce n'est pas la façon la plus lisible de procéder. 

# Python 3.9 : Les opérateurs `|` et `|=`

Avec cette nouvelle version, il est possible de fusionner un dictionnaire directement de cette façon : 

```python
mon_dictionnaire = {'a':1, 'b':2}
mes_nouvelles_valeurs = {''b:3, 'd':4}
nouveau_dictionnaire = mon_dictionnaire | mes_nouvelles_valeurs
print(nouveau_dictionnaire)
# {'a':1, 'b':3, 'd':4}
```
Et de mettre à jour : 

```python
mon_dictionnaire = {'a':1, 'b':2}
mes_nouvelles_valeurs = {''b:3, 'd':4}
mon_dictionnaire |= mes_nouvelles_valeurs
print(mon_dictionnaire)
# {'a':1, 'b':3, 'd':4}
```

# Ajouts supplémentaires et mentions honorables : 

Python 3.9 simplifie le retrait de suffixes et préfixes de chaines de caractères avec l'ajout des fonctions `str.removeprefix(prefix)` et `str.removesuffix(suffix)`

# En conclusion 

Pas de grandes nouveautés ici, mais on voit bien la volonté de Python de devenir plus accessible. De faire des efforts en suivant les demandes de la communautés les plus récurrentes. Ce langage devient aujourd'hui un des plus importants du moment avec son usage notamment en intelligence artificielle et traitement de données. J'espère le voir se développer dans un futur (très) proche dans le coeur des entreprises <3

 
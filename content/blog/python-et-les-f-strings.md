---
path: f-strings
date: 2020-09-19T11:31:00.732Z
title: Python et les f-strings
description: Former des chaines de caractères en Python a longtemps été
  compliqué. Aujourd'hui, python 3.6 apporte les f-strings. Un comportement
  simple mais tellement utile au quotidien.
image: ../assets/1-rjmxldthqvbsijkmoo5mag.jpeg
---
# Un petit cours d'histoire

Il y a encore peu, sous Python 2 puis 3 (<3.6), on pouvait formater une chaine de caractères à l'aide de la méthode `format()` ou bien de l'opérateur `%`. Ceci donnait, par exemple 

```python
utilisateur = "Jérôme"
ma_chaine = "Bonjour %s" % utilisateur 
ma_chaine2 = "Bonjour %s".format(utilisateur)
```
Les deux appels mènent au même résultat : `Bonjour Jérôme`. Pour les adorateurs de l'optimisation, l'usage de l'opérateur `%` était de l'ordre de 30% plus rapide que l'appel à `format()`. 

# Vient le temps des f-strings
Python 3.6 apporte les `f-strings`. Rien de bien nouveau puisque vous avez sans doute pu croiser leur équivalent dans de nombreux languages. Concrètement, les f-strings permettent d'exploiter directement la variable dans la chaine. Par exemple : 

```python
utilisateur = "Jérôme"
ma_chaine = f"Bonjour {utilisateur}" 
```

Plusieurs avantages à cela :
* Le code gagne en lisibilité. Avec l'usage de `%s` à répétition, il devenait vite facile de se perdre dans les différentes variables affichées. 
* L'exécution est **beaucoup** plus rapide! Les f-strings apportent un gain de près de 50% de temps d'exécution par rapport à l'opérateur `%` 

# Conclusion
Un (tout) petit article sur une (toute) petite fonctionnalité mais qui apporte beaucoup au quotidien pour les développeurs Python. Si votre projet tourne sous Python 3.6 et ultérieurs, n'hésitez pas à exploiter cet avantage :D  
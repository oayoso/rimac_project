<!--
title: 'Proyecto Typescript/AWS'
description: 'Este proyecto contiene lambda utilizando Typescript junto a Serverless Framework.'
layout: Doc
framework: v3
platform: AWS
language: nodeJS
-->

## use

### Deployment

```
$ serverless deploy
```

Despues de deployar:

```bash
Deploying aws-project-dev-api to stage dev (us-east-1)

#✔ Service deployed to stack aws-project-dev-api (152s)

curl --location --request GET 'https://hdhkhjufuj.execute-api.us-east-1.amazonaws.com/list'

- curl --location --request POST 'https://hdhkhjufuj.execute-api.us-east-1.amazonaws.com/create' \
--header 'Content-Type: application/json' \
--data-raw '{
    "nombre": "Luke Skywalker",
    "altura": "172",
    "masa": "77",
    "colorPelo": "blond",
    "colorPiel": "fair",
    "colorOjos": "blue",
    "anioNacimiento": "19BBY",
    "genero": "male",
    "mundoMatal": "https://swapi.py4e.com/api/planets/1/",
    "pelicula": [
        "https://swapi.py4e.com/api/films/1/", 
        "https://swapi.py4e.com/api/films/2/", 
        "https://swapi.py4e.com/api/films/3/", 
        "https://swapi.py4e.com/api/films/6/", 
        "https://swapi.py4e.com/api/films/7/"
    ],
    "especies": [
        "https://swapi.py4e.com/api/species/1/"
    ],
    "vehiculos": [
        "https://swapi.py4e.com/api/vehicles/14/", 
        "https://swapi.py4e.com/api/vehicles/30/"
    ],
    "navesEstelares": [
        "https://swapi.py4e.com/api/starships/12/", 
        "https://swapi.py4e.com/api/starships/22/"
    ],
    "creado": "2014-12-09T13:50:51.644000Z",
    "editado": "2014-12-20T21:17:56.891000Z",
    "URL": "https://swapi.py4e.com/api/people/1/"
}'
```
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
### Implementacion

<<<<<<< HEAD
Para esta este caso se utilizo el endpoint de swapi de people
donde se tomo como ejemplos los atributos

``` 
HTTP 200 OK
Content-Type: application/json
Vary: Accept
Allow: GET, HEAD, OPTIONS

{
    "name": "Luke Skywalker", 
    "height": "172", 
    "mass": "77", 
    "hair_color": "blond", 
    "skin_color": "fair", 
    "eye_color": "blue", 
    "birth_year": "19BBY", 
    "gender": "male", 
    "homeworld": "https://swapi.py4e.com/api/planets/1/", 
    "films": [
        "https://swapi.py4e.com/api/films/1/", 
        "https://swapi.py4e.com/api/films/2/", 
        "https://swapi.py4e.com/api/films/3/", 
        "https://swapi.py4e.com/api/films/6/", 
        "https://swapi.py4e.com/api/films/7/"
    ], 
    "species": [
        "https://swapi.py4e.com/api/species/1/"
    ], 
    "vehicles": [
        "https://swapi.py4e.com/api/vehicles/14/", 
        "https://swapi.py4e.com/api/vehicles/30/"
    ], 
    "starships": [
        "https://swapi.py4e.com/api/starships/12/", 
        "https://swapi.py4e.com/api/starships/22/"
    ], 
    "created": "2014-12-09T13:50:51.644000Z", 
    "edited": "2014-12-20T21:17:56.891000Z", 
    "url": "https://swapi.py4e.com/api/people/1/"
}
```

Estos atributos fueron traducidos para que al momento de obtener(un arreglo) o insertar 
data se utiliza
```
{
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
}
```

Para este caso se esta utilizando:
```
DynamoDB donde la Tabla se llama Swapi 
```


Despues de deployar:

```bash
Deploying aws-project-dev-api to stage dev (us-east-1)

#✔ Service deployed to stack aws-project-dev-api (152s)

A continuacion los endpoint para consultar para listar o ingresar data son los siguientes

curl --location --request GET 'https://hdhkhjufuj.execute-api.us-east-1.amazonaws.com/list'
[
    {
        "colorPelo": "blond",
        "nombre": "Luke Skywalker",
        "masa": "77",
        "pelicula": [
            "https://swapi.py4e.com/api/films/1/",
            "https://swapi.py4e.com/api/films/2/",
            "https://swapi.py4e.com/api/films/3/",
            "https://swapi.py4e.com/api/films/6/",
            "https://swapi.py4e.com/api/films/7/"
        ],
        "vehiculos": [
            "https://swapi.py4e.com/api/vehicles/14/",
            "https://swapi.py4e.com/api/vehicles/30/"
        ],
        "altura": "172",
        "anioNacimiento": "19BBY",
        "mundoMatal": "https://swapi.py4e.com/api/planets/1/",
        "URL": "https://swapi.py4e.com/api/people/1/",
        "navesEstelares": [
            "https://swapi.py4e.com/api/starships/12/",
            "https://swapi.py4e.com/api/starships/22/"
        ],
        "colorOjos": "blue",
        "colorPiel": "fair",
        "editado": "2014-12-20T21:17:56.891000Z",
        "especies": [
            "https://swapi.py4e.com/api/species/1/"
        ],
        "creado": "2014-12-09T13:50:51.644000Z",
        "id": "417eee9d-68a2-4ca4-bfe2-4761afe1da23",
        "genero": "male"
    }
]
=======
Despues de deployar:

```bash
Deploying aws-project-dev-api to stage dev (us-east-1)

#✔ Service deployed to stack aws-project-dev-api (152s)

curl --location --request GET 'https://hdhkhjufuj.execute-api.us-east-1.amazonaws.com/list'
>>>>>>> 81ed6a6e8179c8b09a4edf5e5f3016e28846978a

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

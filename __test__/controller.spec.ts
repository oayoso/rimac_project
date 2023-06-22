import {RimacController} from "../src/controller/RimacController";
import {RimacService} from "../src/service/RimacService";
import {RimacRepository} from "../src/repository/RimacRepository";
import {SwapiModel} from "../src/model/SwapiModel";

describe('Controller', () => {
    // let putSy;
    test('Register', async ()=> {
        // Prepare
        jest.spyOn(RimacRepository.prototype, 'list').mockImplementation(() => {
            return Promise.resolve([
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
                    "id": "2d78c286-08d9-4686-9b55-1726050a77d0",
                    "genero": "male"
                }
            ] as unknown as SwapiModel[])
        })

        const controller = new RimacController({
            service: new RimacService({
                repository: new RimacRepository()
            })
        })

        // Execute
        const { statusCode, body } = await controller.list();

        // Validate
        expect(statusCode).toEqual(200);
        expect(body).toEqual("[{\"colorPelo\":\"blond\",\"nombre\":\"Luke Skywalker\",\"masa\":\"77\",\"pelicula\":[\"https://swapi.py4e.com/api/films/1/\",\"https://swapi.py4e.com/api/films/2/\",\"https://swapi.py4e.com/api/films/3/\",\"https://swapi.py4e.com/api/films/6/\",\"https://swapi.py4e.com/api/films/7/\"],\"vehiculos\":[\"https://swapi.py4e.com/api/vehicles/14/\",\"https://swapi.py4e.com/api/vehicles/30/\"],\"altura\":\"172\",\"anioNacimiento\":\"19BBY\",\"mundoMatal\":\"https://swapi.py4e.com/api/planets/1/\",\"URL\":\"https://swapi.py4e.com/api/people/1/\",\"navesEstelares\":[\"https://swapi.py4e.com/api/starships/12/\",\"https://swapi.py4e.com/api/starships/22/\"],\"colorOjos\":\"blue\",\"colorPiel\":\"fair\",\"editado\":\"2014-12-20T21:17:56.891000Z\",\"especies\":[\"https://swapi.py4e.com/api/species/1/\"],\"creado\":\"2014-12-09T13:50:51.644000Z\",\"id\":\"2d78c286-08d9-4686-9b55-1726050a77d0\",\"genero\":\"male\"}]")
    });

    test('List', async () => {
        // Prepare
        jest.spyOn(RimacRepository.prototype, 'create').mockImplementation(() => {
            return Promise.resolve(
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
                    "id": "2d78c286-08d9-4686-9b55-1726050a77d0",
                    "genero": "male"
                } as unknown as SwapiModel)
        })

        const controller = new RimacController({
            service: new RimacService({
                repository: new RimacRepository()
            })
        })

        // Execute
        const { statusCode, body } = await controller.create(
            {
                body: JSON.stringify(
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
                        "genero": "male"
                    }
                )
            }
        );

        // Validate
        expect(statusCode).toEqual(200);
        expect(body).toEqual("{\"id\":\"2d78c286-08d9-4686-9b55-1726050a77d0\"}")
    });
});
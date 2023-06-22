export class SwapiModel {
    id: string;
    nombre: string;
    altura: string;
    masa: string;
    colorPelo: string;
    colorPiel: string;
    colorOjos: string;
    anioNacimiento: string;
    genero: string;
    mundoMatal: string;
    pelicula: string[];
    especies: string[];
    vehiculos: string[];
    navesEstelares: string[];
    creado: Date;
    editado: Date
    URL: string;

    constructor(data?: Partial<SwapiModel>){
        if (data) {
            Object.assign(this, data);
        }
    }
}
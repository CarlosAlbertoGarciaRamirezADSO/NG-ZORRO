import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServeService {

  constructor() { }


  users: any = [
    {
      "nombre": "Ana",
      "apellido": "Martínez",
      "sexo": "femenino",
      "edad": 25,
      "email": "ana.martinez@example.com"
    },
    {
      "nombre": "Luis",
      "apellido": "Hernández",
      "sexo": "masculino",
      "edad": 32,
      "email": "luis.hernandez@example.com"
    },
    {
      "nombre": "Marta",
      "apellido": "Lopez",
      "sexo": "femenino",
      "edad": 29,
      "email": "marta.lopez@example.com"
    },
    {
      "nombre": "Carlos",
      "apellido": "García",
      "sexo": "masculino",
      "edad": 22,
      "email": "carlos.garcia@example.com"
    },
    {
      "nombre": "Laura",
      "apellido": "Pérez",
      "sexo": "femenino",
      "edad": 34,
      "email": "laura.perez@example.com"
    },
    {
      "nombre": "Javier",
      "apellido": "Sánchez",
      "sexo": "masculino",
      "edad": 27,
      "email": "javier.sanchez@example.com"
    },
    {
      "nombre": "Elena",
      "apellido": "Rodríguez",
      "sexo": "femenino",
      "edad": 31,
      "email": "elena.rodriguez@example.com"
    },
    {
      "nombre": "David",
      "apellido": "Gómez",
      "sexo": "masculino",
      "edad": 40,
      "email": "david.gomez@example.com"
    },
    {
      "nombre": "Sofia",
      "apellido": "Morales",
      "sexo": "femenino",
      "edad": 28,
      "email": "sofia.morales@example.com"
    },
    {
      "nombre": "Manuel",
      "apellido": "Fernández",
      "sexo": "masculino",
      "edad": 36,
      "email": "manuel.fernandez@example.com"
    },
    {
      "nombre": "Lucía",
      "apellido": "Ramírez",
      "sexo": "femenino",
      "edad": 24,
      "email": "lucia.ramirez@example.com"
    },
    {
      "nombre": "Pedro",
      "apellido": "Alonso",
      "sexo": "masculino",
      "edad": 33,
      "email": "pedro.alonso@example.com"
    },
    {
      "nombre": "Carmen",
      "apellido": "Núñez",
      "sexo": "femenino",
      "edad": 26,
      "email": "carmen.nunez@example.com"
    },
    {
      "nombre": "Mario",
      "apellido": "Delgado",
      "sexo": "masculino",
      "edad": 35,
      "email": "mario.delgado@example.com"
    },
    {
      "nombre": "Patricia",
      "apellido": "Ortiz",
      "sexo": "femenino",
      "edad": 30,
      "email": "patricia.ortiz@example.com"
    },
    {
      "nombre": "Fernando",
      "apellido": "Torres",
      "sexo": "masculino",
      "edad": 42,
      "email": "fernando.torres@example.com"
    },
    {
      "nombre": "Isabel",
      "apellido": "Rojas",
      "sexo": "femenino",
      "edad": 29,
      "email": "isabel.rojas@example.com"
    },
    {
      "nombre": "Antonio",
      "apellido": "Vega",
      "sexo": "masculino",
      "edad": 38,
      "email": "antonio.vega@example.com"
    },
    {
      "nombre": "Cristina",
      "apellido": "Castro",
      "sexo": "femenino",
      "edad": 27,
      "email": "cristina.castro@example.com"
    },
    {
      "nombre": "Pablo",
      "apellido": "Molina",
      "sexo": "masculino",
      "edad": 31,
      "email": "pablo.molina@example.com"
    }
  ];
  

  getUsers(){
    return this.users
  }
}

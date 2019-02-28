import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PuntuacionService {
  puntuacion: 10000;
  ejerciciosRealizados = 0;
  constructor() { 
    this.puntuacion = 10000;
  }
}

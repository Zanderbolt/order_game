import { Component, OnInit } from '@angular/core';
import { PuntuacionService } from '../../puntuacion.service';


@Component({
  selector: 'app-game08',
  templateUrl: './game08.component.html',
  styleUrls: ['./game08.component.css']
})
export class Game08Component implements OnInit {

  actualNumber = 0;
  list: number[] = [1, 2, 3, 4];
  userOrder: number[] = [0, 0, 0, 0];
  correctOrder: number[] = [4, 1, 2, 3];

  bloquearBotones = false;
  numeroIntentos = 10;

  constructor(private puntuacionService: PuntuacionService) { }

  clickCard(selectedCard: number) {
    if (this.actualNumber < 4) {
      if (this.userOrder[selectedCard - 1] == 0) {
        this.userOrder[selectedCard - 1] = this.actualNumber + 1;
        this.actualNumber++;
      }
    }
  }

  checkScore() {
    let success = true;
    for (let i = 0; i < 4; i++) {
      if (this.correctOrder[i] != this.userOrder[i]) {
        success = false;
        this.puntuacionService.puntuacion -= 100;
        break;
      }
    }
    if (success) {
      alert("Success!");
      this.bloquearBotones = true;
      this.puntuacionService.ejerciciosRealizados++;
    }
    else {
      this.numeroIntentos--;
      alert("Incorrecto, te quedan " + this.numeroIntentos + " Intentos")
      if (this.numeroIntentos == 0) {
        this.bloquearBotones = true;
        this.puntuacionService.ejerciciosRealizados++;
      }
    }
  }

  resetCards() {
    this.actualNumber = 0;
    this.userOrder = [0, 0, 0, 0];
  }

  ngOnInit() {
  }

}

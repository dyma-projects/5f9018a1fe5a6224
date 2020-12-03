import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice1',
  templateUrl: './exercice1.component.html',
  styleUrls: ['./exercice1.component.css']
})
export class Exercice1Component implements OnInit {
  compteur: number;
  result: number;

  constructor() {
  }

  updateCompteur(counterValue: number): void {
    this.result = counterValue;
  }

  ngOnInit() {
    this.compteur = 0;
  }

}

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-exercice1-enfant',
  templateUrl: './exercice1-enfant.component.html',
  styleUrls: ['./exercice1-enfant.component.css']
})
export class Exercice1EnfantComponent implements OnInit {
  @Output()
  public newcompteur: EventEmitter<number> = new EventEmitter<number>();

  @Input()
  public compteur: number;

  constructor() {
  }

  incrementeValue($event: MouseEvent): void {
    this.compteur = this.compteur + 1;
    this.emitNewCompteur(this.compteur);
  }

  desincrementeValue($event: MouseEvent): void {
    this.compteur = this.compteur - 1;
    this.emitNewCompteur(this.compteur);
  }

  emitNewCompteur(compteur: number): void {
    this.newcompteur.emit(compteur);
  }
  ngOnInit() {

  }

}

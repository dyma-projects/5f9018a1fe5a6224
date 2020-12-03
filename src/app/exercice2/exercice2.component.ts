import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-exercice2',
  templateUrl: './exercice2.component.html',
  styleUrls: ['./exercice2.component.css']
})
export class Exercice2Component implements OnInit {
  public valeur: string;
  @ViewChild('f') public el: ElementRef;

  constructor() {
  }
  viewInputValeur() {
    console.log(this.el.nativeElement);
    console.log(this.el.nativeElement.value);
    this.valeur = this.el.nativeElement.value;
  }
  ngOnInit() {
  }

}

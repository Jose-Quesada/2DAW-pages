import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  template: `<h2>HOla mundo</h2>

            <p> Texto: {{ titulo }}</p>
            <p> Contador: {{ contador }}</p>

            <button (click)="modificar(1)" >+1</button>
            <button (click)="resetearContador()">Reset</button>
            <button (click)="modificar(-1)">-1</button>`,
  })

export class ContadorComponent  {
  constructor() { }

  public titulo: string = 'Segundo componente de de Angular';
  public contador: number = 25;

  modificar ( valor: number ):void {
    this.contador+=valor;
  }

  resetearContador():void {
    this.contador=25;
  }


}

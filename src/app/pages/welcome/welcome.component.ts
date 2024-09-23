import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { CommonModule } from '@angular/common';
import { NzIconModule } from 'ng-zorro-antd/icon';
interface Person {
  key: string;
  name: string;
  age: number;
  address: string;
}
@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [
    CommonModule,
    NzTableModule,
    NzPaginationModule,
    NzIconModule
],
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})

export class WelcomeComponent implements OnInit {

  @Input() users:any[]= []
  @Input() configuracion:any = []
  @Output() editar = new EventEmitter<any>();


  cantidad_producto_mostrados: number = 5;
  datos_aux: any [] = []
  paginaActual: number = 1 

  constructor() { }

  // ngOnChanges(changes: any): void {
  //   if (changes.users) {
  //     this.actualizaPagina()
  //     console.log(changes);
  //   }
  // }

  ngOnInit() { 
    this.actualizaPagina()
  }

  Edit(dato: any, key:string): void {
    this.editar.emit({dato,key});
  }

  delete(email:string){
    console.log(this.users);
    this.users = this.users.filter(user => user.email !== email);
    this.actualizaPagina()
  }


  actualizaPagina() {

    const inicio = (this.paginaActual - 1) * this.cantidad_producto_mostrados;
    this.datos_aux = this.users.slice(inicio, inicio + this.cantidad_producto_mostrados);
    console.log(this.datos_aux);
  }

  newPage(e:any){
    this.paginaActual = e 
    console.log(e);
    this.actualizaPagina();
  }

  retroceder(){
    if (this.paginaActual>1) {
      console.log(this.paginaActual);
      this.paginaActual--
      console.log(this.paginaActual);
      this.actualizaPagina()
    }
  }

}

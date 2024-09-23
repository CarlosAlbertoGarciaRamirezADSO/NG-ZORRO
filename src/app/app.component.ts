import { Component, ViewChild, viewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzTableModule } from 'ng-zorro-antd/table';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { ServeService } from './serve.service';
import { ModalComponent } from './modal/modal.component';
import { log } from 'ng-zorro-antd/core/logger';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, 
            RouterLink, 
            RouterOutlet, 
            NzIconModule, 
            NzLayoutModule, 
            NzMenuModule,
            NzTableModule,
            WelcomeComponent,
            ModalComponent,
  ],
  
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild("modal", { static: false }) modalComponent!: ModalComponent;
  @ViewChild("welcome", { static: false }) tabla!: WelcomeComponent;

  isCollapsed = false;

  users: any [] = []
  modalDatos: any = {}
  
  config:any = {
    columns: [
      {key:'nombre', label:"Nombre", type: "text"},
      {key:'apellido', label:"Apellido",type: "text"},
      {key:'edad', label:"Edad", type: "text"},
      {key:'email', label:"Correo", type: "text"},
      {key:'edit', label:"Botonera", icon:'edit',type: "button", },
      {key:'delete', label:"Botonera", icon:'delete',type: "button", },
      {key:'boton2', label:"Botonera", icon:'down',type: "button", },

    ]
  };


  
  constructor(service: ServeService){
    this.users = service.getUsers()
  }

  escuchar(e:any){
    console.log(e);
    switch (e.key) {
      case 'edit':
        console.log("datos ", e); 
        this.modalDatos = e.dato
        this.modalComponent.showModal()
        console.log(e.dato);
        
        break;

      case 'delete':
        this.tabla.delete(e.dato.email);
        alert("Usuario eliminado"); 

        break
      default:
        break;
    }
  }
}

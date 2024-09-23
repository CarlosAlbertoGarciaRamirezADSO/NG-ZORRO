import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { log } from 'ng-zorro-antd/core/logger';
import { NzModalModule } from 'ng-zorro-antd/modal';
@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [
    NzModalModule,
    CommonModule
  ],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {

  usersModal: any = {}
  isVisible = false;

  constructor() {}

  showModal(): void {
    console.log(this.usersModal);
    this.isVisible = true;
  }


  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }
}

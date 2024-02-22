import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  @Input() navToggle!: boolean;
  @Output() navToggleChange = new EventEmitter<boolean>();

  openMenu() {
    this.navToggle = !this.navToggle;
    this.emitNavToggle();
  }

  emitNavToggle() {
    this.navToggleChange.emit(this.navToggle);
  }
}

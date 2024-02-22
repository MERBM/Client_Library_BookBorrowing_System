import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  @Input() navToggle: boolean = false;

  constructor() {
    console.log(this.navToggle);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(this.navToggle);
    console.log('changes');
    if (changes['navToggle']) {
      console.log('navToggle changed:', changes['navToggle'].currentValue);
    }
  }
}

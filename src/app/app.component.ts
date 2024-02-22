import { Component, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'library-app';
  sidebarShown: boolean = true;

  ngOnChange(changes: SimpleChange) {
    console.log(changes);
  }

  handleNavToggleChange(newNavToggle: boolean) {
    this.sidebarShown = newNavToggle;
  }
}

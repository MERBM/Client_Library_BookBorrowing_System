import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { BookComponent } from '../../shared/components/book/book.component';
import { BookRecordComponent } from '../../shared/components/book-record/book-record.component';
import { MaterialRoutingModule } from './material-routing.module';
import { MatTableModule } from '@angular/material/table';


const materialComponent = [
  MatButtonModule,
  MatButtonToggleModule,
  MatIconModule,
  MatBadgeModule,
  MatProgressSpinnerModule,
  MatToolbarModule,
  MatSidenavModule,
  MatMenuModule,
  MatListModule,
  MatDividerModule,MatTableModule
];

@NgModule({
  declarations: [
    BookComponent,
    BookRecordComponent
  ],
  imports: [CommonModule,materialComponent, MaterialRoutingModule],
  exports: [CommonModule,materialComponent],
})
export class MaterialModule {}

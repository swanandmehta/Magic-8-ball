import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { MagicComponent } from './component/magic/magic.component';
import { InputComponent } from './component/input/input.component';
import { MainComponent } from './component/main/main.component';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    MagicComponent,
    InputComponent,
    MainComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatInputModule,
    FormsModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class DashboardModule { }

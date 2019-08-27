import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersLoginComponent } from './users-login/users-login.component';
import {MatMenuModule,MatButtonModule,MatIconModule,MatCardModule,MatInputModule, MatSnackBarModule, MatTableModule, MatListModule,MatPaginatorModule,MatCheckboxModule} from '@angular/material';
import {FormsModule} from '@angular/forms';
import {WebcamModule} from 'ngx-webcam';
@NgModule({
  declarations: [
    AppComponent,
    UsersLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatMenuModule,
    MatCardModule,
    MatButtonModule,
    WebcamModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

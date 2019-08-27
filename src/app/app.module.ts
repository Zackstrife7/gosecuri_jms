import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersLoginComponent } from './users-login/users-login.component';
import {MatMenuModule,MatListModule,MatButtonModule,MatCardModule, MatInputModule,MatCheckboxModule,MatSelectModule} from '@angular/material';
import {FormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
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
    FormsModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatInputModule,
    MatSelectModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

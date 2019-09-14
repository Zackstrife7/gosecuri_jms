import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersLoginComponent } from './users-login/users-login.component';
import {MatMenuModule,MatListModule,MatButtonModule,MatCardModule,MatInputModule,MatCheckboxModule,MatSelectModule,MatFormFieldModule} from '@angular/material';
import {FormsModule} from '@angular/forms';
import {WebcamModule} from 'ngx-webcam';
// Firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import { AgentProfileComponent } from './agent-profile/agent-profile.component';
//Ng-Bootstrap
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    UsersLoginComponent,
    AgentProfileComponent
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
    MatListModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    MatInputModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent,AgentProfileComponent,UsersLoginComponent]
})
export class AppModule { }

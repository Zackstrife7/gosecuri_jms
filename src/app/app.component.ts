
import {Component, OnInit} from '@angular/core';
import {Subject} from 'rxjs';
import {Observable} from 'rxjs';
import {WebcamImage, WebcamInitError, WebcamUtil} from 'ngx-webcam';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'gosecuri-api';
    // creation d'un form bind
    // form: FormGroup;
   // latest snapshot
   public webcamImage: WebcamImage = null;
   // webcam snapshot trigger
  private trigger: Subject<void> = new Subject<void>();

  // function
  public get triggerObservable(): Observable<void> {
    return this.trigger.asObservable();
  }
  // take a snap of ur pic
  public triggerSnapshot(): void {
    this.trigger.next();
  }
  // check the console after snap to see the snap information
  public handleImage(webcamImage: WebcamImage): void {
    console.info('received webcam image', webcamImage);
    this.webcamImage = webcamImage;
  }
  


    // constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router, private snackBar: MatSnackBar) {
    //   this.form = formBuilder.group({
    //     // creation de 2 contorle pour email et pw
    //     email: ["", Validators.email],
    //     password: ["", Validators.required]
    //   })
    // }
    // login() {
    //   if (this.form.valid) {
    //     this.authService.login(this.form.value).subscribe(
    //       loginSucess => {
    //         this.router.navigate(['/users']),
    //         this.snackBar.open("Authentification réussie", 'OK', {
    //           duration: 5000,
    //         })
    //       }, loginError => {
    //         this.snackBar.open("Authentification échouée", 'OK', {
    //           duration: 5000,
    //         })
    //       }
    //     )
    //   }
    // }

  


}

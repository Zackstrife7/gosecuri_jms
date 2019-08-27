
import {Component, OnInit} from '@angular/core';
import {Subject} from 'rxjs';
import {Observable} from 'rxjs';
import {WebcamImage, WebcamInitError, WebcamUtil} from 'ngx-webcam';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'gosecuri-api';

   // latest snapshot
   public webcamImage: WebcamImage = null;
   // webcam snapshot trigger
  private trigger: Subject<void> = new Subject<void>();

  // function
  public get triggerObservable(): Observable<void> {
    return this.trigger.asObservable();
  }
  public triggerSnapshot(): void {
    this.trigger.next();
  }
  // check the console after snap to see the snap information
  public handleImage(webcamImage: WebcamImage): void {
    console.info('received webcam image', webcamImage);
    this.webcamImage = webcamImage;
  }

}

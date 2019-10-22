
import { Component, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { Observable } from 'rxjs';
import { WebcamImage, WebcamInitError, WebcamUtil } from 'ngx-webcam';
import { Photo } from './model/photo.model';
import { PhotoService } from 'src/app/service/photo.service';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'gosecuri-api';


  errors: any[] = [{
    type: 'success',
    message: 'La photo correspond',
  }, {
    type: 'danger',
    message: 'La photo ne correspond pas',
  }
  ];

  photos: Photo[];
  // latest snapshot
  public webcamImage: WebcamImage = null;
  // webcam snapshot trigger
  private trigger: Subject<void> = new Subject<void>();

  private errmessage: {
    type: string;
    message: string;
  };
  // function
  constructor(private photoService: PhotoService, private router: Router
  ) { }

  ngOnInit() {
    this.photoService.getPhotos().subscribe(actionArray => {
      this.photos = actionArray.map(item => {
        return {
          id: item.payload.doc.id,
          ...item.payload.doc.data()
        } as Photo;
      });
    });
  }
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
  /**
   * Verify identity to log in or in other case display error message
   */
  public displayErrorMess() {
    if (this.webcamImage) {
      this.errmessage.type = this.errors[0].message;
      this.errmessage.message = this.errors[0].message;
    } else {
      this.errmessage.type += this.errors[0].type;
      this.errmessage.message = this.errors[1].message;
    }
  }







}

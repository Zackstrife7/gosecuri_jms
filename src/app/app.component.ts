
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

  photos: Photo[];
  // latest snapshot
  public webcamImage: WebcamImage = null;
  // webcam snapshot trigger
  private trigger: Subject<void> = new Subject<void>();

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








}

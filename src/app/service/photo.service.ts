import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {


  constructor(private firestore: AngularFirestore) {

  }
  getPhotos(){
    return this.firestore.collection('photos').snapshotChanges();
  }
}

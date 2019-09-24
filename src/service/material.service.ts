import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
@Injectable({
  providedIn: 'root'
})
export class MaterialService {

  constructor(private firestore: AngularFirestore) { }

  getMaterials() {
    return this.firestore.collection('materiel').snapshotChanges();
  }
  getOneMaterial(mId :Number){
    return this.firestore.collection("materiel").doc('materiel.mId');
  }
}

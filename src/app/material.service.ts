import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Material } from 'src/app/material.model';
@Injectable({
  providedIn: 'root'
})
export class MaterialService {

  constructor(private firestore: AngularFirestore) { }

  getMaterials() {
    return this.firestore.collection('materiel').snapshotChanges();
}
}

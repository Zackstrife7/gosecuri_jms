import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';
import { Material } from 'src/model/material.model';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(public afs: AngularFirestore) { }

  getMaterials() {
    return this.afs.collection('materiel').snapshotChanges();
  }
  getOneMat(matKey){
    return this.afs.collection('materiel').doc(matKey).snapshotChanges();
  }
  updateMaterial(matKey, value){
    return this.afs.collection('materiel').doc(matKey).set(value.m_id);
  }

}

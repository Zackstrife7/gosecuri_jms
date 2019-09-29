import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Material } from 'src/model/material.model';
import { identifierModuleUrl } from '@angular/compiler';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
@Injectable({
  providedIn: 'root'
})
export class MaterialService {
  private dbPath = '/materiel';

  materialsRef: AngularFireList<Material> = null;

  constructor(private firestore: AngularFirestore, private db: AngularFireDatabase) { 
    this.materialsRef = db.list(this.dbPath);
  }

  getMaterials() {
    return this.firestore.collection('materiel').snapshotChanges();
  }
  getOneMaterial(mId :Number){
    return this.firestore.collection("materiel").doc('materiel.mId');
  }
  updateOneMaterial(key: string, value: any): Promise<void>{
    return this.materialsRef.update(key, value);
  }
}

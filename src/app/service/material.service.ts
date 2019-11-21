import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Material } from 'src/app/model/material.model';
import { identifierModuleUrl } from '@angular/compiler';
import { AngularFireList, AngularFireDatabase } from '@angular/fire/database';
@Injectable({
  providedIn: 'root'
})
export class MaterialService {

  private dbPath = '/materiel';

  materielsRef: AngularFireList<Material> = null;

  constructor(public afs: AngularFirestore, private db: AngularFireDatabase) {
    this.materielsRef = db.list(this.dbPath);
   }

  updateOneMaterial(matID: string, mat: any): Promise<void> {
    return this.afs.doc('materiel/' + matID).update(mat.nbr_mat -= 1);
  }

  getMaterials() {
    return this.afs.collection('materiel').snapshotChanges();
  }
  resetMaterial(matID: string, mat: any): Promise<void> {
    return this.afs.doc('materiel/' + matID).update(mat.nbr_mat += 1);
  }

}



import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Material } from 'src/app/model/material.model';
import { FirestoreService } from './firestore.service';

@Injectable({
  providedIn: 'root'
})
export class MaterialService {

  constructor(public firestore: FirestoreService) {
  }

  public getMaterials(): Observable<Material[]> {
    return this.firestore.readCollection('materiel')
  }

}



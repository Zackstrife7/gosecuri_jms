import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { FirestoreService } from './firestore.service';
import { MaterialService } from './material.service';
import { Material } from '../model/material.model';

@Injectable({
  providedIn: 'root'
})
export class BorrowingService {

  constructor(private firestore: FirestoreService, private materialService: MaterialService) { }

  getBorrows(): Observable<any> {
    return this.firestore.readCollection('emprunter')
  }

  getAvailableMaterials(): Observable<Material[]> {
    return new Observable(subscriber => {
      this.materialService.getMaterials().subscribe(materials => {
        this.getBorrows().subscribe(borrows => {
          const borrowsIds = borrows.map(b => b.matId.id)
          const availableMaterials = materials.map(m => ({
            ...m,
            nbAvailable: m.nbr_mat - borrowsIds.filter(b => b === m.id).length
          }))
          subscriber.next(availableMaterials)
          subscriber.complete()
        })
      })
    })
  }
}

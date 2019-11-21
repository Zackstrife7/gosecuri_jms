import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Material } from '../model/material.model';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(public afs: AngularFirestore) { }

  public readCollection(collection: string) {
    return this.afs.collection(collection).snapshotChanges().pipe(
      map((collection: any[]) => collection.map(m => ({ id: m.payload.doc.id, ...m.payload.doc.data() })))
    );
  }
}

import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import {MaterialService} from 'src/app/service/material.service';
import { from } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BorrowingService {

  constructor(public afs: AngularFirestore, public matService : MaterialService) { }

  getBorrows() {
    return this.afs.collection('emprunter').get();
  }

  getAvailableMaterials() {
    this.matService.getMaterials().subscribe(materials => {

      this.getBorrows().subscribe(borrows => {
        borrows.forEach(borrow => {
          borrow.data().agentId.get().then(agent => console.log(agent.data()));
          borrow.data().matId.get().then(material => console.log(material.data()));
        });
      });
    });
  }
}

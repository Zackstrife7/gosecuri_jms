import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Agent } from 'src/app/model/agent.model';
import { AngularFireList } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class AgentService {

  materielsRef: AngularFireList<Agent> = null;
  constructor(private firestore: AngularFirestore) {

   }
   getAgents(){
     return this.firestore.collection('agents').snapshotChanges();
   }
   getOneAgent(){
     return this.firestore.collection("agents").get()
   }
  updateOneAgent(data) {
    return this.firestore
        .collection("agents")
        .doc(data.payload.doc.id)
        .set({ completed: true }, { merge: true });
  }
   
}

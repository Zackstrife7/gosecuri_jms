import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Agent } from 'src/app/agent.model';

@Injectable({
  providedIn: 'root'
})
export class AgentService {

  constructor(private firestore: AngularFirestore) {

   }
   getAgents(){
     return this.firestore.collection('agents').snapshotChanges();
   }
}

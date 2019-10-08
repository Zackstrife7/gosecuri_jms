import { Component, OnInit, Input, Output, ViewChild } from '@angular/core';
import { AppComponent } from '../app.component';
import { WebcamImage } from 'ngx-webcam';
import { MaterialService } from 'src/app/service/material.service';
import { Material } from 'src/app/model/material.model';
import { FirebaseService } from 'src/app/service/firebase.service';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-users-login',
  templateUrl: './users-login.component.html',
  styleUrls: ['./users-login.component.css']
})
export class UsersLoginComponent implements OnInit {
   materials: Material[];
   @Input() webcamImage: WebcamImage;

  constructor(
    private materialService: MaterialService,
    public firebaseService: FirebaseService,
    private route: ActivatedRoute
    ) { }
  ngOnInit() {
    this.materialService.getMaterials().subscribe(actionArray => {
      this.materials = actionArray.map(item => {
        return {
          id: item.payload.doc.id,
          ...item.payload.doc.data()
        } as Material;
      });
    });
  }
  // every  checked material will decremante the number of this one
  updateMaterialNumber(event, materiel) {
    materiel.checked = event.srcElement.checked;

    if(!materiel.checked){
      this.materialService.resetMaterial(materiel.m_id, materiel);
    }
    if(materiel.checked){
      this.materialService.updateOneMaterial(materiel.m_id, materiel);
    }
  }

}

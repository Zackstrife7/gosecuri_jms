import { Component, OnInit, Input, Output, ViewChild } from '@angular/core';
import { AppComponent } from '../app.component';
import { WebcamImage } from 'ngx-webcam';
import { MaterialService } from 'src/service/material.service';
import { Material } from 'src/model/material.model';
import { FirebaseService } from 'src/service/firebase.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl, NgForm } from '@angular/forms';


@Component({
  selector: 'app-users-login',
  templateUrl: './users-login.component.html',
  styleUrls: ['./users-login.component.css']
})
export class UsersLoginComponent implements OnInit {
   f: NgForm;


  materials: Material[];
  @Input() webcamImage: WebcamImage;
  material: MaterialService;
  constructor(
    private materialService: MaterialService,
    public firebaseService: FirebaseService,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
    this.firebaseService.getMaterials().subscribe(data => {
      // tslint:disable-next-line: no-unused-expression
      this.materials = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data()
        } as Material;
      });
    });
  }
  onSubmit(f: NgForm) {
    console.log(f.value);
  
  }
  // takeOne() {
  //   console.log( this.firebaseService.getOneMat(this.materials.length));
  //   // this.f.controls.state.setValue(this.options[0]);
  // }


}

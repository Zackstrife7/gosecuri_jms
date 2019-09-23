import { Component, OnInit, Input, Output } from '@angular/core';
import { AppComponent } from '../app.component';
import { WebcamImage } from 'ngx-webcam';
import { MaterialService } from 'src/app/material.service';
import { Material } from 'src/app/material.model';



@Component({
  selector: 'app-users-login',
  templateUrl: './users-login.component.html',
  styleUrls: ['./users-login.component.css']
})
export class UsersLoginComponent implements OnInit {

  materials: Material[];
  @Input() webcamImage: WebcamImage ;
  constructor(private materialService: MaterialService) { }

  ngOnInit() {
    this.materialService.getMaterials().subscribe(data => {
      // tslint:disable-next-line: no-unused-expression
      this.materials = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data()
        } as Material;
      });
    });
  }

}  

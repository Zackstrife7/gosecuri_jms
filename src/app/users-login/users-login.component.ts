import { Component, Input, OnInit } from '@angular/core';
import { WebcamImage } from 'ngx-webcam';
import { Material } from 'src/app/model/material.model';
import { MaterialService } from 'src/app/service/material.service';
import { BorrowingService } from 'src/app/service/borrowing.service';
import { Borrowing } from '../model/borrowing.model';


@Component({
  selector: 'app-users-login',
  templateUrl: './users-login.component.html',
  styleUrls: ['./users-login.component.css']
})
export class UsersLoginComponent implements OnInit {
   materials: Material[];

   @Input() webcamImage: WebcamImage;


  constructor(
    private materialService: MaterialService, private borrowingService: BorrowingService
    ) { }

  ngOnInit() {
    this.borrowingService.getAvailableMaterials().subscribe(availableMaterials => {
        this.materials = availableMaterials
    })
  }

  // every  checked material will decremante the number of this one
  updateMaterialNumber(event, materiel) {
    materiel.checked = event.srcElement.checked;
  }
  // showme() {
  //  return  this.borrowingService.getAvailableMaterials();
  // }
  
}

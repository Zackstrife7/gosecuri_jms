import { Component, OnInit, Input, Output } from '@angular/core';
import { AppComponent } from '../app.component';
import { WebcamImage } from 'ngx-webcam';
import { MaterialService } from 'src/service/material.service';
import { Material } from 'src/model/material.model';



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
  ta
// exemple de reset form pour meteriel et update du materiel  

  // resetForm(form?: NgForm) {
  //   if (form != null)
  //     form.resetForm();
  //   this.service.formData = {
  //     id: null,
  //     fullName: '',
  //     position: '',
  //     empCode: '',
  //     mobile: '',
  //   }
  // }

  // onSubmit(form: NgForm) {
  //   let data = Object.assign({}, form.value);
  //   delete data.id;
  //   if (form.value.id == null)
  //     this.firestore.collection('employees').add(data);
  //   else
  //     this.firestore.doc('employees/' + form.value.id).update(data);
  //   this.resetForm(form);
  //   this.toastr.success('Submitted successfully', 'EMP. Register');
  // }

}  

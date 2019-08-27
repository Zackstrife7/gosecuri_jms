import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users-login',
  templateUrl: './users-login.component.html',
  styleUrls: ['./users-login.component.css']
})
export class UsersLoginComponent implements OnInit {
  materials: string[] = ['Mousqueton', 'Gant d\'intervation', 'Ceinture de sécurité tactique', 'Détecteur de métaux', 'Brassard de sécurité','Lampe Torche','Gilet pare-balle'];
  constructor() { }

  ngOnInit() {
  }

}

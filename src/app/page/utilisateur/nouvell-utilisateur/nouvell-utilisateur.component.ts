import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nouvell-utilisateur',
  templateUrl: './nouvell-utilisateur.component.html',
  styleUrls: ['./nouvell-utilisateur.component.scss']
})
export class NouvellUtilisateurComponent implements OnInit {
  constructor(
    private router:Router
  ){

  }
  ngOnInit(): void {
    
  }
  cancel():void{
    this.router.navigate(['utilisateurs']);
  }

}

import { Component,OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-page-client',
  templateUrl: './page-client.component.html',
  styleUrls: ['./page-client.component.scss']
})
export class PageClientComponent implements OnInit {
  constructor(
    private router:Router
  ){}
  ngOnInit(): void {
    
  }
  nouveauclient(): void{
    this.router.navigate(['nouveauclient']);

  }

}

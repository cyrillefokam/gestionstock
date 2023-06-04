import { Component,EventEmitter,OnInit, Output,Input } from '@angular/core';

@Component({
  selector: 'app-boutton-action',
  templateUrl: './boutton-action.component.html',
  styleUrls: ['./boutton-action.component.scss']
})
export class BouttonActionComponent implements OnInit {
  @Output()
clickEvent= new EventEmitter();

  constructor(){}
  ngOnInit(): void {
    
  }
  bouttonNouveauClick(): void {
    this.clickEvent.emit();
  }

}

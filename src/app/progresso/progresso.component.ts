import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-progresso',
  templateUrl: './progresso.component.html',
  styleUrls: ['./progresso.component.css']
})
export class ProgressoComponent implements OnInit {

  //tenho que declarar no import junto com o component
  @Input('progresso') public progresso: number = 0;
  constructor() { }
  ngOnInit() {
  }

}
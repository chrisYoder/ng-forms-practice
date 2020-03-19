import { Component, OnInit } from '@angular/core';
import { CARDS } from '../cards'

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  cards = CARDS;
  
  
  
  visitForm(path){
    console.log(path);
  }

}

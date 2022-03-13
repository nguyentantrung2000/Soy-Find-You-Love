import { Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Gesture, GestureController, IonCard } from '@ionic/angular';


@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.scss'],
})
export class MatchComponent implements OnInit {
  avatars = [
  {
    name: 'Anna',
    age:20,
    image:'../../../assets/images/anna.jpg',
    visible: true
  },
  {
    name: 'Lucy',
    age:20,
    image:'../../../assets/images/lucy.jpg',
    visible: true
  },
  {
    name: 'Diana',
    age:20,
    image:'../../../assets/images/diana.jpg',
    visible: true
  },
];

  @ViewChildren(IonCard, {read: ElementRef}) cards: QueryList<ElementRef> | undefined;
  constructor(public userData: DataService, private gestureCtrl: GestureController) {}

  ngOnInit() {
    const cardArray = this.cards?.toArray;
    this.useLongPress(cardArray);
  }

  useLongPress(cardArray: any){
    for (let i = 0; i< cardArray. Length; i++) {
      const card = cardArray [i];
      console. log('card:',card)
      }          
  }

  useTinderSwipe(){

  }

  setCardColor(x : any, element:any){
    let color ="";
    const abs = Math.abs(x);
    const min = Math.trunc(Math.min(16*16 - abs, 16*16));
    const hexCode = this.decimalToHex(min,2);

    if(x < 0){
      color = '#FF' + hexCode + hexCode;
    }else {
      color = '#' + hexCode + 'FF' + hexCode
    }

    element.style.background = color;
  }

  decimalToHex(d: any, padding: any){
    let hex = Number(d).toString(16);
    padding = typeof padding === 'undefined' || padding === null ? (padding = 2 ):padding;

    while(hex.length < padding){
      hex = '0'+ hex;
    }
    return hex;
  }
}
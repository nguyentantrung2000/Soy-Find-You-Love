import { Component, ElementRef, NgZone, OnInit, QueryList, ViewChildren } from '@angular/core';
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
    // visible: true
    power:0
  },
  {
    name: 'Lucy',
    age:20,
    image:'../../../assets/images/lucy.jpg',
    // visible: true
    power:0
  },
  {
    name: 'Diana',
    age:20,
    image:'../../../assets/images/diana.jpg',
    // visible: true
    power:0
  },
];

  @ViewChildren(IonCard, {read: ElementRef}) cards: QueryList<ElementRef> | undefined;
  longPressActive = false;
  constructor(public userData: DataService, private gestureCtrl: GestureController, private zone: NgZone) {}

  ngOnInit() {
    const cardArray = this.cards?.toArray;
    this.useLongPress(cardArray);
  }

  useLongPress(cardArray: any){
    for (let i = 0; i < cardArray.length; i++) {
      const card = cardArray [i];
      console. log('card: ',card);
      const gesture = this.gestureCtrl.create({
        el: card.nativeElement,
        gestureName: 'long-press',
        onStart: ev => {
            this.longPressActive = true;
            this.increasePower(i);
        },
        onEnd: ev =>{ 
          this.longPressActive = false;
        }
      });
      gesture.enable(true);
      }          
  }

  increasePower(i:any){
    console.log('incrase')
    
    setTimeout(()=>{
      if(this.longPressActive){
        this.zone.run(()=>{
          this.avatars[i].power++;
        this.increasePower(i);
        })
      }
      
    },200)
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
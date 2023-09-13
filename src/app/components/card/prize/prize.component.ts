import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-prize',
  templateUrl: './prize.component.html',
  styleUrls: ['./prize.component.css']
})
export class PrizeComponent {

  @Input()
  gameType:string = ""
  @Input()
  gamePrice:string = ""

  constructor(){}

  ngOnInit(): void {}
}

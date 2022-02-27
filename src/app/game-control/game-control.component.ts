import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {  
  @Output() gameRunning = new EventEmitter<number>();
  @Output() gameStopped = new EventEmitter();
  intervalOfEvents: NodeJS.Timeout;
  eventsEmmited: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onStartGame() {
    this.intervalOfEvents = setInterval(() => {
      this.eventsEmmited++;
      this.gameRunning.emit(this.eventsEmmited);
      console.log(`Emmiting ${this.eventsEmmited}º event.`);
    }, 1000);    
  }

  onStopGame() {
    clearInterval(this.intervalOfEvents);
    console.log(`${this.eventsEmmited} events were emmited.`);
    this.eventsEmmited = 0;
    this.gameStopped.emit();
  }
}

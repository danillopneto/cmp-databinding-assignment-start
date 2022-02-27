import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  oddNumbers: number[] = [];
  evenNumbers: number[] = [];

  onGameRunning(eventsEmmited: number) {
    if (eventsEmmited % 2 === 0) {
      this.evenNumbers.push(eventsEmmited);
    } else {
      this.oddNumbers.push(eventsEmmited);
    }
  }

  onGameStopped() {
    this.oddNumbers = [];
    this.evenNumbers = [];
  }
}

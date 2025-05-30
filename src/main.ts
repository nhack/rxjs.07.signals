import { Component, signal } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  template: `
    <h1>Hello from {{ name }}!</h1>
    <a target="_blank" href="https://angular.dev/overview">
      Learn more about Angular
    </a>
    <button (click)='setDate()'>PRESS</button>
    <div>Date: {{dateSignal()}}<div>
  `,
})
export class App {
  name = 'Angular';
  dateSignal = signal(new Date());

  setDate() {
    this.dateSignal.set(new Date());
  }
}

bootstrapApplication(App);

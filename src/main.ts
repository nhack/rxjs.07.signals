import { AsyncPipe } from '@angular/common';
import { Component, signal } from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';
import { bootstrapApplication } from '@angular/platform-browser';
import { Observable, filter, map } from 'rxjs';

@Component({
    selector: 'app-root',
    imports: [AsyncPipe],
    template: `
    <h1>Hello from {{ name }}!</h1>
    <a target="_blank" href="https://angular.dev/overview">
      Learn more about Angular
    </a>
    <button (click)='setDate()'>PRESS</button>
    <div>Date: {{dateSignal()}}<div>
    <div>TS: {{date$|async}}<div>
  `,
})
export class App {
    name = 'Angular';
    dateSignal = signal(new Date());
    date$: Observable<number>;

    setDate() {
        this.dateSignal.set(new Date());
    }

    constructor() {
        this.date$ = toObservable(this.dateSignal).pipe(
            map(date => date.getTime()),
            filter(ts => ts % 2 === 0),
        )
    }
}

bootstrapApplication(App);

import { Component } from '@angular/core';
import { from, of, throwError } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  of(): void {
    of('of')
      .subscribe(console.log);
  }

  from(): void {
    const p = new Promise(resolve =>
      setTimeout(() => resolve('from'), 500)
    );
    from(p)
      .subscribe(console.log);
  }

  combineLatest(): void {
  }

  concat(): void {
  }

  merge(): void {
  }

  map(): void {
  }

  switchMap(): void {
  }

  bufferCount(): void {
  }

  bufferTime(): void {
  }

  scan(): void {
  }

  filter(): void {
  }

  distinctUntilChanged(): void {
  }

  takeUntil(): void {
  }

  first(): void {
  }

  skip(): void {
  }

  auditTime(): void {
  }

  debounceTime(): void {
  }

  throttleTime(): void {
  }

  startWith(): void {
  }

  share(): void {
  }

  catchError(): void {
  }

  tap(): void {
  }

  clear() {
    console.clear();
  }
}

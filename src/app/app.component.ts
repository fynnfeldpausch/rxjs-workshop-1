import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { randFullName } from '@ngneat/falso';
import { debounceTime, delay, Observable, of, skip, switchMap, takeUntil, tap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private readonly names = new Array(100).fill(0).map(() => randFullName({ withAccents: false }));

  readonly search = new FormControl('');
  readonly search$ = this.search.valueChanges;
  readonly results$: Observable<string[]>;

  constructor() {
    this.results$ = this.search$.pipe(
      debounceTime(1000),
      switchMap(term => this.getNames(term).pipe(
        takeUntil(this.search$.pipe(skip(1)))
      ))
    );
  }

  private getNames(term: string): Observable<string[]> {
    return of(this.names.filter(name => name.toLocaleLowerCase().includes(term.toLocaleLowerCase())))
      .pipe(tap(() => console.log(`Requesting names for "${term}"`)))
      .pipe(delay(Math.random() * 1000))
      .pipe(tap(() => console.log(`Received names for "${term}"`)));
  }
}

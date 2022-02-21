import { catchError, map, of } from 'rxjs';

export default function() {
  of(1, 2, 3, 4, 5)
    .pipe(map(n => {
      if (n === 4) {
        throw 'four!';
      }
      return n;
    }))
    .pipe(catchError(() => of('I', 'II', 'III', 'IV', 'V')))
    .subscribe(console.log);
}

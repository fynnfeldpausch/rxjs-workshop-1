import { of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

export default function () {
  of(1, 2, 3)
    .pipe(switchMap(x => of(x, x ** 2, x ** 3)))
    .subscribe(console.log);
}

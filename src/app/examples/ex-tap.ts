import { map, of, tap } from 'rxjs';

export default function() {
  of(Math.random())
    .pipe(tap(console.log))
    .pipe(map(n => n > 0.5 ? 'big' : 'small'))
    .subscribe(console.log);
}

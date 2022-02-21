import { distinctUntilChanged, interval, map, take } from 'rxjs';

export default function() {
  // emit 0, 1, 2, 3, 4, 5 after every second
  const timer = interval(1000).pipe(take(6));

  timer
    .pipe(map(x => Math.floor(x / 2)))
    .pipe(distinctUntilChanged())
    .subscribe(console.log);
}

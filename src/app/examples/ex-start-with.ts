import { interval, startWith, take } from 'rxjs';

export default function() {
  // emit 0, 1, 2, 3 after every second
  const timer = interval(1000).pipe(take(4));

  timer
    .pipe(startWith(42))
    .subscribe(console.log);
}

import { delay, fromEvent, interval, of, takeUntil } from 'rxjs';

export default function() {
  // emit 0, 1, 2, 3, 4, 5 after every second
  const timer = interval(1000);
  const until = of(1).pipe(delay(4000));

  timer
    .pipe(takeUntil(until))
    .subscribe(console.log);
}

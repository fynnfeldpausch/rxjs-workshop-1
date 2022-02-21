import { interval, skip, take } from 'rxjs';

export default function() {
  // emit 0, 1, 2, 3 after every second
  const timer = interval(1000).pipe(take(4));

  timer
    .pipe(skip(2))
    .subscribe(console.log);
}

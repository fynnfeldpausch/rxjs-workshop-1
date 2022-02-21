import { filter, interval, take } from 'rxjs';

export default function() {
  // emit 0, 1, 2, 3, 4, 5 after every second
  const timer = interval(1000).pipe(take(6));

  timer
    .pipe(filter(x => x % 2 === 0))
    .subscribe(console.log);
}

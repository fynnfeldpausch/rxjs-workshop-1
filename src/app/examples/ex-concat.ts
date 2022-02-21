import { concat, interval, range, take } from 'rxjs';

export default function() {
  // emit 0, 1, 2, 3 after every second
  const timer = interval(1000).pipe(take(4));
  // emit 1, 2, 3, 4, 5 immediately
  const sequence = range(1, 5);

  concat(timer, sequence)
    .subscribe(console.log);
}

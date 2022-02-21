import { first, interval } from 'rxjs';

export default function() {
  // emit 0, 1, 2, 3, 4, 5 after every second
  const timer = interval(1000);

  timer
    .pipe(first())
    .subscribe(console.log);
}

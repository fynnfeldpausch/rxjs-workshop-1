import { debounceTime, interval, take } from 'rxjs';

export default function() {
  // emit 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 after 500ms
  const timer = interval(500).pipe(take(11));

  timer.pipe(debounceTime(1000))
    .subscribe(console.log);
}

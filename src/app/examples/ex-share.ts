import { interval, share, take, tap } from 'rxjs';

export default function () {
  const source = interval(1000)
    .pipe(take(4))
    .pipe(tap(console.log))
    .pipe(share());

  source.subscribe();
  source.subscribe();
}

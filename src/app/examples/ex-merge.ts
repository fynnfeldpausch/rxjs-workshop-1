import { merge, timer } from 'rxjs';

export default function() {
   // emit 0, 1, 2... after every second, starting from now
   const firstTimer = timer(0, 1000);
   // emit 0, 1, 2... after every second, starting 0,5s from now
  const secondTimer = timer(500, 1000);

  merge(firstTimer, secondTimer)
    .subscribe(console.log);
}

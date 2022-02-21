import { map, timer } from 'rxjs';

export default function() {
   // emit 0, 1, 2... after every second, starting from now
   const numbers = timer(0, 1000);

   numbers
    .pipe(map(number => number * number))
    .subscribe(console.log);
}

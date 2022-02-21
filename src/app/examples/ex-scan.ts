import { of, scan } from 'rxjs';

export default function() {
  of(1, 2, 3)
    .pipe(scan((total, n) => total + n))
    .subscribe(console.log)
}

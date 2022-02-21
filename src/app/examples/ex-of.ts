import { of } from 'rxjs';

export default function() {
  of(42)
    .subscribe(console.log);
}

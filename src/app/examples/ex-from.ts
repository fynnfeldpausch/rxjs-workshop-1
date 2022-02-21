import { from } from 'rxjs';

export default function() {
  // resolve with 42 after 1 second
  const p = new Promise(resolve =>
    setTimeout(() => resolve(42), 1000)
  );

  from(p)
    .subscribe(console.log);
}

import { Subject } from 'rxjs';

const subject = new Subject<number>();

export default function () {
  subject.next(0);
  subject.next(1);
  subject.next(2);

  subject.asObservable()
    .subscribe(console.log);

  subject.next(3);
  subject.next(4);
  subject.next(5);
}

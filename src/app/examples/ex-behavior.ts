import { BehaviorSubject } from 'rxjs';

const subject = new BehaviorSubject<number>(0);

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

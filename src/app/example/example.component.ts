import { Component, Input } from '@angular/core';

import exAuditTime from '../examples/ex-audit-time';
import exBehavior from '../examples/ex-behavior';
import exBufferCount from '../examples/ex-buffer-count';
import exBufferTime from '../examples/ex-buffer-time';
import exCatchError from '../examples/ex-catch-error';
import exCombineLatest from '../examples/ex-combine-latest';
import exConcat from '../examples/ex-concat';
import exDebounceTime from '../examples/ex-debounce-time';
import exDistinctUntilChanged from '../examples/ex-distinct-until-changed';
import exFilter from '../examples/ex-filter';
import exFirst from '../examples/ex-first';
import exFrom from '../examples/ex-from';
import exMap from '../examples/ex-map';
import exMerge from '../examples/ex-merge';
import exOf from '../examples/ex-of';
import exScan from '../examples/ex-scan';
import exShare from '../examples/ex-share';
import exSkip from '../examples/ex-skip';
import exStartWith from '../examples/ex-start-with';
import exSubject from '../examples/ex-subject';
import exSwitchMap from '../examples/ex-switch-map';
import exTakeUntil from '../examples/ex-take-until';
import exTap from '../examples/ex-tap';
import exThrottleTime from '../examples/ex-throttle-time';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent {
  readonly lineNumbers = true;
  readonly examples: { [key: string]: () => void } = {
    exBehavior, exSubject,
    exOf, exFrom,
    exCombineLatest, exConcat, exMerge,
    exMap, exSwitchMap, exBufferCount, exBufferTime, exScan,
    exFilter, exDistinctUntilChanged, exTakeUntil,
    exFirst, exSkip, exAuditTime, exDebounceTime, exThrottleTime,
    exStartWith,
    exShare,
    exCatchError,
    exTap
  };

  @Input()
  fn: string = '';

  get src() {
    return `app/examples/${this.kebab(this.fn)}.ts`;
  }

  run() {
    console.clear();
    this.examples[this.fn]?.();
  }

  private kebab(str: string) {
    return str.replace(/([a-z])([A-Z])/g, "$1-$2")
      .replace(/[\s_]+/g, '-')
      .toLowerCase();
  }
}

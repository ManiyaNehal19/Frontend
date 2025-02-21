//the code doesnt run but is here for explanation of aync pipe
@Component({
    selector: 'async-promise-pipe',
    template: `<div>
      <code>promise|async</code>:
      <button (click)="clicked()">{{ arrived ? 'Reset' : 'Resolve' }}</button>
      <span>Wait for it... {{ greeting | async }}</span>
    </div>`,
    standalone: false,
  })
  export class AsyncPromisePipeComponent {
    greeting: Promise<string>| null = null;
    arrived: boolean = false;
    private resolve: Function | null = null;
    constructor() {
      this.reset();
    }
    reset() {
      this.arrived = false;
      this.greeting = new Promise<string>((resolve, reject) => {
        this.resolve = resolve;
      });
    }
    clicked() {
      if (this.arrived) {
        this.reset();
      } else {
        this.resolve!('hi there!');
        this.arrived = true;
      }
    }
  }
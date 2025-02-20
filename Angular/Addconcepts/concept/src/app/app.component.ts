import { Component, computed, Signal, signal, WritableSignal, effect } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'], // Correct key is 'styleUrls' not 'styleUrl'
})
export class AppComponent {
  ////Signal
  count = signal(0);

  setCount() {
    this.count.set(3); // Update signal value inside a method
  }

  //only writable
  counter:WritableSignal<number> = signal(4);
  //you can not assign value to computed signal
  //computed signal: 
  doublecount:Signal<number> = computed(()=>this.count()*2);

  //the derivated signals are only computed when the computed signal is true
  ///Effect
  //An effect is an operation that runs whenever one or more signal values change. You can create an effect with the effect function:
  constructor() {
    // Effect should be inside constructor or ngOnInit
    //runs as a function atleast once
    //asynchronously, during the change detection process.
    effect(() => {
      console.log(`The current count is: ${this.count()}`);
    });
  }
  //async Pipe
  //Async pipe subscries to obersvables and promise and returns us the lastest values, when a new value is found the pipe marks the componnet to be checked again
  //Wehn the component is destroyed the pipe unsubscribes from old ones and adds to a new one

}

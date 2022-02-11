import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  count: number = 0;
  increment = () => {
      this.count = this.count + 1;
  }

  decrease = () =>{
    if(this.count === 0) {
      alert("Error: Count Can't be negative");
      this.count = 0;
    }
    else
    this.count = this.count - 1;
  }

  reset = () => {
    this.count = 0;
  }

}

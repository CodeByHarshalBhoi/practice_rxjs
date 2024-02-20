import { Component } from '@angular/core';
import { Observable, interval } from 'rxjs';

@Component({
  selector: 'app-unsubscribe',
  templateUrl: './unsubscribe.component.html',
  styleUrls: ['./unsubscribe.component.css']
})
export class UnsubscribeComponent {
  counter = interval(1000);
  subscriber1;
  subscriber2;
  subscriber3;

  data1:number[]=[]
  data2:number[]=[]
  data3:number[]=[]

  Observable1() {
    this.subscriber1 = this.counter.subscribe((res)=>{
      this.data1.push(res);
    })
  }
  unsubscribe1(){
    this.subscriber1.unsubscribe();
  }
  Observable2() {
    this.subscriber2 = this.counter.subscribe((res)=>{
      this.data2.push(res);
    })
  }
  unsubscribe2(){
    this.subscriber2.unsubscribe();
  }
  Observable3() {
    this.subscriber3 = this.counter.subscribe((res)=>{
      this.data3.push(res);
    })
  }
  unsubscribe3(){
    this.subscriber3.unsubscribe();
  }
}

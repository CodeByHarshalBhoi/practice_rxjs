import { Component, OnInit } from '@angular/core';
import { AsyncSubject, BehaviorSubject, Observable, ReplaySubject, Subject } from 'rxjs';
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {


  ngOnInit() {

    //ASYNC SUBJECTS - Async subject is always return the last emitting value to it's all subscribers before the complete single
    // - If complete mehod is not called then async subject is not provide any value to its subscribers.
    const asyncSubject = new AsyncSubject();
    asyncSubject.next(100);
    asyncSubject.next(200);
    asyncSubject.next(300);

    asyncSubject.subscribe(res => console.log(`async ata ${res}`)
    )
    asyncSubject.complete()
    asyncSubject.next(400); //-this value wil be ignored...because complete method is called



    //REPLAY SUBJECT - replay subject provide all buffer store value to its subscribers
    const replaySubject = new ReplaySubject<number>(1);

    replaySubject.next(1)
    replaySubject.next(2)
    replaySubject.next(3)

    replaySubject.subscribe((res) => {
      console.log('1 replay subject ' + res);
    })
    replaySubject.subscribe((res) => {
      console.log('2 replay subject ' + res);
    })
    replaySubject.subscribe((res) => {
      console.log('3 replay subject ' + res);
    })

    replaySubject.next(500);

    replaySubject.subscribe((res) => {
      console.log('4 replay subject ' + res);
    })


    //BEHAVIOR SUBJECT - behavior subject always store last emitting data
    const behaviorSubject = new BehaviorSubject<number>(100);
    behaviorSubject.subscribe((res) => {
      console.log('sub-1  ' + res);
    })
    behaviorSubject.subscribe((res) => {
      console.log('sub-2  ' + res);
    })
    behaviorSubject.subscribe((res) => {
      console.log('sub-3  ' + res);
    })
    behaviorSubject.next(2000)

    behaviorSubject.subscribe((res) => {
      console.log('sub-4  ' + res);
    })


    const data: any = ajax('https://randomuser.me/api/');

    data.subscribe((res: any) => {
      console.log(res);
    })
    data.subscribe((res: any) => {
      console.log(res);
    })
    data.subscribe((res: any) => {
      console.log(res);
    })


    const ajaxCallSubject = new Subject()
    ajaxCallSubject.subscribe((res) => {
      console.log(res);
    });
    ajaxCallSubject.subscribe((res) => {
      console.log(res);
    });
    ajaxCallSubject.subscribe((res) => {
      console.log(res);
    });

    data.subscribe(ajaxCallSubject) //HERE SUBJECT IS CONSUME THE DATA

    //OBSERVALE :- always provide new data to each subscriber

    let obserable = new Observable((observer) => {
      observer.next(Math.floor(Math.random() * 10));
    })

    obserable.subscribe((res) => {
      console.log('obserable', res);
    })
    obserable.subscribe((res) => {
      console.log('obserable', res);
    })
    obserable.subscribe((res) => {
      console.log('obserable', res);
    })


    //SUBJECT - Subject alays provie the same data to its all subscriber
    let subject = new Subject();
    subject.subscribe((res) => {
      console.log('subject', res);
    })
    subject.subscribe((res) => {
      console.log('subject', res);
    })
    subject.subscribe((res) => {
      console.log('subject', res);
    })
    subject.next(Math.floor(Math.random() * 10));
  }
}



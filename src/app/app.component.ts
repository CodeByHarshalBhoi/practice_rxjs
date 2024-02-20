import { Component, ElementRef, ViewChild } from '@angular/core';
import { Observable, filter, from, fromEvent, map, of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'practice_rxjs';

  data: any[] = []
  @ViewChild('createBtn') createBtn: ElementRef
  createBtnObs;

  array1 = [1, 2, 3, 4, 5];
  array2 = [8, 5, 4, 65, 4];

  // myObservable=new Observable((observer)=>{
  //   setTimeout(()=>{
  //       observer.next(1)
  //   },1000);
  //   setTimeout(()=>{
  //       observer.next(2)
  //   },2000);
  //   setTimeout(()=>{
  //       observer.next(3)
  //   },3000);

  //   //ERROR MESSAGE
  //   setTimeout(()=>{
  //     observer.error(new Error('Something wents wrong'))
  //   },4000);
  //   setTimeout(()=>{
  //       observer.next(4)
  //   },4000);
  //   setTimeout(()=>{
  //       observer.next(5)
  //   },5000);
  //   setTimeout(()=>{
  //       observer.complete()
  //   },3000);
  // })

  //OF OPERATOR OBSERVABLE
  // myObservable = of(this.array1, this.array2, 125,25,25,36,25,'Harshal', 'Hello');


  promiseData = new Promise((resolve, reject) => {
    resolve([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });

  myObservable = from([1, 2, 3, 5, 5, 12, 65, 45]).pipe(map((res)=>{
    return res*10;
  }),
  filter((res)=>{
    return res % 10 === 0;
  }));

  transFormData = this.myObservable.pipe(map((res: any) => {
    return res * 10;
  }))

  filterData = this.transFormData.pipe(filter((res) => {
    return res % 4 === 0;
  }))

  //WITH THE HELP OF PIPE WE CAN CHAINNG THE OPRATOR
  //EX..
  ChainingTransFormData = this.myObservable.pipe(map((res)=>{
    return res *10
  }),
  filter((res)=>{
    return res % 4 === 0;
  }))




  //FROM OPERATOR OBSERVABLE
  // myObservable = from(this.array2);


  getAllData() {
    // OLD METHOD FOR NEXT,ERROR,COMPLETE METHOD.
    // this.myObservable.subscribe((res:any)=>{
    //   this.data.push(res)
    // },
    // (err)=>{
    //   alert(err.message);
    // },
    // ()=>{
    //   alert('All data loaded successfully');
    // })


    //NEW METHOD TO WRITE NEXT,ERROR,COMPLETE METHOD.

    this.myObservable.subscribe({
      next: (res: any) => {
        this.data.push(res);
      },
      error(err) {
        alert(err.mesage);
      },
      complete() {
        alert('All data loaded successfuly')
      }
    })

  }



  //FROMEVENT
  // ngAfterViewInit() {
  //  this.buttonClicked()
  // }

  //   buttonClicked(){
  //     let count = 0;
  //     this.createBtnObs = fromEvent(this.createBtn.nativeElement, 'click').subscribe((data)=>{
  //       console.log(data);
  //       this.showItem(++count)
  //     })
  //   }

  //   showItem(val){
  //     let div  = document.createElement('div');
  //     div.innerText = 'Item' + val;
  //     document.getElementById('container').appendChild(div)
  //   }


}



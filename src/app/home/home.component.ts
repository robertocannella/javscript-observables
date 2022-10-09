import { Component, OnInit } from '@angular/core';
import { Observable, Observer, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  subscription: Subscription;
  constructor() { }

  ngOnInit() {
    // this.subscription = interval(1000).subscribe((count: number)=>{
    //   console.log(count)
    // })
    const myCustomObservable = new Observable((observer: Observer<number>)=>{
      let count=0;
        setInterval(()=>{
          observer.next(count);
          if (count === 5){
            observer.complete();
          }
          if (count > 3){
            observer.error(new Error('Count is greater than 3!'));
          }
          count++;
        },1000);
    });

    myCustomObservable.pipe(map((data:number)=>{
      return 'Round' + (data + 1);
    }))

    this.subscription = myCustomObservable.pipe(map((data:number)=>{
      return `Round: ${data + 1}`;
    })).subscribe((data:string)=>{
      console.log(data)
    }, (error: Error)=>{
      alert(error.message)
    }, ()=>{
      console.log('Completed')
    });
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
    
  }
  log(number:number){}

}

import { Component, OnInit } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  subscription: Subscription;
  constructor() { }

  ngOnInit() {
    this.subscription = interval(1000).subscribe((count: number)=>{
      console.log(count)
    })
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}

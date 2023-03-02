import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'data-app';
  hidden:boolean = true;
  count:number = 0;

  onClick()
  {
    this.count++;
  }

  doubleClick()
  {
    if(this.hidden === true)
    {
    this.hidden = false;
    }
    else
    {
    this.hidden = true;
    }
  }

 
}


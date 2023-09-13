import {Component} from '@angular/core';
import {BmService} from "./sysgem/bm.service";
import {IMeal} from "./IMeal";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'Startup';
  // head = ["One", "Two", "Three"];

  dataAry!: IMeal[] ;
  constructor(private bm: BmService) {
  }

  ngOnInit(): void {
  this.bm.getAllMeal().subscribe(
    response => {this.dataAry = response.meals
    console.log(this.dataAry);
    }
  )
  }
}

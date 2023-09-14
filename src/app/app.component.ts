import {Component} from '@angular/core';
import {BmService} from "./sysgem/bm.service";
import {IMeal} from "./IMeal";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: String = 'Startup';
  // head = ["One", "Two", "Three"];

  dataAry!: IMeal[];

  constructor(private bm: BmService) {
  }

  obj = [
    {
      name: "Mg Mg",
      age: 20,
      bool: true
    },
    {
      name: "Aung Mg",
      age: 22,
      bool: false
    },
    {
      name: "Tun Mg",
      age: 23,
      bool: true
    }
  ]

  ngOnInit(): void {
    this.bm.getAllMeal().subscribe(
      response => {
        this.dataAry = response.meals
        console.log(this.dataAry);
      }
    )
  }
}

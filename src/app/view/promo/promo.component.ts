import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promo',
  templateUrl: './promo.component.html',
  styleUrls: ['./promo.component.scss']
})
export class PromoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  setImage(name: string) {
    return `url(assets/img/content/promo/${name}.png)`;
  }

}

import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  searchValue: string = 'Jakarta';

  residential: string = 'Tipe Properti';
  isHarga: boolean = false;
  hargaMin: any;
  hargaMax: any;
  kamarTidur: number = 0;

  terapkanHarga() {
    console.log(this.hargaMin, this.hargaMax);
  }
}

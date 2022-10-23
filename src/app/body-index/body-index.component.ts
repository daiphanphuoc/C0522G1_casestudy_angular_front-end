import {Component, OnInit, DoCheck} from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-body-index',
  templateUrl: './body-index.component.html',
  styleUrls: ['./body-index.component.css']
})
export class BodyIndexComponent implements OnInit, DoCheck {

  private imgs: Array<string>;
  img: string;

  constructor(private titleService: Title) {
    this.titleService.setTitle('Trang chủ');

  }

  ngOnInit(): void {
    this.imgs = ['https://furamavietnam.com/wp-content/uploads/2018/11/Vietnam_Danang_Furama_Resort_Exterior_Courtyard-Night.jpg',
      'https://furamavietnam.com/wp-content/uploads/2018/11/Vietnam_Danang_Furama_Resort_Exterior-Lobby.jpg',
      'https://furamavietnam.com/wp-content/uploads/2018/11/Vietnam_Danang_Furama_Resort_Exterior-Lagoon-Pool.jpg'];
    this.slide();
  }


  ngDoCheck(): void {
    this.img = this.imgs[0];

  }
  slide(): void {
    let i = 0;
    window.setInterval(() => {
      this.img = this.imgs[i];
      i++;
      if (i === this.imgs.length) {
        i = 0;
      }
    }, 1000);
  }
}

import { Component, OnInit } from '@angular/core';
import { TitleDataLabel } from '../app.models';
import { MainService } from '../services/main.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit {

  constructor(private mainService: MainService, private userService: UserService) { }

  ngOnInit(): void {
  }


  public labelIndex: number = 0;
  public titleData: TitleDataLabel[] = [
    {
      title: "Сучастність",
      firstImage: "/assets/img/laptop-screen.png",
      firstText: "Trade Well - це сучасна веб-платформа пошуку контактів для вашого бізнесу.",
      secondText: "Ми викорустовуємо найсучасніші інструменти пошуку та обробки відритих джерел інформації.",
      secondImage: "/assets/img/search-tab.png"
    },
    {
      title: "Достовірність",
      firstImage: "/assets/img/worker.png",
      firstText: "Вам не потрібно витрачати час на 'пусті' дзвонки. Оператори нашого колл-центру верифікують потрібні вам контакти.",
      secondText: "Наші алгоритми для пошуку та консолідації інформації позбавлять вас від необхідності самостійно шукати контакти - ми зробимо це за вас.",
      secondImage: "/assets/img/algoritm.png"
    },
  ]

  public cardInfoSwipe: boolean = false;
  public swipeData (direction: string) {
    this.cardInfoSwipe = true;
    setTimeout( () => {
      if (direction === "back"){
        this.labelIndex = this.labelIndex === 0 ? this.titleData.length - 1 : this.labelIndex - 1;
      } else {
        this.labelIndex = this.labelIndex === this.titleData.length - 1 ? 0 : this.labelIndex + 1;
      }
      this.cardInfoSwipe = false;
    }, 300 )
  } 

  public login() {
    this.mainService.navigate("main");
  }

}

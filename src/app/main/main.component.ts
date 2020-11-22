import { Component, OnInit } from '@angular/core';
import { User } from '../app.models';
import { MainService } from '../services/main.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(private mainService: MainService, private userService: UserService) { }

  ngOnInit(): void {
  }

  public switcherPosition: string = "-1px";
  public switcherAction(action: string) {
    if (action === "search") {
      this.switcherPosition = "-1px"
      this.mainService.navigate('main/searcher/new/uo');
    } else {
      this.switcherPosition = "149px"
      this.mainService.navigate('main/searcher/queries');
    }
  }

  get user (): User {
    return this.userService.user;
  }

  public exit () {
    localStorage.removeItem('TradeWellUser');
    this.mainService.navigate('title');
  }

}

import { Component, OnInit } from '@angular/core';
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

  public exit () {
    this.mainService.navigate('title');
  }

}

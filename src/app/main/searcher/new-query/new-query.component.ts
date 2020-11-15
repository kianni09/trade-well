import { Component, OnInit } from '@angular/core';
import { MainService } from '../../../services/main.service';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-new-query',
  templateUrl: './new-query.component.html',
  styleUrls: ['./new-query.component.scss']
})
export class NewQueryComponent implements OnInit {

  constructor(private mainService: MainService, private userService: UserService) { }

  ngOnInit(): void {
  }

  public switcherPosition: string = "-1px";
  public switcherAction(action: string) {
    if (action === "uo") {
      this.switcherPosition = "-1px"
      this.mainService.navigate('main/searcher/new/uo');
    } else {
      this.switcherPosition = "199px"
      this.mainService.navigate('main/searcher/new/fop');
    }
  }

}

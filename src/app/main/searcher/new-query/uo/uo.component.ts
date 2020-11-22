import { Component, OnInit } from '@angular/core';
import { SearcherService } from '../../../../services/searcher.service';
import {
  QueryTemplate,
  Query,
  User,
  QueryCategory,
} from '../../../../app.models';
import { UserService } from '../../../../services/user.service';
import * as moment from 'moment';

@Component({
  selector: 'app-uo',
  templateUrl: './uo.component.html',
  styleUrls: ['./uo.component.scss'],
})
export class UoComponent implements OnInit {
  constructor(
    private searcherService: SearcherService,
    private userService: UserService
  ) {}

  ngOnInit(): void {}

  get user(): User {
    return this.userService.user;
  }

  public queryData: QueryTemplate = {
    edrpou: new QueryCategory(),
    name: new QueryCategory(),
    region: new QueryCategory(),
    city: new QueryCategory(),
    kved: new QueryCategory(),
  };

  public onLoad: boolean = false;

  public search(): void {
    if (
      this.queryData.edrpou.value ||
      this.queryData.name.value ||
      this.queryData.region.value ||
      this.queryData.city.value ||
      this.queryData.kved.value
    ) {
      this.onLoad = true;
      let query: Query = {
        userID: this.user.userID,
        date: moment().format(),
        edrpou: this.queryData.edrpou.valueArray,
        name: this.queryData.name.valueArray,
        region: this.queryData.region.valueArray,
        city: this.queryData.city.valueArray,
        kved: this.queryData.kved.valueArray,
        total: 0,
        status: 'In work',
      };
      this.searcherService.newQuery$(query).subscribe( (result: boolean) => {
        console.log(query);
        this.onLoad = false;
      } )
      
    }
  }

  public clear (): void {
    this.queryData = {
      edrpou: new QueryCategory(),
      name: new QueryCategory(),
      region: new QueryCategory(),
      city: new QueryCategory(),
      kved: new QueryCategory(),
    };
  }
}

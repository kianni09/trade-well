import { Component, OnInit } from '@angular/core';
import { Query, User } from '../../../app.models';
import { UserService } from '../../../services/user.service';
import { SearcherService } from '../../../services/searcher.service';

@Component({
  selector: 'app-queries',
  templateUrl: './queries.component.html',
  styleUrls: ['./queries.component.scss'],
})
export class QueriesComponent implements OnInit {
  get user(): User {
    return this.userService.user;
  }
  constructor(
    private searcherService: SearcherService,
    private userService: UserService
  ) {
    this.getQueries(this.user);
  }

  ngOnInit(): void {}

  public queries: Query[] = [];
  public onLoad: boolean = false;

  public download(id: string): void {
    this.searcherService.download(id);
  }

  public getQueries(user: User): void {
    this.onLoad = true;
    this.searcherService.getQueries$(user).subscribe((queries: Query[]) => {
      this.queries = queries;
      console.log(queries)
      this.onLoad = false;
    });
  }
}

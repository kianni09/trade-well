import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { NewQueryComponent } from './main/searcher/new-query/new-query.component';
import { QueriesComponent } from './main/searcher/queries/queries.component';
import { SearcherComponent } from './main/searcher/searcher.component';
import { UserComponent } from './main/user/user.component';
import { TitleComponent } from './title/title.component';
import { UoComponent } from './main/searcher/new-query/uo/uo.component';
import { FopComponent } from './main/searcher/new-query/fop/fop.component';


const routes: Routes = [
  { path: 'title', component: TitleComponent },
  {
    path: 'main',
    component: MainComponent,
    children: [
      { path: 'searcher', component: SearcherComponent, children: [
        { path: 'new', component: NewQueryComponent, children: [
          { path: 'uo', component: UoComponent },
          { path: 'fop', component: FopComponent },
        ]},
        { path: 'queries', component: QueriesComponent },
        { path: '**', redirectTo: 'searcher/new/uo' },
      ] },
      { path: 'cabinet', component: UserComponent },
      { path: '**', redirectTo: 'searcher/new/uo' },
    ],
  },
  { path: '**', redirectTo: 'title' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }   from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './main/user/user.component';
import { SearcherComponent } from './main/searcher/searcher.component';
import { NewQueryComponent } from './main/searcher/new-query/new-query.component';
import { QueriesComponent } from './main/searcher/queries/queries.component';
import { MainComponent } from './main/main.component';
import { TitleComponent } from './title/title.component';
import { UoComponent } from './main/searcher/new-query/uo/uo.component';
import { FopComponent } from './main/searcher/new-query/fop/fop.component';

@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    MainComponent,
    UserComponent,
    SearcherComponent,
    NewQueryComponent,
    QueriesComponent,
    UoComponent,
    FopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

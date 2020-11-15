import { Component, OnInit } from '@angular/core';
import { Query } from '../../../app.models';

@Component({
  selector: 'app-queries',
  templateUrl: './queries.component.html',
  styleUrls: ['./queries.component.scss']
})
export class QueriesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public queries: Query[] = [
    {
      date: "2020-11-12T10:15:48",
      type: "ФОП",
      categories: ["Адміністративна"],
      status: "В роботі",
      result: "1612"
    },
    {
      date: "2020-10-28T13:25:48",
      type: "Організації",
      categories: ["Адміністративна", "Фінансова"],
      status: "Виконано",
      result: "25612"
    },
    {
      date: "2020-10-18T15:45:48",
      type: "Організації",
      categories: ["Загальна","Адміністративна", "Фінансова"],
      status: "Верифіковано",
      result: "3812"
    }
  ]

}

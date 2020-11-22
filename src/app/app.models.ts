export interface TitleDataLabel {
  title: string;
  firstText: string;
  secondText: string;
  firstImage: string;
  secondImage: string;
}

export interface LoginForm {
  login: string;
  password: string;
}

export interface User {
  userID: string;
  name: string;
}

export class QueryCategory {
  private _value: string = '';

  public get value (): string {
      return this._value;
  }

  public set value (value: string) {
    this._value = value;
}

  public get valueArray(): string[] {
    return this.value ? [...this.value.split('\n')] : [];
  }
}

export interface QueryTemplate {
  edrpou: QueryCategory;
  name: QueryCategory;
  region: QueryCategory;
  city: QueryCategory;
  kved: QueryCategory;
}

export interface Query {
  _id?: string;
  userID: string;
  date: string;
  edrpou: string[];
  name: string[];
  region: string[];
  city: string[];
  kved: string[];
  total: number;
  status: string;
}

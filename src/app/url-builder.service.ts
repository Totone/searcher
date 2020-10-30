import { Injectable } from '@angular/core';
import { WEBSITES_LIST } from './mock-websites';
import { IWebsite } from './IWebsite'

@Injectable({
  providedIn: 'root'
})
export class UrlBuilderService {
  list: IWebsite[];
  keyword: string = "{{input}}";
  constructor() { }

  getList(): IWebsite[] {
    if(this.list) return this.list;

    const list = []
    WEBSITES_LIST.forEach((item, id) => {
      list.push({id, ...item})
    })

    this.list = list;
    return this.list
  }

  getUrl(id: number, query: string): string {
    if(!this.list) this.getList();

    let newQuery = query.replace(/ /g, '+');
    let output = this.list[id].url.replace(this.keyword, newQuery)
    return output;
  }
}

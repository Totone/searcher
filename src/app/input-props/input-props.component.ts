import { Component, OnInit } from '@angular/core';
import { IWebsite } from '../IWebsite';
import { UrlBuilderService } from '../url-builder.service';

@Component({
  selector: 'app-input-props',
  templateUrl: './input-props.component.html',
  styleUrls: ['./input-props.component.scss']
})
export class InputPropsComponent implements OnInit {
  query: string;
  list: IWebsite[];
  constructor(private url: UrlBuilderService) { }

  ngOnInit(): void {
    this.getList();
  }

  getList(): void {
    const list = this.url.getList();
    this.list = list;
  }

  redirectTo(id: number): void {
    if(this.query === "" || this.query === undefined) {
      if (this.list[id].url.includes(this.url.keyword)) return;
      else this.query = "";
    }

    let url = this.url.getUrl(id, this.query);
    window.open(url);
    this.query = "";
  }
}

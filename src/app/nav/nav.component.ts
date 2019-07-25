import { Component, OnInit, Input } from '@angular/core';

import { LanguageService } from '../services/language.service';
import { HeaderComponent } from '../header/header.component';
import { Language } from '../models/language.interface';

@Component({
  selector: 'nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  json_object: object;

  languages: Array<Language>;

  @Input() language: string;

  constructor(private languageService: LanguageService, private header: HeaderComponent) {
    
  }

  ngOnInit() {
    this.getJsonByLAng();
  }

  getJsonByLAng() {        
      let json_url = '/assets/data/lincs-' + this.language + '.json';
      var xmlhttp = new XMLHttpRequest();

      xmlhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
              var objects = JSON.parse(this.responseText);
              console.log(objects);
          }
      };
      xmlhttp.open("GET", json_url, true);
      xmlhttp.send();
  }
}

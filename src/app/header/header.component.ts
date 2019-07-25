import { Component, OnInit } from '@angular/core';

import { Language } from '../models/language.interface';
import { HttpClient } from '@angular/common/http';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

  public language: string = '';

  languages: Array<Language>;

  constructor(private languageService: LanguageService) {
    this.languages = languageService.languages;
  }

  ngOnInit() {
    this.language = this.languageService.default_language;
  }

  // getLanguage() {
  //   return this.language;
  // }
}

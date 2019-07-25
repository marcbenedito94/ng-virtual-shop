import { Component, OnInit } from '@angular/core';

import { LanguageService } from '../services/language.service';

import { Language } from '../models/language.interface';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public language: string = '';

  languages: Array<Language>;

  constructor(private languageService: LanguageService) {
    this.languages = languageService.languages;
  }

  ngOnInit() {
    this.language = this.languageService.default_language;
  }

}

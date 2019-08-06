import { Language } from '../models/language.interface';

import { HeaderComponent } from '../header/header.component';
import { Injectable } from '@angular/core';

@Injectable( {
    providedIn: 'root'
} )

export class LanguageService {

    current_language: string;

    languages: Array<Language> = [
        {
            id: 'es', name: 'Spanish'
        },
        {
            id: 'en', name: 'English'
        },
        {
            id: 'fr', name: 'French'
        }
    ];

    default_language = 'es';

    constructor (private header: HeaderComponent) {
        this.current_language = header.getLanguage();
    }

    // getJsonByLAng(lang) {        
    //     let json_url = '/assets/data/lincs-' + lang + '.json';
    //     var xmlhttp = new XMLHttpRequest();

    //     xmlhttp.onreadystatechange = function() {
    //         if (this.readyState == 4 && this.status == 200) {
    //             // var objects = JSON.parse(this.responseText);
    //         }
    //     };
    //     xmlhttp.open("GET", json_url, true);
    //     xmlhttp.send();
    // }
}
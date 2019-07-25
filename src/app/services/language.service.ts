import { Language } from '../models/language.interface';

export class LanguageService {
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
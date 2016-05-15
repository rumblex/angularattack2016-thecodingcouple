import { Component }  from '@angular/core';
import { CORE_DIRECTIVES, FORM_DIRECTIVES } from '@angular/common';
//import { TYPEAHEAD_DIRECTIVES } from 'ng2-bootstrap/ng2-bootstrap';
import { SocialService } from '../service/social.service';
import { User } from '../model/user';


@Component({
    selector: 'sentiment-filter',
    template: `
        <div class="form-group">
            <h4>Filter</h4>
            <label for="searchInput">Show sentiments for:</label>
            <div class="input-group">
                <input id="searchInput" 
                       class="form-control" 
                       type="search" 
                       placeholder="Search users" 
                       [(ngModel)]="searchText"
                       (keyup)="findUsers(searchText)"> 
                <span class="input-group-addon">
                    <span class="fa fa-search" aria-hidden="true"></span>
                </span>                
            </div>
        </div>
    `,
    //directives: [TYPEAHEAD_DIRECTIVES, CORE_DIRECTIVES, FORM_DIRECTIVES]
})
export class SentimentFilterComponent {
    searchText: string;
    matchingUsers: User[];
    
    constructor(private socialService: SocialService) {
        
    }
    
    findUsers(query) {
        this.socialService.searchTwitterUsers(query)
                          .then(users => this.matchingUsers = users);
    }
}
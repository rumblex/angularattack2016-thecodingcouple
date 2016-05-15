import { Component }  from '@angular/core';
import { CORE_DIRECTIVES, FORM_DIRECTIVES } from '@angular/common';
import { TYPEAHEAD_DIRECTIVES } from 'ng2-bootstrap/ng2-bootstrap';
import { SocialService } from '../service/social.service';
import { User } from '../model/user';


@Component({
    selector: 'sentiment-filter',
    template: `
        <div class="form-group">
            <h4>Filter</h4>
            <label for="searchInput">Show sentiments for:</label>
            <div class="input-group">            
                <span class="input-group-addon">@</span>      
                <input id="searchInput" 
                       class="form-control" 
                       type="search" 
                       placeholder="Username" 
                       [typeahead]="matchingUsers"
                       [typeaheadOptionField]="'name'"
                       (typeaheadOnSelect)="userSelected($event)"
                       [(ngModel)]="searchText"
                       (keyup)="findUsers(searchText)">           
            </div>
        </div>
    `,
    directives: [TYPEAHEAD_DIRECTIVES, CORE_DIRECTIVES, FORM_DIRECTIVES]
})
export class SentimentFilterComponent {
    searchText: string;
    matchingUsers: User[];
    selectedUsers: User[];
    
    constructor(private socialService: SocialService) {
        this.matchingUsers = new Array();
    }
    
    findUsers(query) {
        this.socialService.searchTwitterUsers(query)
                          .then(users => this.matchingUsers = users);
    }
    
    userSelected(event) {
        this.selectedUsers.push(event.item);
    }
}
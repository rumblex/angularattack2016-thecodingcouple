import { Component, Output, EventEmitter }  from '@angular/core';
import { CORE_DIRECTIVES, FORM_DIRECTIVES } from '@angular/common';
import { TYPEAHEAD_DIRECTIVES } from 'ng2-bootstrap/ng2-bootstrap';
import { SocialService } from '../service/social.service';
import { User } from '../model/user';


@Component({
    selector: 'sentiment-filter',
    template: `
        <form>
            <div class="form-group">
                <h4>Filter</h4>
                <label for="searchInput">Show sentiments for:</label>
                <div class="input-group">    
                    <input id="searchInput" 
                        class="form-control" 
                        type="search" 
                        autocomplete="off"
                        placeholder="Username" 
                        [typeahead]="findUsers(getContext())"
                        [typeaheadOptionsLimit]="20"
                        [typeaheadOptionField]="'name'"
                        (typeaheadOnSelect)="userSelected($event); searchText = '';"
                        [(ngModel)]="searchText"> 
                    <span class="input-group-addon">
                        <span class="fa fa-search" aria-hidden="true"></span>
                    </span> 
                </div>
            </div>
        </form>
        <ul>
            <li *ngFor="let user of selectedUsers">{{user.name}}</li>
        </ul>
    `,
    directives: [TYPEAHEAD_DIRECTIVES, CORE_DIRECTIVES, FORM_DIRECTIVES]
})
export class SentimentFilterComponent {
    @Output()
    usersChanged = new EventEmitter<User[]>();
    
    searchText: string;
    matchingUsers: User[];
    selectedUsers: User[];
    cache: any;
    previousSearchText: string;
    
    constructor(private socialService: SocialService) {
        this.matchingUsers = new Array();
        this.selectedUsers = new Array();
        this.searchText = "";
    }
    
    findUsers(context) {
        if (context.cache && context.previousSearchText === context.searchText) {
            return function() {return context.cache;};
        }
        
        context.previousSearchText = context.searchText;
        let query = new RegExp(context.searchText, 'ig');
        
        context.cache = context.socialService.searchTwitterUsers(context.searchText);
                          //.then(users => users.map((user) => user.name));
                          
           
        return function() { return context.cache; };
    }
    
    userSelected(event) {
        this.selectedUsers.push(event.item);        
        this.usersChanged.emit(this.selectedUsers);
    }
    
    getContext() {
        return this;
    }
    
}
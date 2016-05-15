import { Component }  from '@angular/core';

@Component({
    selector: 'sentiment-filter',
    template: `
        <div class="form-group">
            <h4>Filter</h4>
            <label for="searchInput">Show sentiments for:</label>
            <div class="input-group">
                <input id="searchInput" class="form-control" type="search" placeholder="Search"> 
                <span class="input-group-btn">
                    <button class="btn btn-default" type="button">
                        <span class="fa fa-search" aria-hidden="true"></span>
                    </button>
                </span>                
            </div>
        </div>
    `,
})
export class SentimentFilterComponent {
    
}
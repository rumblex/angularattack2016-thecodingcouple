import { Component } from '@angular/core';

@Component({
    selector: 'landing',
    template: `
    <div class="jumbotron">
        <div class="container">
            <div>
                <h1>Moody</h1>
                <p>The emotional polarity of your social networks.</p>
                <p>
                    <a class="btn btn-primary btn-lg" role="button">Continue with Twitter</a>
                    <a class="btn btn-primary btn-lg" role="button">Continue with Facebook</a>
                </p>
            </div>
        </div>  
    </div>
    `
})
export class LandingComponent {
    
}
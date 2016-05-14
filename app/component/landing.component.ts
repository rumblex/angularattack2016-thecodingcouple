import { Component } from '@angular/core';
import { Router } from '@angular/router-deprecated';

import {SocialService} from "../service/social.service";
@Component({
    selector: 'landing',
    template: `
    <div class="jumbotron">
        <div class="container">
            <div>
                <h1>Moody</h1>
                <p>The emotional polarity of your social networks.</p>
                <p>
                    <a class="btn btn-primary btn-lg" role="button" (click)="loginTwitter()">Continue with Twitter</a>
                    <a class="btn btn-primary btn-lg" role="button">Continue with Facebook</a>
                </p>
            </div>
        </div>  
    </div>
    `
})

export class LandingComponent {
     constructor(private social: SocialService, private router: Router){
        
     }
    
     loginTwitter() {
         this.social.loginTwitter()
                    .then(() => this.goToSentiments(), this.errorHandler);
     }
     
     goToSentiments() {
         let link = ['Sentiments'];
         this.router.navigate(link);
     }
     
     errorHandler(err) {
         console.log(err);
     }
}
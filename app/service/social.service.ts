import { Injectable } from '@angular/core';

declare var OAuth:any;

@Injectable()
export class SocialService {
        
    constructor() {
        OAuth.initialize("6mt4xJ4txgqrt7TGRFnqJLirGYQ");
    }
        
    loginTwitter() {
        return new Promise((resolve, reject) => 
            OAuth.popup("twitter")
            .done(function(result) {
                this.twitter = result;
                resolve();
            })
            .fail(function(err) {
                reject(err);
            }));
    }   
}
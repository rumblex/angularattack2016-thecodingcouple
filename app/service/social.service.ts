import { Injectable } from '@angular/core';
import { Tweet } from '../model/tweet';

declare var OAuth:any;

@Injectable()
export class SocialService {
       
    constructor() {
        OAuth.initialize("6mt4xJ4txgqrt7TGRFnqJLirGYQ");
    }
        
    loginTwitter() : Promise<any>  {
        return new Promise((resolve, reject) => {
            let twitter = OAuth.create('twitter');
            if (!twitter) {
                OAuth.popup("twitter", {cache: true})
                    .done(result => {
                        resolve(result);
                    })
                    .fail(err => {
                        reject(err);
                    });
            } else {
                resolve(twitter);
            }
        });
    }
    
    getLatestTweets(cursor) : Promise<Tweet[]> {
       return this.loginTwitter().then(twitter => {
            let url = '/1.1/statuses/home_timeline.json';
            url += "?count=200";
            if (cursor) {
                url += '&max_id=' + cursor;
            }
            
            return new Promise<Tweet[]>((resolve, reject) =>
                twitter.get(url)
                    .done(response => {
                        let timeline:Tweet[] = new Array();
                        response.forEach(entry => {
                            timeline.push({
                                user: entry.user.name, 
                                profileImageUrl: entry.user.profile_image_url, 
                                text: entry.text, 
                                createdAt: new Date(entry.created_at), 
                                url: "http://twitter.com/statuses/" + entry.id_str
                            }) 
                        });
                        resolve(timeline);
                    })
                    .fail(error => {
                        reject(error);
                    })
            );
       });
    }   
}
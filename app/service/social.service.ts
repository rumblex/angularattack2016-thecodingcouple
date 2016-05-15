import { Injectable } from '@angular/core';
import { Tweet } from '../model/tweet';
import { User } from '../model/user';

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
    
    getUsersTweets(id:number) : Promise<Tweet[]> {
        return this.loginTwitter().then(twitter => {
            let url = '/1.1/statuses/user_timeline.json';
            url += "?count=200";
            url += '&user_id=' + id;
          
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
    
    searchTwitterUsers(query:string) : Promise<User[]>{           
        return this.loginTwitter().then(twitter => {          
                let q = query;
                let url = '1.1/users/search.json?q=';
                url += q;
                url += "&page=1&count=10";
                
                return new Promise<User[]>((resolve, reject) => {
                    if (query) { 
                        twitter.get(url)
                            .done(response => {
                                let users:User[] = new Array();
                                response.forEach(entry => {
                                    users.push({
                                        id: entry.id,
                                        name: entry.name, 
                                        profileImageUrl: entry.profile_image_url, 
                                        username: entry.screen_name, 
                                        url: "http://twitter.com/statuses/" + entry.id_str
                                    }) 
                                });
                                resolve(users);
                            })
                            .fail(error => {
                                reject(error);
                            })
                    } else {
                        resolve(new Array());
                    }
                });
       }); 
    }   
}
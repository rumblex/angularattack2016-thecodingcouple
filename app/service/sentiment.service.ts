import { Injectable } from '@angular/core';
import { SENTIMENTS } from '../model/mock-sentiments';
import { SocialService } from './social.service';
import { Http, Response, Headers } from '@angular/http';
import { Sentiment } from '../model/sentiment';

@Injectable()
export class SentimentService {
    
    constructor(private social : SocialService, private http: Http) {
        
    }
    
    getSentiments() {
         return Promise.resolve(SENTIMENTS);
     }
    
    // getSentiments() {
    //     let headers = new Headers({ 
    //         'Access-Control-Allow-Origin': '*' 
    //     });
    //     let url = "http://sentiment140.com/api/bulkClassifyJson?appid=ashley.grenon@gmail.com";
        
    //     return this.social.getLatestTweets(0)
    //                       .then(tweets => this.http.post(url, JSON.stringify({
    //                             data: tweets.map(function(t){
    //                                 return {text: t.text};
    //                             })
    //                         }), headers).toPromise()
    //                       .then(response => {
    //                             let sentiments : Sentiment[] = new Array();
    //                             let data = response.json().data;
    //                             for (let i = 0; i < tweets.length; i++) {
    //                                 sentiments.push({username: tweets[i].user, emotion: data[i].polarity, status: tweets[i].text, avatarUrl: tweets[i].profileImageUrl, date: tweets[i].createdAt});
    //                             }
                                
    //                             return sentiments;
    //                       }));
                            
    // }
}
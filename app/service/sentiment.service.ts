import { Injectable } from '@angular/core';
import { SENTIMENTS } from '../model/mock-sentiments';
import { SocialService } from './social.service';
import { Http, Response, Headers } from '@angular/http';
import { Sentiment } from '../model/sentiment';

@Injectable()
export class SentimentService {
     // given a date range, return a collection of emotions
     // avatar, display name, text analyzed and what it was classified as
     
    //  getSentiments() {
    //      return Promise.resolve(SENTIMENTS);
    //  }
    
    constructor(private social : SocialService, private http: Http) {
        
    }
    
    getSentiments() {
        let body = JSON.stringify({
                                data: tweets.map(function(t){
                                    return {text: t.text};
                                })
                            });
        let headers = new Headers({ 
            'Access-Control-Allow-Origin': '*' 
        });
        let url = "http://sentiment140.com/api/bulkClassifyJson?appid=ashley.grenon@gmail.com";
        
        return this.social.getLatestTweets(0)
                          .then(tweets => this.http.post(url, body, headers).toPromise()
                          .then(response => {
                                let sentiments : Sentiment[] = new Array();
                                let data = response.json().data;
                                for (let i = 0; i < tweets.length; i++) {
                                    sentiments.push({username: tweets[i].user, emotion: data[i].polarity, status: tweets[i].text, avatarUrl: tweets[i].profileImageUrl, date: tweets[i].createdAt});
                                }
                                
                                return sentiments;
                          }));
                            
    }
}
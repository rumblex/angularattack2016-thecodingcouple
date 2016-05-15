import { Injectable } from '@angular/core';
import { SocialService } from './social.service';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Sentiment } from '../model/sentiment';
import { User } from '../model/user';
import { UserSentiments } from '../model/user-sentiments';

@Injectable()
export class SentimentService {
    url:string;    
    headers:Headers;
    
    constructor(private social : SocialService, private http: Http) {
        this.url = "http://angularattack2016-moody.herokuapp.com/sentiment140/bulkClassifyJson";
        this.headers = new Headers({ 
            'Content-Type': 'application/json' 
        });
    }
    
    getSentiments() {      
        return this.social.getLatestTweets(0)
                          .then(tweets => this.http.post(this.url, JSON.stringify({
                                data: tweets.map(function(t){
                                    return {text: t.text};
                                })
                            }), new RequestOptions({headers: this.headers})).toPromise()
                          .then(response => {
                                let sentiments : Sentiment[] = new Array();
                                let data = response.json().data;
                                for (let i = 0; i < tweets.length; i++) {
                                    sentiments.push({
                                        username: tweets[i].user, 
                                        polarity: data[i].polarity, 
                                        status: tweets[i].text, 
                                        avatarUrl: tweets[i].profileImageUrl, 
                                        date: tweets[i].createdAt,
                                        profileUrl: tweets[i].url
                                    });
                                }
                                
                                return sentiments;
                          }));
                            
    }
    
    getUserSentiments(user:User) : Promise<UserSentiments> {      
        return this.social.getUsersTweets(user.id)
                          .then(tweets => this.http.post(this.url, JSON.stringify({
                                data: tweets.map(function(t){
                                    return {text: t.text};
                                })
                            }), new RequestOptions({headers: this.headers})).toPromise()
                          .then(response => {
                                let sentiments : Sentiment[] = new Array();
                                let data = response.json().data;
                                for (let i = 0; i < tweets.length; i++) {
                                    sentiments.push({
                                        username: tweets[i].user, 
                                        polarity: data[i].polarity, 
                                        status: tweets[i].text, 
                                        avatarUrl: tweets[i].profileImageUrl, 
                                        date: tweets[i].createdAt,
                                        profileUrl: tweets[i].url
                                    });
                                }
                                
                                return {user: user, sentimentsByDate: sentiments};
                          }));
                            
    }
}
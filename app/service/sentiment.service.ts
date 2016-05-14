import { Injectable } from '@angular/core';
import { SENTIMENTS } from '../model/mock-sentiments';

@Injectable()
export class SentimentService {
     // given a date range, return a collection of emotions
     // avatar, display name, text analyzed and what it was classified as
     
     getSentiments() {
         return Promise.resolve(SENTIMENTS);
     }
}
import { Injectable } from '@angular/core';
import { EMOTIONS } from '../model/mock-emotions';

@Injectable()
export class EmotionService {
     // given a date range, return a collection of emotions
     // avatar, display name, text analyzed and what it was classified as
     
     getEmotions() {
         return EMOTIONS;
     }
}
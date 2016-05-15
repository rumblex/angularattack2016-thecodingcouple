import { User } from "./user";
import { Sentiment } from "./sentiment";

export class UserSentiments {
    user:User;
    sentimentsByDate:Sentiment[];
    
    get positiveSentiments() : Sentiment[] {
        return this.sentimentsByDate.filter(s => s.polarity === 4);
    }
    
    get negativeSentiments() : Sentiment[] {
        return this.sentimentsByDate.filter(s => s.polarity === 0);
    }
    
    get negativeCount() : number {
        return this.negativeSentiments.length;
    }
    
    get positiveCount() : number {
        return this.positiveSentiments.length;
    }
}
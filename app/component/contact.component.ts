import { Component } from '@angular/core';

@Component({
    selector: 'contact',
    template: `
        <div class="container">
            <h1>Contact Page</h1>
            <p>Questions? Comments? Issues? Let us know!<br />
                You can reach us on <strong>Twitter</strong> as 
                <a href="https://twitter.com/thecodingcouple">@thecodingcouple</a> 
                or you can fill out a <strong>contact form</strong> 
                <a href="http://www.thecodingcouple.com/contact/">here</a>.
            </p>  
        </div>
    `
})
export class ContactComponent {
    
}
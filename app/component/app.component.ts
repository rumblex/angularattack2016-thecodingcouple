import { Component } from '@angular/core';
import { LandingComponent } from './landing.component';

@Component({
  selector: 'moody-app',
  template: `
    <header>
        <nav class="navbar navbar-fixed-top">
            <div class="container">
                <div class="navbar-header">
                    <p class="navbar-brand">The Coding Couple | Moody</p>
                </div>    
                <div id="navbar" class="navbar-collapse collapse">                    
                    <ul class="nav navbar-nav">
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>   
                </div>         
            </div>
        </nav>
    </header>
    <main>
        <landing></landing>
    </main>
    <hr>
    <footer>
        <div class="container">
            <p>&copy; 2016 The Coding Couple.</p>
        </div>
    </footer>`,
    directives: [LandingComponent]
})
export class AppComponent { }
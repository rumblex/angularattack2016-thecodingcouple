import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <header>
        <nav class="navbar navbar-fixed-top">
            <div class="container">
                <div class="navbar-header">
                    <p>The Coding Couple | Moody</p>
                </div>    
                <div id="navbar" class="collapse navbar-collapse">                    
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
        <div class="container">
            <div>
                <h1>Moody: The emotional polarity of your social network</h1>
            </div>
        </div>  
    </main>
    <footer>
        <div class="container">
            <small>&copy; 2016 The Coding Couple.</small>
        </div>
    </footer>`
})
export class AppComponent { }
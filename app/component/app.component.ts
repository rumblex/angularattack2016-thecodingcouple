import { Component } from '@angular/core';

@Component({
  selector: 'moody-app',
  template: `
    <header>
        <nav class="navbar navbar-inverse navbar-fixed-top">
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
        <div class="jumbotron">
            <div class="container">
                <div>
                    <h1>Moody</h1>
                    <p>The emotional polarity of your social networks.</p>
                    <p>
                        <a class="btn btn-primary btn-lg" role="button">Continue with Twitter</a>
                        <a class="btn btn-primary btn-lg" role="button">Continue with Facebook</a>
                    </p>
                </div>
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
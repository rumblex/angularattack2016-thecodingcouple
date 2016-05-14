import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <header>
        <p>The Coding Couple | Moody</p>
        <nav>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    </header>
    <main>  
        <h1>Moody: The emotional polarity of your social network</h1>
    </main>
    <footer>
        <small>&copy; 2016 The Coding Couple.</small>
    </footer>`
})
export class AppComponent { }
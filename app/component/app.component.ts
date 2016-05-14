import { Component } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';
import { EmotionService } from '../service/emotion.service';
import { LandingComponent } from './landing.component';
import { AboutComponent } from './about.component';
import { ContactComponent } from './contact.component';

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
                        <li><a [routerLink]="['Home']">Home</a></li>
                        <li><a [routerLink]="['About']">About</a></li>
                        <li><a [routerLink]="['Contact']">Contact</a></li>
                    </ul>   
                </div>         
            </div>
        </nav>
    </header>
    <main>
        <router-outlet></router-outlet>
    </main>
    <footer>
        <div class="container">        
            <hr>
            <p>&copy; 2016 The Coding Couple.</p>
        </div>
    </footer>`,
    directives: [
        ROUTER_DIRECTIVES,
        LandingComponent,
        AboutComponent,
        ContactComponent
        ],
    providers: [
        ROUTER_PROVIDERS, 
        EmotionService
        ]
})
@RouteConfig([
    {
        path: '/',
        name: 'Home',
        component: LandingComponent
    },
    {
        path: '/about',
        name: 'About',
        component: AboutComponent
    },
    {
        path: '/contact',
        name: 'Contact',
        component: ContactComponent
    }
])
export class AppComponent {
    title = "Moody";
 }
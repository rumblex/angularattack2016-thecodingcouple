import { Component } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';
import { HTTP_PROVIDERS } from '@angular/http';
import { SocialService } from '../service/social.service';
import { SentimentService } from '../service/sentiment.service';
import { LandingComponent } from './landing.component';
import { AboutComponent } from './about.component';
import { ContactComponent } from './contact.component';
import { SentimentsComponent } from './sentiments.component';


@Component({
  selector: 'moody-app',
  template: `
    <header>
        <nav class="navbar navbar-fixed-top">
            <div class="container">
                <div class="navbar-header">
                    <p class="navbar-brand">The Coding Couple | Moody</p>
                </div>    
                <div id="navbar">                    
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
        ContactComponent,
        SentimentsComponent
        ],
    providers: [
        ROUTER_PROVIDERS, 
        HTTP_PROVIDERS
        SocialService,
        SentimentService
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
    },
    {
        path: '/sentiments',
        name: 'Sentiments',
        component: SentimentsComponent
    }
])
export class AppComponent {
    title = "Moody";
 }
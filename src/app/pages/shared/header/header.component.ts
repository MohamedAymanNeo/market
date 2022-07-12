import { Component, OnInit, ChangeDetectionStrategy  } from '@angular/core';
import { NavigationEnd, Router, Event as NavigationEvent } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {
  currentRoute!: any;
  constructor(private router:Router) { 
    // this.router.events.subscribe((event: NavigationEvent) => {
    //   if(event instanceof NavigationEnd) {
    //    if(event.url.includes('products')) {
    //     this.currentRoute = 0;
    //     console.log('iam in',event.url);
    //   } else {
    //     this.currentRoute = 1;
    //     console.log('here am i ',event.url);
    //    }
    //   }
    // });
  }

  ngOnInit(): void {
  }
  goTo(place: string) {
    this.router.navigate(['/'+place])
  }
}

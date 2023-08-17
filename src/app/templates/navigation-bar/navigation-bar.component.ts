import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent {
  items: MenuItem[] | undefined;
  ngOnInit() {
    this.items = [
      {
        label: 'Categories',
        items: [

          {
            label: 'Delete',
          },
          {
            separator: true
          },

          {
            label: 'Export',
          }
        ]
      },
      {
        label: 'Deals',
      },
      {
        label: "What's New",
        
      },
      {
        label: 'Delivery',
        
      },
     
    ];
  }

}

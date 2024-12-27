import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  standalone: false,
  
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {
  menuItems: string[] = ['Dashboard', 'Statistics', 'Transactions'];
  activeItem: string = 'Dashboard'; // Default active item
  isProfileCardVisible: boolean = false;

  setActiveItem(item: string): void {
    this.activeItem = item;
  }
}

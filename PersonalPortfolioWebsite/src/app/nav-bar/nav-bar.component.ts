import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  standalone: false,
  
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {
  // menuItems: string[] = ['Dashboard', 'Statistics', 'Transactions'];
  // activeItem: string = 'Dashboard'; // Default active item

  // setActiveItem(item: string): void {
  //   this.activeItem = item;
  // }
  isDarkMode: boolean = false;  // This will control the theme mode
  menuItems = ['Home', 'About', 'Services', 'Contact']; // Example menu items
  activeItem: string = 'Home'; // Currently active menu item

  // Function to toggle the theme
  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    this.applyTheme();
  }

  // Apply the theme by adding/removing the 'dark-mode' class to the body
  // private applyTheme() {
  //   if (this.isDarkMode) {
  //     document.body.classList.add('dark-mode');
  //   } else {
  //     document.body.classList.remove('dark-mode');
  //   }
  // }

// Apply the theme by adding/removing the 'dark-mode' class to the body
private applyTheme() {
  if (this.isDarkMode) {
    document.body.classList.add('dark-mode');
    document.body.classList.remove('light-mode');
  } else {
    document.body.classList.add('light-mode');
    document.body.classList.remove('dark-mode');
  }
}


  // Function to set the active item in the menu
  setActiveItem(item: string) {
    this.activeItem = item;
  }
}

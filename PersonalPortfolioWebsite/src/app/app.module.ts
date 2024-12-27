import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardCardComponent } from './dashboard-card/dashboard-card.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ExperienceCardComponent } from './experience-card/experience-card.component';
import { ProjectCardComponent } from './project-card/project-card.component'; // Import standalone component

@NgModule({
  declarations: [AppComponent, NavBarComponent, ExperienceCardComponent, ProjectCardComponent], // Remove DashboardCardComponent from declarations
  imports: [
    BrowserModule,
    AppRoutingModule,
    DashboardCardComponent, // Add the standalone component to imports
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA], // Optional: If you're using custom elements
})
export class AppModule { }

import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NavigationComponent } from "./components/navigation/navigation.component";
import { HeroComponent } from "./components/hero/hero.component";
import { FederationSectionsComponent } from "./components/federation-sections/federation-sections.component";
import { FeatureComponent } from "./components/feature/feature.component";
import { LucideAngularModule } from "lucide-angular";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [
    CommonModule,
    NavigationComponent,
    HeroComponent,
    FederationSectionsComponent,
    FeatureComponent,
    LucideAngularModule,
  ],
  template: `
    <div class="min-h-screen bg-[#1a1a1a]">
      <app-navigation />
      <app-hero />
      <app-federation-sections />
    </div>
  `,
})
export class AppComponent {}

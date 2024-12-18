import { Component } from "@angular/core";
import { LucideAngularModule, MenuIcon, MoonIcon } from "lucide-angular";
@Component({
  selector: "app-navigation",
  standalone: true,
  imports: [LucideAngularModule],
  templateUrl: "./navigation.component.html",
})
export class NavigationComponent {
  moonIcon = MoonIcon;
  menuIcon = MenuIcon;
}

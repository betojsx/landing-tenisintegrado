import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NavigationComponent } from "./components/navigation/navigation.component";
import { HeroComponent } from "./components/hero/hero.component";
import { FederationSectionsComponent } from "./components/federation-sections/federation-sections.component";
import { FooterComponent } from "./components/footer/footer.component";
import { FeatureComponent } from "./components/feature/feature.component";
import { LucideAngularModule } from "lucide-angular";
import { SectionHeaderComponent } from "./components/section-header/section-header";

@Component({
	selector: "app-root",
	standalone: true,
	imports: [
		CommonModule,
		NavigationComponent,
		HeroComponent,
		FederationSectionsComponent,
		FeatureComponent,
		FooterComponent,
		SectionHeaderComponent,
		LucideAngularModule,
	],
	template: `
		<div class="min-h-screen ">
			<app-navigation />
			<app-hero />
			<app-federation-sections />
			<app-footer />
		</div>
	`,
})
export class AppComponent {}

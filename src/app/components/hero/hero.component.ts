import { Component } from "@angular/core";
import { LucideAngularModule } from "lucide-angular";
import { FeatureComponent } from "../feature/feature.component";
import { CommonModule } from "@angular/common";
import { TranslateModule, TranslateService } from "@ngx-translate/core";

@Component({
	selector: "app-hero",
	standalone: true,
	imports: [LucideAngularModule, CommonModule, TranslateModule, FeatureComponent],
	templateUrl: "./hero.component.html",
})
export class HeroComponent {
	features = [
		{
			titleKey: "HERO.FEATURES.ACCESSIBILITY.TITLE",
			descriptionKey: "HERO.FEATURES.ACCESSIBILITY.DESCRIPTION",
		},
		{
			titleKey: "HERO.FEATURES.COMMUNITY.TITLE",
			descriptionKey: "HERO.FEATURES.COMMUNITY.DESCRIPTION",
		},
		{
			titleKey: "HERO.FEATURES.COMPETITIONS.TITLE",
			descriptionKey: "HERO.FEATURES.COMPETITIONS.DESCRIPTION",
		},
		{
			titleKey: "HERO.FEATURES.DEVELOPMENT.TITLE",
			descriptionKey: "HERO.FEATURES.DEVELOPMENT.DESCRIPTION",
		},
	];

	constructor(private translate: TranslateService) {}

	goToSites(event: Event) {
		event.preventDefault();
		const sitesSection = document.getElementById("sites");
		if (sitesSection) {
			sitesSection.scrollIntoView({ behavior: "smooth" });
		}
	}
}

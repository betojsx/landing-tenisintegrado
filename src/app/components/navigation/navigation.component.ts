import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LucideAngularModule } from "lucide-angular";
import { TranslateModule } from "@ngx-translate/core";
import { LanguageService } from "../../services/language.service";

@Component({
	selector: "app-navigation",
	standalone: true,
	imports: [CommonModule, LucideAngularModule, TranslateModule],
	templateUrl: "./navigation.component.html",
})
export class NavigationComponent {
	isLanguageMenuOpen = false;
	currentLang: string;
	languages = [
		{ code: "pt-BR", name: "Português" },
		{ code: "es", name: "Español" },
	];

	constructor(private languageService: LanguageService) {
		this.currentLang = this.languageService.getCurrentLang();
		this.languageService.currentLang$.subscribe((lang) => {
			this.currentLang = lang;
		});
	}

	toggleLanguageMenu() {
		this.isLanguageMenuOpen = !this.isLanguageMenuOpen;
	}

	changeLanguage(lang: string) {
		this.languageService.setLanguage(lang);
		this.isLanguageMenuOpen = false;
	}
}

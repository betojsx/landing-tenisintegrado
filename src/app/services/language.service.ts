import { Injectable } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
	providedIn: "root",
})
export class LanguageService {
	private currentLang = new BehaviorSubject<string>("pt-BR");
	currentLang$ = this.currentLang.asObservable();

	constructor(private translate: TranslateService) {}

	setLanguage(lang: string) {
		this.translate.use(lang);
		this.currentLang.next(lang);
	}

	getCurrentLang(): string {
		return this.currentLang.value;
	}
}

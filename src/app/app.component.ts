import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NavigationComponent } from "./components/navigation/navigation.component";
import { HeroComponent } from "./components/hero/hero.component";
import { FederationSectionsComponent } from "./components/federation-sections/federation-sections.component";
import { FooterComponent } from "./components/footer/footer.component";
import { FeatureComponent } from "./components/feature/feature.component";
import { LucideAngularModule } from "lucide-angular";
import { SectionHeaderComponent } from "./components/section-header/section-header";
import { TranslateModule, TranslateLoader, TranslateService } from "@ngx-translate/core";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";

export function HttpLoaderFactory(http: HttpClient) {
	return new TranslateHttpLoader(http, "./assets/i18n/", ".json");
}

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
		HttpClientModule,
		TranslateModule,
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
export class AppComponent {
	constructor(private translate: TranslateService) {
		translate.setDefaultLang("pt-BR");
		translate.use("pt-BR");
	}
}

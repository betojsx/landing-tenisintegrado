import { ApplicationConfig, importProvidersFrom } from "@angular/core";

import { HttpClient, provideHttpClient } from "@angular/common/http";
import { TranslateLoader, TranslateModule } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { icons, LucideAngularModule } from "lucide-angular";

export function HttpLoaderFactory(http: HttpClient) {
	return new TranslateHttpLoader(http, "./assets/i18n/", ".json");
}

export const appConfig: ApplicationConfig = {
	providers: [
		importProvidersFrom(LucideAngularModule.pick(icons)),

		provideHttpClient(),
		TranslateModule.forRoot({
			loader: {
				provide: TranslateLoader,
				useFactory: HttpLoaderFactory,
				deps: [HttpClient],
			},
		}).providers!,
	],
};

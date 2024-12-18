import { ApplicationConfig, importProvidersFrom } from "@angular/core";
import { icons, LucideAngularModule } from "lucide-angular";

export const appConfig: ApplicationConfig = {
  providers: [importProvidersFrom(LucideAngularModule.pick(icons))],
};

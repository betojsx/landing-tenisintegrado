import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LucideAngularModule } from "lucide-angular";
import { TranslateModule } from "@ngx-translate/core";

@Component({
	selector: "app-footer",
	standalone: true,
	imports: [CommonModule, LucideAngularModule, TranslateModule],
	templateUrl: "./footer.component.html",
})
export class FooterComponent {
	currentYear = new Date().getFullYear();
}

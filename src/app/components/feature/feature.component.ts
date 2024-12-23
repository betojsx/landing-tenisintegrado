import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TranslateModule } from "@ngx-translate/core";

@Component({
	selector: "app-feature",
	standalone: true,
	imports: [CommonModule, TranslateModule],
	templateUrl: "./feature.component.html",
})
export class FeatureComponent {
	@Input() titleKey!: string;
	@Input() descriptionKey!: string;
}

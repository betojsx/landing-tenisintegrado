import { Component, Input } from "@angular/core";

@Component({
  selector: "app-feature",
  standalone: true,
  templateUrl: "./feature.component.html",
})
export class FeatureComponent {
  @Input() title!: string;
  @Input() description!: string;
}

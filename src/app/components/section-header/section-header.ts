import { Component, Input } from "@angular/core";

@Component({
	selector: "app-section-header",
	standalone: true,
	template: `
		<div class="mb-12">
			<div class="flex items-center gap-4 mb-4">
				<h2 class="text-3xl font-bold text-white">{{ title }}</h2>
				<div class="flex-1 h-px bg-gradient-to-r from-primary/50 to-transparent"></div>
			</div>
			<p class="text-white/60">{{ subtitle }}</p>
		</div>
	`,
})
export class SectionHeaderComponent {
	@Input() title!: string;
	@Input() subtitle!: string;
}

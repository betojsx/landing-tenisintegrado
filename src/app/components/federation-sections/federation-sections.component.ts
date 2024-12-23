import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FederationCardComponent } from "../federation-card/federation-card.component";
import { SectionHeaderComponent } from "../section-header/section-header";
import { TranslateModule } from "@ngx-translate/core";

@Component({
	selector: "app-federation-sections",
	standalone: true,
	imports: [CommonModule, FederationCardComponent, SectionHeaderComponent, TranslateModule],
	templateUrl: "./federation-sections.component.html",
})
export class FederationSectionsComponent {
	confederations = [
		{
			name: "CBT",
			fullName: "Confederação Brasileira de Tênis",
			logo: "/logos/logo_brasil.jpg",
			link: "#",
		},
		{
			name: "AAT",
			fullName: "Asociación Argentina de Tenis",
			logo: "/logos/logo_argentina.jpg",
			link: "#",
		},
		{
			name: "FPT",
			fullName: "Federación Peruana de Tenis",
			logo: "/logos/logo_peru.jpg",
			link: "#",
		},
		{
			name: "FMT",
			fullName: "Federación Mexicana de Tenis",
			logo: "/logos/logo_mexico.jpg",
			link: "#",
		},
		{
			name: "FChT",
			fullName: "Federación Chilena de Tenis",
			logo: "/logos/logo_chile.jpg",
			link: "#",
		},
		{
			name: "FCR",
			fullName: "Federación Costarricense de Tenis",
			logo: "/logos/logo_costarica.jpg",
			link: "#",
		},
		{
			name: "APT",
			fullName: "Asociación Paraguaya de Tenis",
			logo: "/logos/logo_paraguay.jpg",
			link: "#",
		},
		{
			name: "AUT",
			fullName: "Asociación Uruguaya de Tenis",
			logo: "/logos/logo_uruguay.jpg",
			link: "#",
		},
		{
			name: "FVT",
			fullName: "Federación Venezolana de Tenis",
			logo: "/logos/logo_venezuela.jpg",
			link: "#",
		},
		{
			name: "FAT",
			fullName: "Federação Angolana de Ténis",
			logo: "/logos/logo_angola.jpg",
			link: "#",
		},
	];

	federations = [
		{
			name: "FAT",
			fullName: "Federação Alagoana de Tênis",
			logo: "/logos/logo_alagoas.jpg",
			link: "#",
		},
		{
			name: "FAPT",
			fullName: "Federação Amapaense de Tênis",
			logo: "/logos/logo_amapa.jpg",
			link: "#",
		},
		{
			name: "FAMT",
			fullName: "Federação Amazonense de Tênis",
			logo: "/logos/logo_amazonas.jpg",
			link: "#",
		},
		{
			name: "FCT",
			fullName: "Federação Catarinense de Tênis",
			logo: "/logos/logo_catarinense.jpg",
			link: "#",
		},
		{
			name: "FCT",
			fullName: "Federação Cearense de Tênis",
			logo: "/logos/logo_cearense.jpg",
			link: "#",
		},
		{
			name: "FEST",
			fullName: "Federação Espírito-Santense de Tênis",
			logo: "/logos/logo_espiritosanto.jpg",
			link: "#",
		},
		{
			name: "FGT",
			fullName: "Federação Goiana de Tênis",
			logo: "/logos/logo_goiana.jpg",
			link: "#",
		},
		{
			name: "FMTT",
			fullName: "Federação Mato-Grossense de Tênis",
			logo: "/logos/logo_matogrosso.jpg",
			link: "#",
		},
		{
			name: "FPT",
			fullName: "Federação Paraense de Tênis",
			logo: "/logos/logo_paraense.jpg",
			link: "#",
		},
		{
			name: "FPIT",
			fullName: "Federação Piauiense de Tênis",
			logo: "/logos/logo_piaui.jpg",
			link: "#",
		},
		{
			name: "FRT",
			fullName: "Federação Rondoniense de Tênis",
			logo: "/logos/logo_rondonia.jpg",
			link: "#",
		},
		{
			name: "FST",
			fullName: "Federação Sergipana de Tênis",
			logo: "/logos/logo_sergipana.jpg",
			link: "#",
		},
		{
			name: "FTT",
			fullName: "Federação Tocantinense de Tênis",
			logo: "/logos/logo_tocantins.jpg",
			link: "#",
		},
	];

	constructor() {
		console.log(this.federations);
	}
}

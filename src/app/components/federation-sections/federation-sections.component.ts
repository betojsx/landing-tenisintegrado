import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FederationCardComponent } from "../federation-card/federation-card.component";
import { SectionHeaderComponent } from "../section-header/section-header";
import { TranslateModule } from "@ngx-translate/core";
import { LucideAngularModule } from "lucide-angular";

@Component({
	selector: "app-federation-sections",
	standalone: true,
	imports: [CommonModule, FederationCardComponent, SectionHeaderComponent, LucideAngularModule, TranslateModule],
	templateUrl: "./federation-sections.component.html",
})
export class FederationSectionsComponent {
	selectedCountry = "BR";

	countries = [
		{ code: "BR", name: "Brasil" },
		{ code: "AR", name: "Argentina" },
		{ code: "PE", name: "Peru" },
		{ code: "MX", name: "México" },
		{ code: "CL", name: "Chile" },
		{ code: "CR", name: "Costa Rica" },
		{ code: "PY", name: "Paraguay" },
		{ code: "UY", name: "Uruguay" },
		{ code: "VE", name: "Venezuela" },
		{ code: "AO", name: "Angola" },
	];

	confederations = [
		{
			name: "CBT",
			fullName: "Confederação Brasileira de Tênis",
			logo: "/logos/logo_brasil.jpg",
			link: "#",
			country: "BR",
		},
		{
			name: "AAT",
			fullName: "Asociación Argentina de Tenis",
			logo: "/logos/logo_argentina.jpg",
			link: "#",
			country: "AR",
		},
		{
			name: "FPT",
			fullName: "Federación Peruana de Tenis",
			logo: "/logos/logo_peru.jpg",
			link: "#",
			country: "PE",
		},
		{
			name: "FMT",
			fullName: "Federación Mexicana de Tenis",
			logo: "/logos/logo_mexico.jpg",
			link: "#",
			country: "MX",
		},
		{
			name: "FChT",
			fullName: "Federación Chilena de Tenis",
			logo: "/logos/logo_chile.jpg",

			link: "#",
			country: "CL",
		},
		{
			name: "FCR",
			fullName: "Federación Costarricense de Tenis",
			logo: "/logos/logo_costarica.jpg",

			link: "#",
			country: "CR",
		},
		{
			name: "APT",
			fullName: "Asociación Paraguaya de Tenis",
			logo: "/logos/logo_paraguay.jpg",

			link: "#",
			country: "PY",
		},
		{
			name: "AUT",
			fullName: "Asociación Uruguaya de Tenis",
			logo: "/logos/logo_uruguay.jpg",

			link: "#",
			country: "UY",
		},
		{
			name: "FVT",
			fullName: "Federación Venezolana de Tenis",
			logo: "/logos/logo_venezuela.jpg",

			link: "#",
			country: "VE",
		},
		{
			name: "FAT",
			fullName: "Federação Angolana de Ténis",
			logo: "/logos/logo_angola.jpg",

			link: "#",
			country: "AO",
		},
	];

	federations = [
		{
			name: "FAT",
			fullName: "Federação Alagoana de Tênis",
			logo: "/logos/logo_alagoas.jpg",
			link: "#",
			country: "BR",
		},
		{
			name: "FAPT",
			fullName: "Federação Amapaense de Tênis",
			logo: "/logos/logo_amapa.jpg",

			link: "#",
			country: "BR",
		},
		{
			name: "FAMT",
			fullName: "Federação Amazonense de Tênis",
			logo: "/logos/logo_amazonas.jpg",

			link: "#",
			country: "BR",
		},
		{
			name: "FCT",
			fullName: "Federação Catarinense de Tênis",
			logo: "/logos/logo_catarinense.jpg",

			link: "#",
			country: "BR",
		},
		{
			name: "FCT",
			fullName: "Federação Cearense de Tênis",
			logo: "/logos/logo_cearense.jpg",

			link: "#",
			country: "BR",
		},
		{
			name: "FEST",
			fullName: "Federação Espírito-Santense de Tênis",
			logo: "/logos/logo_espiritosanto.jpg",

			link: "#",
			country: "BR",
		},
		{
			name: "FGT",
			fullName: "Federação Goiana de Tênis",
			logo: "/logos/logo_goiana.jpg",

			link: "#",
			country: "BR",
		},
		{
			name: "FMTT",
			fullName: "Federação Mato-Grossense de Tênis",
			logo: "/logos/logo_matogrosso.jpg",

			link: "#",
			country: "BR",
		},
		{
			name: "FPT",
			fullName: "Federação Paraense de Tênis",
			logo: "/logos/logo_paraense.jpg",

			link: "#",
			country: "BR",
		},
		{
			name: "FPIT",
			fullName: "Federação Piauiense de Tênis",
			logo: "/logos/logo_piaui.jpg",

			link: "#",
			country: "BR",
		},
		{
			name: "FRT",
			fullName: "Federação Rondoniense de Tênis",
			logo: "/logos/logo_rondonia.jpg",

			link: "#",
			country: "BR",
		},
		{
			name: "FST",
			fullName: "Federação Sergipana de Tênis",
			logo: "/logos/logo_sergipana.jpg",

			link: "#",
			country: "BR",
		},
		{
			name: "FTT",
			fullName: "Federação Tocantinense de Tênis",
			logo: "/logos/logo_tocantins.jpg",

			link: "#",
			country: "BR",
		},
	];

	getFilteredConfederations() {
		return this.confederations.filter((conf) => conf.country === this.selectedCountry);
	}

	getFilteredFederations() {
		return this.federations.filter((fed) => fed.country === this.selectedCountry);
	}

	selectCountry(code: string) {
		this.selectedCountry = code;
	}

	getCountryName() {
		const country = this.countries.find((c) => c.code === this.selectedCountry);
		return country ? country.name : "";
	}
}

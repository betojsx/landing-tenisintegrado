import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FederationCardComponent } from "../federation-card/federation-card.component";

@Component({
  selector: "app-federation-sections",
  standalone: true,
  imports: [CommonModule, FederationCardComponent],
  templateUrl: "./federation-sections.component.html",
})
export class FederationSectionsComponent {
  confederations = [
    {
      name: "CBT",
      fullName: "Confederação Brasileira de Tênis",
      logo: "/logos/cbt.png",
      link: "#",
    },
    {
      name: "AAT",
      fullName: "Asociación Argentina de Tenis",
      logo: "/logos/aat.png",
      link: "#",
    },
    {
      name: "FPT",
      fullName: "Federación Peruana de Tenis",
      logo: "/logos/fpt.png",
      link: "#",
    },
    {
      name: "FMT",
      fullName: "Federación Mexicana de Tenis",
      logo: "/logos/fmt.png",
      link: "#",
    },
  ];

  federations = [
    {
      name: "FPT",
      fullName: "Federação Paulista de Tênis",
      logo: "/logos/fpt.png",
      link: "#",
    },
    {
      name: "FAT",
      fullName: "Federação Alagoana de Tênis",
      logo: "/logos/fat.png",
      link: "#",
    },
    {
      name: "FBT",
      fullName: "Federação Baiana de Tênis",
      logo: "/logos/fbt.png",
      link: "#",
    },
  ];

  constructor() {
    console.log(this.federations);
  }
}

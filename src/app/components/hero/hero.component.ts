import { Component } from "@angular/core";
import { LucideAngularModule } from "lucide-angular";
import { FeatureComponent } from "../feature/feature.component";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-hero",
  standalone: true,
  imports: [LucideAngularModule, CommonModule, FeatureComponent],
  templateUrl: "./hero.component.html",
})
export class HeroComponent {
  features = [
    {
      title: "Torneios",
      description: "Inscrições, jogos e resultados de torneios",
    },
    { title: "Rankings", description: "Classificações de jogadores" },
    {
      title: "Filiações",
      description: "Filie-se às federações de tênis do Brasil",
    },
    {
      title: "Quadras",
      description: "Reserva de quadras de tênis",
    },
  ];
}

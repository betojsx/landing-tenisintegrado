import { Component, Input, OnInit } from "@angular/core";
import { LucideAngularModule } from "lucide-angular";

@Component({
  selector: "app-federation-card",
  standalone: true,
  imports: [LucideAngularModule],
  templateUrl: "./federation-card.component.html",
})
export class FederationCardComponent implements OnInit {
  @Input() name!: string;
  @Input() fullName!: string;
  @Input() logo!: string;
  @Input() link!: string;

  randomBgColor: string;

  private bgColors = [
    // Red variations
    "bg-red-400",
    "bg-red-500",
    "bg-red-600",

    // Blue variations
    "bg-blue-400",
    "bg-blue-500",
    "bg-blue-600",
    "bg-sky-400",
    "bg-sky-500",
    "bg-cyan-500",

    // Green variations
    "bg-green-400",
    "bg-green-500",
    "bg-green-600",
    "bg-emerald-400",
    "bg-emerald-500",
    "bg-teal-500",

    // Purple variations
    "bg-purple-400",
    "bg-purple-500",
    "bg-purple-600",
    "bg-violet-400",
    "bg-violet-500",

    // Pink variations
    "bg-pink-400",
    "bg-pink-500",
    "bg-pink-600",
    "bg-rose-400",
    "bg-rose-500",

    // Yellow/Orange variations
    "bg-yellow-400",
    "bg-yellow-500",
    "bg-amber-400",
    "bg-amber-500",
    "bg-orange-400",
    "bg-orange-500",

    // Indigo variations
    "bg-indigo-400",
    "bg-indigo-500",
    "bg-indigo-600",
  ];

  constructor() {
    // Pick a random color from the array
    this.randomBgColor =
      this.bgColors[Math.floor(Math.random() * this.bgColors.length)];
  }

  ngOnInit() {
    console.log(this.name);
  }
}

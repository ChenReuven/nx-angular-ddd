import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FeatureCatalogComponent } from "./feature-catalog/feature-catalog.component";
import { BrowseCardsComponent } from "./browse-cards/browse-cards.component";

@NgModule({
  declarations: [FeatureCatalogComponent, BrowseCardsComponent],
  imports: [CommonModule],
})
export class CatalogModule {}

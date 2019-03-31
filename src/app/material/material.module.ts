import { NgModule } from "@angular/core";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatMenuModule } from "@angular/material/menu";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatTableModule } from '@angular/material/table';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatFormFieldModule} from '@angular/material/form-field';

let mt = [MatGridListModule, MatTableModule, MatCardModule, MatButtonModule, MatToolbarModule, MatMenuModule, MatExpansionModule, 
  MatProgressSpinnerModule, MatFormFieldModule];

@NgModule({
  declarations: [],
  imports: mt,
  exports: mt
})
export class MaterialModule {}

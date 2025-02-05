import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UiComponent } from 'modules/shared/ui';
import { productsRoutes } from './lib.routes';
import { ProductListComponent } from './product-list/product-list.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(productsRoutes),
    UiComponent,
    ReactiveFormsModule,
  ],
  declarations: [ProductListComponent],
})
export class ProductsModule {}

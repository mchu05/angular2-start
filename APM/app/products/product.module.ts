import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';

import { ProductListComponent }  from './product-list.component';
import { ProductFilterPipe }  from './product-filter.pipe';
import { ProductDetailComponent } from './product-detail.component';
import { ProductDetailGuard } from './product-guard.service';
import { ProductService } from './product.service';

@NgModule ({
    declarations: [ 
        ProductListComponent,
        ProductFilterPipe,
        ProductDetailComponent
  ],
  imports:[
    SharedModule,
    RouterModule.forChild([
        {path: 'products', component: ProductListComponent},
        {path: 'product/:id', 
        canActivate: [ ProductDetailGuard ],
        component: ProductDetailComponent},
    ])
  ],
  providers: [ 
      ProductService,
      ProductDetailGuard
    ],
})
export class ProductModule {}
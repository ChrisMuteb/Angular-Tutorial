import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProductService} from "../services/api/products/product.service";
import {ProductRepresentation} from "../services/api/model/product-representation";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit{
  constructor(
    private activatedRoute: ActivatedRoute,
    private service: ProductService
  ){}

  param: any;
  queryParam: any;

  ngOnInit(): void {
    // console.log(this.activatedRoute);
    // this.param = this.activatedRoute.snapshot.params['username'];
    // this.queryParam = this.activatedRoute.snapshot.queryParams['cours'];
    // this.service.getAllProductsWithLimit().subscribe({
    //   next: (data)=>{
    //     console.log(data);
    //
    //   }
    // });

    const product: ProductRepresentation = {
      title: 'My product',
      description: 'Product description',
      price: 12,
      category: 'Any categoru',
      image: 'https://some-image.jpg'
    }

    this.service.createProduct(product).subscribe({
      next: (result) => {
        console.log(result);
      },
      error: (error: HttpErrorResponse) =>{
        if(error instanceof ErrorEvent){
          console.error('An error occured: ', error);
        }else{
          console.error(`Server returned status code ${error.status}, error message: ${error.message}`);
        }
        // console.log(error)
      }
    })
  }
}

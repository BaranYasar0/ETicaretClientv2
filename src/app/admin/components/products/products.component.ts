import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent } from 'src/app/base/base.component';
import { Create_Product } from 'src/app/contracts/create_product';
import { HttpClientService } from 'src/app/services/common/http-client.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent extends BaseComponent implements OnInit {
  constructor(
    spinner: NgxSpinnerService,
    private httpClient: HttpClientService
  ) {
    super(spinner);
  }

  ngOnInit(): void {
    // this.httpClient
    //   .put(
    //     {
    //       controller: 'products',
    //     },
    //     {
    //       id: '82e0e97d-96a9-4f25-bbc3-a25dc160ef50',
    //       name: 'dildo',
    //       stock: 31,
    //       price: 62,
    //     }
    //   )
    //   .subscribe();
    this.httpClient
      .get({
        controller: 'products',
      })
      .subscribe((data) => console.log(data));
    // this.httpClient
    //   .delete(
    //     {
    //       controller: 'products',
    //     },
    //     '0c02de8f-bd24-4d95-ae2c-c47daec8976b'
    //   )
    //   .subscribe();

    // this.httpClient
    //   .post(
    //     {
    //       controller: 'products',
    //     },
    //     {
    //       name: 'kalem',
    //       stock: 100,
    //       price: 15,
    //     }
    //   )
    //   .subscribe();
  }
}

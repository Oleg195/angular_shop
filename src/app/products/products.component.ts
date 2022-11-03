import { Component, OnInit } from '@angular/core';
import FirebaseMethods from 'src/utils/firebaseMethods';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  products: Product[] = [new Product()];
  constructor(private firebaseMethods: FirebaseMethods) {}

  async ngOnInit(): Promise<void> {
    const productsSnapshot = await this.firebaseMethods.getDocuments(
      'products'
    );
    const products: { id: string; title: any; price: any; spec: any; image: any; }[] = [];
    productsSnapshot.forEach((doc) => {
      const data = doc.data();
      products.push({
        id: doc.id,
        title: data['title'],
        price: data['price'],
        image : data['image'],
        spec: data['spec'],
      });
    });
    this.products = products;
  }
}

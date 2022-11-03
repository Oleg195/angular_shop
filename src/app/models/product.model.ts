export class Product {
  id: string
  title: string
  price:number
  spec: any
  image: string
  constructor(id: string = '', title: string ='',image="", price:number = 0, spec: any = {}) {
    this.id = id
    this.title = title;
    this.price = price;
    this.spec = spec;
    this.image= image

  }
};

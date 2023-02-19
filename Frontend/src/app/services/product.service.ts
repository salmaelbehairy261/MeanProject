import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ProductService {
  URL: string = "http://localhost:8080"
  constructor(private client: HttpClient) {}
  getAllProducts(token:any) {
       const headers = new HttpHeaders({ 'Authorization': `Bearer ${token}`})
      return this.client.get(`${this.URL}/allproducts`, {headers})
    }
    getFeaturedProducts(){
      return this.client.get(`${this.URL}/Featured/`)
  }
  
    getProductswithCategoryID(id:any)
    {
      return this.client.get(`${this.URL}/products/${id}`)
    }
    
    getProductDetailsById(id:any){
      return this.client.get(`${this.URL}/productdetails/${id}`)
  }

  updateProductByID(body: any,token:any) {
    const headers = new HttpHeaders({ 'Authorization': `Bearer ${token}`})
    return this.client.patch(`${this.URL}/products`, body, {headers})
  }

  deletProduct(id: any,token: any) {
  const headers = new HttpHeaders({ 'Authorization': `Bearer ${token}`})
    return this.client.delete(`${this.URL}/products/${id}`, { headers }); 
  }

  addProduct(body: any,token:any) {
     const headers = new HttpHeaders({ 'Authorization': `Bearer ${token}`})
    return this.client.post(`${this.URL}/products`, body, { headers })
  }
}

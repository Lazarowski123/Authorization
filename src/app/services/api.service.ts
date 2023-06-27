import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from 'src/model';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiLogi = 'https://api.escuelajs.co/api/v1/auth/login';
  private apiCustomer = 'https://api.escuelajs.co/api/v1/auth/profile'

  constructor(private httpClient: HttpClient) { }
  
  login(email: string, password: string) {
    return this.httpClient.post(this.apiLogi, { email, password });
  }

  getCustomer() {
    return this.httpClient.get<Customer>(this.apiCustomer)
  }
}

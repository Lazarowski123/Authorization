import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

  constructor(private apiService:ApiService) { }

  ngOnInit(): void {
    this.apiService.getCustomer().subscribe(res => {
      console.log(res);
    })
  }

}

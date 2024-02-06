import { Component } from '@angular/core';
import { Customer } from './modul/customer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-state-management';
  customers:Customer[]=[];
  getCustomers(customers:Customer[]){
    
    this.customers = customers;
  }
}
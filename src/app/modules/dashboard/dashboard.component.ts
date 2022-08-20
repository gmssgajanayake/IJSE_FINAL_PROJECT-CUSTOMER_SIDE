import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {LocalDataService} from "../../services/LocalData/local-data.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private router: Router, private localDataService: LocalDataService) { }

  ngOnInit(): void {
  }

  logout(){
    console.log( this.localDataService.getCookie('customerId'));
    this.localDataService.deleteCookie('customerId');
    this.router.navigate(['/customer/login']);

  }

}

import {Component, OnInit} from '@angular/core';
import {School} from "../../shared/models/School";
import {SchoolService} from "../../shared/services/school.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'address', 'phone'];
  dataSource: School[] = [];


  constructor(private schoolService: SchoolService) {
  }

  ngOnInit(): void {
    this.schoolService.getAllSchools().subscribe(value => this.dataSource = value);
  }
}

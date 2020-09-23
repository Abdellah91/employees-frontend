import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees: Employee[];

  constructor(private employeeService: EmployeeService, private router: Router ) {  }

  ngOnInit(): void { 
    this.getEmployees();
  }

  private getEmployees() {
    this.employeeService.getEmployeeList().subscribe((data: Employee[]) => 
      this.employees = data );
 
    /*this.employees = [
      {
          id: 1,
          firstName: "Abdellah",
          lastName: "BELLAHCENE",
          emailId: "a@a.com"
      },
      {
          id: 2,
          firstName: "Yacine",
          lastName: "BELLAHCENE",
          emailId: "y@y.com"
      },
      {
          id: 3,
          firstName: "Adel",
          lastName: "BELLAHCENE",
          emailId: "a@a.fr"
      }
  ]*/
  }
   
  updateEmployee(id: number){
    this.router.navigate(['update-employee', id]);
  
  }

  deleteEmployee(id: number){
    //this.router.navigate(['update-employee', id]);
    this.employeeService.deleteEmployee(id).subscribe(data => 
    {//this.router.navigate(['/employees']);
      this.getEmployees();
  },
     error => console.log(error));
  }
  viewEmployeeDetails(id: number){
    this.router.navigate(['employee-details', id]);
  }

}



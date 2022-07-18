import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { EmployeeService } from '../shared/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(public empService: EmployeeService) { }

  ngOnInit(): void {
    this.getEmployee();
  }


  getEmployee(){
this.empService.getEmployee().subscribe((res: any) => {
  this.empService.Employees = res;
})
  }
delete(empId: any){
  this.empService.deleteEmployee(empId).subscribe((res: any) => {
    console.log('deleted')
  })
}
onSubmit(){
if(this.empService.form.value._id == ""){
  this.empService.postEmployee(this.empService.form.value).subscribe((res) => {
    console.log(res);
    this.getEmployee();
  })
}
else{
  this.empService.updateEmployee(this.empService.form.value).subscribe((res: any) => {
    console.log('update')
  })
}


  this.empService.formReset();
  this.getEmployee();
  
}
update(emp: any){
  this.empService.form = new FormGroup({
    name: new FormControl(emp.name),
    _id: new FormControl(emp._id),
    fatherName:  new FormControl(emp.fatherName),
    city: new FormControl(emp.city),
    mobile: new FormControl(emp.mobile)
  })
}

}

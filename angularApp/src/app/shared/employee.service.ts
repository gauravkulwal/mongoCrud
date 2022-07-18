import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
Employees!: any[];

private baseUrl = 'http://localhost:3000/employee';
  constructor(private http: HttpClient) { }

  form: FormGroup = new FormGroup({
    _id : new FormControl(''),
    name: new FormControl(''),
    fatherName: new FormControl(''),
    city: new FormControl(''),
    mobile: new FormControl('')
  })

  formReset(){
    this.form = new FormGroup({
      _id : new FormControl(''),
      name: new FormControl(''),
      fatherName: new FormControl(''),
      city: new FormControl(''),
      mobile: new FormControl('')
    }) 
  }
getEmployee(){
  return this.http.get(this.baseUrl);
}
postEmployee(emp: any){
  return this.http.post(this.baseUrl , emp)
}
deleteEmployee(id: any){
  return this.http.delete(this.baseUrl + `/${id}`);
}
updateEmployee(emp: any){
  return this.http.put(this.baseUrl + `/${emp._id}` , emp);
}
}

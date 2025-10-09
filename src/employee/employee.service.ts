/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';

@Injectable()
export class EmployeeService {
     private employees = [
        {id: 1 , name : "Shazan"} ,
        {id: 2 , name : "Vijay"} ,
        {id: 3 , name : "Priya"} ,
     ];
     getEmployees(){
        return this.employees ;
     };
     getEmployeeById(id: number){
        return this.employees.find((employee)=>{
            return employee.id === id
        })
     }
}

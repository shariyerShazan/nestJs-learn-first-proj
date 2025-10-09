/* eslint-disable prettier/prettier */
import { EmployeeService } from './employee.service';
import { Controller, Get, Param } from '@nestjs/common';

@Controller('employee')
export class EmployeeController {
    constructor(private readonly employeeService : EmployeeService){}
    @Get()
    getEmployees(){
         return this.employeeService.getEmployees();
    }
    @Get(":id")
    getEmployeeById(@Param("id") id: string){
        return this.employeeService.getEmployeeById(Number(id));
    }
}

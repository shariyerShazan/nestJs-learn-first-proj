/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { ProductService } from './product/product.service';
import { ProductController } from './product/product.controller';
import { EmployeeModule } from './employee/employee.module';
import { EmployeeController } from './employee/employee.controller';
import { EmployeeService } from './employee/employee.service';
import { CategoryModule } from './category/category.module';
import { StudentService } from './student/student.service';
import { StudentController } from './student/student.controller';
import { StudentModule } from './student/student.module';



@Module({
  imports: [EmployeeModule, CategoryModule, StudentModule],
  controllers: [AppController, UserController, ProductController, EmployeeController, StudentController],
  providers: [AppService, ProductService , EmployeeService, StudentService],
})
export class AppModule {}

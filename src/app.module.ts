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


@Module({
  imports: [EmployeeModule, CategoryModule],
  controllers: [AppController, UserController, ProductController, EmployeeController],
  providers: [AppService, ProductService , EmployeeService],
})
export class AppModule {}

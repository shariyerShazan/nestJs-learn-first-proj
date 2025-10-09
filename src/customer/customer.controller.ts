import { CustomerService } from './customer.service';
/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';

@Controller('customer')
export class CustomerController {
    constructor(private readonly customerService : CustomerService){}

    // get
    @Get()
    getAllCustomers(){
        return this.customerService.getAllCustomers();
    }

    // post
    @Post()
    addCustomer(@Body() createCustomerDto : CreateCustomerDto){
        return this.customerService.addCustomer(createCustomerDto);
    }
}

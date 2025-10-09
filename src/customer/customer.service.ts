import { CreateCustomerDto } from './dto/create-customer.dto';
/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Customer } from './interfaces/customer.interface';

@Injectable()
export class CustomerService {
    private customers : Customer[] = [];
    // GET
    getAllCustomers(): Customer[]{
        return this.customers;
    }

    // POST
    addCustomer(createCustomerDto: CreateCustomerDto): Customer {
        const newCustomer : Customer = {
            id: Date.now() ,
            ...createCustomerDto,
        }
        this.customers.push(newCustomer)
        return newCustomer ;
    }
    
}

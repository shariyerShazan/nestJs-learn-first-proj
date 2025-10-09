
/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { StudentService } from './student.service';


@Controller('student')
export class StudentController {
    constructor(private readonly studentService: StudentService){}
    // get
    @Get()
    getAllStudent(){
        return this.studentService.getAllStudents() ;
    }
    @Get(":id")
    getStudentById(@Param("id")  id: string){
        return this.studentService.getStudentById(Number(id));
    }

    // post
    @Post()
    createStudent(@Body() body: { name: string ; age : number}){
        return this.studentService.createStudent(body) ;
    }

    // put
    @Put(":id")
    updateStudent(@Param("id") id: string , @Body() body: {name: string ; age : number}){
        return this.studentService.updateStudent(Number(id) , body)
    }
    // patch
    @Patch(":id")
    patchStudent(@Param("id") id: string , @Body() body: Partial<{name: string ; age : number}>){
        return this.studentService.patchStudent(Number(id) , body)
    }

    //delete
    @Delete(":id")
    removeStudent(@Param("id") id: string){
        return this.studentService.deleteStudent(Number(id))
    }
}

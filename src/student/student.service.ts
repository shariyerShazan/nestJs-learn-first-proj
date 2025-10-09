/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class StudentService {
    private students = [
        {id: 1 , name: "Shazan" , age: 22},
        {id: 2 , name: "Vijay" , age: 59},
        {id: 3 , name: "Priya" , age: 23},
    ];
    // GET
    getAllStudents(){
        return this.students;
    };
    getStudentById(id: number){
        const student = this.students.find((student) => student.id === id);
        if(!student)throw new NotFoundException("Student not found!");
        return student
    }
    // POST
    createStudent(data: {name: string ; age: number}){
        const newStudent = {
            id: Date.now() ,
            ...data ,
        }
        this.students.push(newStudent)
        return newStudent ;
    }
    // PUT
    updateStudent(id: number , data: {name: string ; age: number}){
        const index = this.students.findIndex((student) => student.id === id);
        if(index === -1)throw new NotFoundException("Student not found!")
             this.students[index] = {id , ...data};
             return this.students[index]
     }

    //  PATCH
    patchStudent(id: number , data: Partial<{name: string ; age : number}>){
        const student = this.getStudentById(id) 
        Object.assign(student , data) ; // Object.assign change provided data from the prev data..
        return student ;
    }

    //DELETE
    deleteStudent(id: number){
        const index = this.students.findIndex((student) => student.id === id);
        if(index === -1)throw new NotFoundException("Student not found!")
        const deleted = this.students.splice(index , 1) ;
        return {message : "Student deleted" , student: deleted[0] , success: true}
    }
}


import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Irole } from '../model/interface/roles';
import { CommonModule } from '@angular/common';

//component decorator tells us about the class 
@Component({
  selector: 'app-roles',
  imports: [CommonModule,FormsModule],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css'
})

export class RolesComponent implements OnInit{
  // firstName:string= "Angular Tutorial";
  // currentDate:Date = new Date();
  // inputType:string = "radio";
  // selected_state: string = "";
  // showWelcomeAlert():void{
  //   alert("Hello! Welcome Back");
  // }
  
  roleList:Irole[] = [];
http = inject(HttpClient);
ngOnInit(): void {
  this.getAllRoles();
}
getAllRoles(){
  this.http.get("https://freeapi.miniprojectideas.com/api/ClientStrive/GetAllRoles").subscribe((res:any)=>{
  this.roleList = res.data;
  })
}

















}

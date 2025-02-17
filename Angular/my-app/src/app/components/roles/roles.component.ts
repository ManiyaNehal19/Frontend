import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
//component decorator tells us about the class 
@Component({
  selector: 'app-roles',
  imports: [FormsModule],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css'
})

export class RolesComponent {
  firstName:string= "Angular Tutorial";
  currentDate:Date = new Date();
  inputType:string = "radio";
  selected_state: string = "";
  showWelcomeAlert():void{
    alert("Hello! Welcome Back");
  }
}

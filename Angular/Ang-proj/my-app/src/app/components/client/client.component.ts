import { Component, inject, OnInit } from '@angular/core';
import { Client } from '../model/class/Client';
import { FormsModule } from '@angular/forms';
import { ClientService } from '../../services/client.service';
import { APIResonseModel } from '../model/interface/roles';
import { Observable } from 'rxjs';
import { AsyncPipe, DatePipe, JsonPipe, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-client',
  imports: [FormsModule, UpperCasePipe, DatePipe],
  templateUrl: './client.component.html',
  styleUrl: './client.component.css'
})
export class ClientComponent implements OnInit{
  currentDate:Date = new Date();
clientobg: Client = new Client();
clienList:Client[] = [];
clientService = inject(ClientService);
userList$:Observable<any> = new Observable<any>;
ngOnInit(): void {
  this.loadClient();
  this.userList$ = this.clientService.getAllCLients();
}
loadClient(){
  this.clientService.getAllCLients().subscribe((res:APIResonseModel)=>{
    this.clienList = res.data;
  })
}

onSaveClient(){
debugger;
this.clientService.AddUpdate(this.clientobg).subscribe((res:APIResonseModel)=>{
  if(res.result){
    alert("Client Created Successfully");
    this.loadClient();
    this.clientobg = new Client();
  }else{
    alert(res.message);
  }
})
}
onDelete(id:number){
  const isDelete = confirm("Are you sure you want to delete");
  if(isDelete){
    this.clientService.DeleteClient(id).subscribe((res:APIResonseModel)=>{
      if(res.result){
        alert("Client deleted Successfully");
        this.loadClient();
        
      }else{
        alert(res.message);
      }
    })
  }
  
}
}

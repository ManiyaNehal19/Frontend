import { Component, inject, OnInit } from '@angular/core';
import { MasterService } from '../../services/master.service';
import { APIResonseModel, Idesignation } from '../model/interface/roles';

@Component({
  selector: 'app-designation',
  imports: [],
  templateUrl: './designation.component.html',
  styleUrl: './designation.component.css'
})
export class DesignationComponent implements OnInit{
  designationrole:Idesignation[] = [];
  isLoader:boolean = true;
  masterService = inject(MasterService);
  ngOnInit(): void {
    this.masterService.GetDesignations().subscribe((result:APIResonseModel)=>{
        this.designationrole = result.data;
        this.isLoader=false;
    }, error=>{
      alert("Network Down")
      this.isLoader=false;
    })
  }

}


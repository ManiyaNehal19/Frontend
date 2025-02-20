import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { APIResonseModel } from '../components/model/interface/roles';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor(private http: HttpClient) { }
  GetDesignations():Observable<APIResonseModel>{
    return this.http.get<APIResonseModel>("https://freeapi.miniprojectideas.com/api/ClientStrive/GetAllDesignation");
  }
}


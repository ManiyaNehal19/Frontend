import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../components/model/class/Client';
import { APIResonseModel } from '../components/model/interface/roles';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) {
   
}
getAllCLients():Observable<APIResonseModel>{
  return this.http.get<APIResonseModel>("https://freeapi.miniprojectideas.com/api/ClientStrive/GetAllClients");

}
AddUpdate(obg:Client):Observable<APIResonseModel>{
  return this.http.post<APIResonseModel>("https://freeapi.miniprojectideas.com/api/ClientStrive/AddUpdateClient", obg);

}
DeleteClient(id:number):Observable<APIResonseModel>{
  return this.http.delete<APIResonseModel>("https://freeapi.miniprojectideas.com/api/ClientStrive/DeleteClientByClientId"+id);

}
}

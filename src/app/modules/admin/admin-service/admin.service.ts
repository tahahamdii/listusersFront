import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


const BASIC_URL = ["http://localhost:8081/"];

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  addUniversite(universiteDto: any){
    return this.http.post<[]>(BASIC_URL + "api/universites/add",universiteDto );
  }
}

import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {School} from "../models/School";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SchoolService {

  private SCHOOL_BASE_URL = 'school';
  constructor(private httpClient: HttpClient) { }

  public getAllSchools(): Observable<School[]> {
  return this.httpClient.get<School[]>(this.SCHOOL_BASE_URL);
  }

  public getSchoolById(id: number): Observable<School> {
    return this.httpClient.get<School>(this.SCHOOL_BASE_URL + '/' +id);
  }
}

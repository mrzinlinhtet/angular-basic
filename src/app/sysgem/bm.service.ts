import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {IMeal} from "../IMeal";
import {APIResponse} from "../APIResponse";

@Injectable({
  providedIn: 'root'
})
export class BmService {

  dataURL: string = "https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian";

  constructor(private http: HttpClient) {
  }

  getAllMeal(): Observable<APIResponse> {
    return this.http.get<APIResponse>(this.dataURL)
  }
}

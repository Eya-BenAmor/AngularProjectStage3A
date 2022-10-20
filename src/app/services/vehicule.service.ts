import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Vehicule } from '../models/vehicule';
@Injectable({
  providedIn: 'root'
})
export class VehiculeService {
private getUrl: string= "http://localhost:8084/api/v1/vehicules";
  constructor(private _httpClient: HttpClient) { }
  getVehicules(): Observable<Vehicule[]> {
    return this._httpClient.get<Vehicule[]>(this.getUrl).pipe(
      map(response => response)
    )
  }

  saveVehicule(vehicule: Vehicule): Observable<Vehicule> {
    return this._httpClient.post<Vehicule>(this.getUrl, vehicule);
  }

  getVehicule(id: number): Observable<Vehicule> {
    return this._httpClient.get<Vehicule>(`${this.getUrl}/${id}`).pipe(
      map(response => response)
    )
  }

  deleteVehicule(id: number): Observable<any> {
    return this._httpClient.delete(`${this.getUrl}/${id}`, {responseType: 'text'});
  }
}

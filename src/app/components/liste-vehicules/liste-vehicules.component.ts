import { Component, OnInit } from '@angular/core';
import { Vehicule } from '../../models/vehicule';
import { VehiculeService } from '../../services/vehicule.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-liste-vehicules',
  templateUrl: './liste-vehicules.component.html',
  styleUrls: ['./liste-vehicules.component.css']
})
export class ListeVehiculesComponent implements OnInit {
  vehicules: Vehicule[] = [];

  filters = {
    keyword: '',
    sortBy: 'etat'
  }
  constructor(private _vehiculeService: VehiculeService ,
    private router: Router)  { }

  ngOnInit(): void {
    this.listVehicules();
    
  }
  deleteVehicule(id: number) {
    this._vehiculeService.deleteVehicule(id).subscribe(
      data => {
        console.log('deleted response', data);
        this.listVehicules();
      }
    )
  }

 listVehicules() {
    this._vehiculeService.getVehicules().subscribe(
      data => this.vehicules = this.filterVehicules(data)
    )
  }

  filterVehicules(vehicules: Vehicule[]) {
    return vehicules.filter((e) => {
      return e.etat.toLowerCase().includes(this.filters.keyword.toLowerCase());
    })
   
  
  }

  editvehicule(id: number){
    this.router.navigate(['editvehicule', id]);
  }

 
}

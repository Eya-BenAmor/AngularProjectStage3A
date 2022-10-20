import { Component, OnInit } from '@angular/core';
import { Vehicule } from 'src/app/models/vehicule';
import { VehiculeService } from 'src/app/services/vehicule.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-vehicule',
  templateUrl: './add-vehicule.component.html',
  styleUrls: ['./add-vehicule.component.css']
})
export class AddVehiculeComponent implements OnInit {
 vehicule: Vehicule = new Vehicule();

  constructor(private _vehiculeService: VehiculeService,
    private _router: Router,
    private _activatedRoute: ActivatedRoute) { }

    ngOnInit(): void {
      const isIdPresent = this._activatedRoute.snapshot.paramMap.has('id');
      if (isIdPresent) {
          const id = +this._activatedRoute.snapshot.paramMap.get('id');
          this._vehiculeService.getVehicule(id).subscribe(
            data => this.vehicule = data 
          )
      }
    }
  saveVehicule() {
    this._vehiculeService.saveVehicule(this.vehicule).subscribe(
      data => {
        console.log('response', data);
        this._router.navigateByUrl("/vehicules");
      }
    )
  }

  deleteVehicule(id: number) {
    this._vehiculeService.deleteVehicule(id).subscribe(
      data => {
        console.log('deleted response', data);
        this._router.navigateByUrl('/vehicules');
      }
    )
}
}
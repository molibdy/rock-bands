import { Component, OnInit } from '@angular/core';
import { Band } from 'src/app/models/band';
import { BandsService } from 'src/app/shared/bands.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {
  public editable:boolean=false;
  constructor(public bandsService:BandsService) { }

  ngOnInit(): void {
  }

  editBand(bandName:string, bandYear:number, bandPicture:string, bandHitName:string, bandHitUrl:string){
    let newBand:Band={id:this.bandsService.selectedBand.id,name:bandName,yearCreated:bandYear,picture:bandPicture,bestHitName:bandHitName,bestHitUrl:bandHitUrl};
    console.log(newBand)
    this.bandsService.editBand(newBand).subscribe((edition:any)=>{
      if(edition.type>0){
        
        this.bandsService.getBand(this.bandsService.selectedBand.id).subscribe((band:any)=>{
          if(band.type>0){
            this.bandsService.selectedBand=band.result[0];
            this.editable=false;
          }
        })
      }
    })
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Band } from 'src/app/models/band';
import { BandsService } from 'src/app/shared/bands.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  public searchInput:string='';
  public filteredBands:Band[]=[];
  public showForm:boolean=false;
  public showSearch:boolean=false;
  public bandForm:FormGroup;
  constructor(public bandsService:BandsService, 
    private router:Router,
    public formBuilder:FormBuilder) { 
      this.buildForm()
    }

  ngOnInit(): void {
    this.getBands();
  }

  private buildForm(){
    this.bandForm=this.formBuilder.group({
      name:[, Validators.required],
      yearCreated:[, [Validators.required, Validators.min(1000)]],
      picture:[, Validators.required],
      bestHitName:[, Validators.required],
      bestHitUrl:[]
    })
  }

  getBands(){
    this.bandsService.getBands().subscribe((bands:any)=>{
      if(bands.type>0){
        this.bandsService.bands=bands.result;
        this.filteredBands=this.bandsService.bands;
      }
    })
  }

  searchBand(){
    if(this.searchInput.length>0){
      this.filteredBands= this.bandsService.bands.filter((band)=>{
        return band.name.toLowerCase().includes(this.searchInput.toLowerCase())
      })
    }
    else this.filteredBands=this.bandsService.bands;
  }

  seeDetails(id:number){
    for(let band of this.bandsService.bands){
      if (band.id==id){
        this.bandsService.selectedBand=band;
      }
    }
    this.router.navigate(['detalle'])
    
  }

  deleteBand(id:number){
    this.bandsService.deleteBand(id).subscribe((deletion:any)=>{
      if(deletion.type>0){
        this.getBands();
      }
    })
  }

  addBand(){
    this.bandsService.addBand(this.bandForm.value).subscribe((addition:any)=>{
      if(addition.type>0){
        this.showForm=false;
        this.getBands()
      }
    })
  }


}

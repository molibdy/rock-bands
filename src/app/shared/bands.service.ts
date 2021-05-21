import { Injectable } from '@angular/core';
import { Band } from '../models/band';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class BandsService {
  public bands:Band[];
  public selectedBand:Band;
  private url='http://localhost:300/bands'
  constructor(private http:HttpClient) { 
    this.bands=[];
  }

  getBands(){
    return this.http.get(this.url);
  }

  addBand(newBand:Band){
    return this.http.post(this.url,newBand);
  }

  editBand(newBand:Band){
    return this.http.put(this.url,newBand);
  }

  deleteBand(id:number){
    return this.http.delete(`${this.url}/id=${id}`)
  }


}

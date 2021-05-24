import { Injectable } from '@angular/core';
import { Band } from '../models/band';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class BandsService {
  public bands:Band[];
  public selectedBand:Band;
  private url='https://rockband-api.herokuapp.com/bands'
  constructor(private http:HttpClient) { 
    this.bands=[];
  }

  getBands(){
    return this.http.get(this.url);
  }
  getBand(id:number){
    return this.http.get(`${this.url}?id=${id}`);
  }

  addBand(newBand:Band){
    return this.http.post(this.url,newBand);
  }

  editBand(newBand:Band){
    return this.http.put(this.url,newBand);
  }

  deleteBand(id:number){
    return this.http.delete(`${this.url}?id=${id}`)
  }


}

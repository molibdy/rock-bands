import { Component, OnInit } from '@angular/core';
import { BandsService } from 'src/app/shared/bands.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  constructor(public bandsService:BandsService) { }

  ngOnInit(): void {
  }

}

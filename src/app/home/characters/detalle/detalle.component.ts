import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RickmortyService } from 'src/app/rickmorty.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit{
  id:string|null="";
  item:any;
  
  // Con ActivatedRoute podemos acceder a la información que se pasa desde URL
  constructor(private route:ActivatedRoute, private rickservice : RickmortyService){

  }

  ngOnInit(): void {
    // Recoge el ID que se manda desde URL
    this.id = this.route.snapshot.paramMap.get('id');

    // condicional para comprobar que no llega vacio el ID
    if (this.id!=""){
      /* 
      Llamamos un metodo del servicio, el cual devuelve solo 1 objeto 
      se le pasa ID como argumento para agregarlo a la URL GET
      */
      this.rickservice.getItem(this.id!)
        .subscribe(result => {
          console.warn(result);
          this.item = result;
        });
    }
  }
  
}

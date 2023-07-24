import { AfterViewInit, Component, OnInit } from '@angular/core';
import { RickmortyService } from 'src/app/rickmorty.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
// En la clase implementamos OnInit (metodo que se ejecuta cuando inicia la clase)
export class CharactersComponent implements OnInit  {
  /* 
  Esta variable contendra un array en el que guardamos las 5 
  tarjetas de los personajes, estos datos los recibimos desde el 
  servicio que a su vez lo recibe de la API
  */
  characters : any | undefined ;
  
  // Esta variable guardara el objeto escogido para ver en detalle 
  item:any|undefined;

  // En el constructor inyectamos el servicio por donde llammamos a la API
  constructor(private rickservice : RickmortyService){}

  /* 
  Al iniciar el componente realiza una llamada de metodos al servicio,
  entre estos llamamos al metodo Randomized que genera 5 numeros aleatorios
  para buscar 5 personajes aleatorios por ID desde la URL de la API, luego se 
  subscribe al retorno de datos del servicio a la URL*/
  ngOnInit(){
    if (this.characters==undefined) {
      // Llama al metodo que genera aleatorios
      this.rickservice.setRandomized();
      // Llama al metodo para recibir los datos de la API
      this.rickservice.retornar()
      .subscribe(result => {
        // imprime por consola datos recibidos
        console.warn(result);
        // guarda los datos en el array de este componente
        this.characters = result;
      });
    }
  }

  
  /* 
  Este metodo guardara el objeto seleccionado de los 5 
  en la variable Item del componente 
  */
  getItemSelect(item:any){
    this.item = item;
  }
}

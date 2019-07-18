import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform{

  transform(value:string, activar?:boolean): string{
    let nombre = value;
    if(activar){
      nombre = "";
      for(let i=0; i<value.length;i++){
          nombre = nombre + "*";
      }      
    }
    return nombre;
  }
}